<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Product extends CI_Controller {

    private $Controller = "product";
    private $task;

    public function __construct() {
        parent::__construct();
        if (!$this->session->userdata('idAdmin'))
            redirect(PATH_FOLDER_ADMIN . '/login');
		 $this->load->model(PATH_FOLDER_ADMIN . '/product_model', 'product');
		$this->load->model(PATH_FOLDER_ADMIN . '/category_model', 'category');
		$this->load->model(PATH_FOLDER_ADMIN . '/loai_model', 'loai');
		$this->load->model(PATH_FOLDER_ADMIN . '/quan_model', 'quan');
		$this->load->model(PATH_FOLDER_ADMIN . '/gia_model', 'gia');
		$this->load->model(PATH_FOLDER_ADMIN . '/langg_model', 'langg');		
		$this->load->model(PATH_FOLDER_ADMIN.'/user_model', 'user');
        $this->task = $this->task();
    }

    public function task() {
        $data['task_add'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/add";
        $data['task_edit'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/edit";
        $data['task_del'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/del";
        $data['task_list'] = $this->session->userdata("CALLBACK_URL") ? $this->session->userdata("CALLBACK_URL") : PATH_FOLDER_ADMIN . "/" . $this->Controller . "/p";
        $data['task_status'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/status";
        $data['action_form'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/action";
        $data['page'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/p";
        $data['task_serach'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/search";
        return $data;
    }

    public function index() {
        $this->p(0);
    }

    public function p($page = 0) {
        $data = $this->task;
        /* Đánh dấu trị trí */
        $this->session->set_userdata(array("CALLBACK_URL" => current_url()));
        $data['title_header'] = "Sản phẩm";

        #Phân trang
        $config['base_url'] = $data['page'];
        $config['total_rows'] = $this->product->total_rows();
        $config['per_page'] = ADMIN_PER_PAGE;
        $config['num_links'] = ADMIN_NUM_LINKS;
        $config['cur_page'] = $page;
        $this->pagination->initialize($config);
        $data['total_rows'] = $config['total_rows'];
        $data['list'] = $this->product->display($config['per_page'], $page);

        $this->load->view(PATH_FOLDER_ADMIN . '/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/' . $this->Controller . '/list', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/view.footer.php');
    }

    /**
     * Addtion
     */
    public function add() {
        $data = $this->task;
        if ($this->input->post()) {
            $this->product->add();
            $this->messages->add(MSG_ADD_SUCCESS, 'success');
            redirect($data['task_list']);
        }
        $data['title_header'] = "Thêm - Sản phẩm";
        $data['orderingMax'] = $this->product->orderingMax();
      
	
        $this->load->view(PATH_FOLDER_ADMIN . '/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/' . $this->Controller . '/form', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/view.footer.php');
    }

    public function edit($id) {
        $data = $this->task;
        if ($this->input->post()) {
            $this->product->update($id);
            $this->messages->add(MSG_EDIT_SUCCESS, 'success');
            redirect($data['task_list']);
        }

        $data['title_header'] = "Sửa - Sản phẩm";
		
        $data['detail'] = $this->product->getList((int) $id);
        $data['orderingMax'] = $this->product->orderingMax();
  
        /* #### */
        $this->load->view(PATH_FOLDER_ADMIN . '/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/' . $this->Controller . '/form', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/view.footer.php');
    }

    /**
     * Chức năng : Xóa bằng href
     * @author : Nguyễn Vũ Linh
     */
    public function del($id) {
        $data = $this->task;
        $this->product->del($id);
        $this->messages->add(MSG_DEL_SUCCESS, 'success');
        redirect($data['task_list']);
    }

    /**
     * Chức năng : Ajax Hiện/Ẩn nhanh
     * @author : Nguyễn Vũ Linh
     */

    public function status($id = 0, $status = 0, $field = 'status') {
        echo $this->product->status($id, $status, $field);
    }

    /**
     * Chức năng : Xóa nhiều & Sắp xếp nhanh
     * @author : Nguyễn Vũ Linh
     */
    public function action() {
        $data = $this->task;
        if ($this->input->post("del")) {
            $this->product->del_all();
            $this->messages->add(MSG_DEL_SUCCESS, 'success');
        } else if ($this->input->post("ordering")) {
            $this->product->ordering_all();
            $this->messages->add(MSG_EDIT_SUCCESS, 'success');
        }
        redirect($data['task_list']);
    }

    /**
     * Trang tìm kiếm
     */
    public function search() {
        $filter_name = $this->input->get("filter_name");
        $data = $this->task;
        $data['title_header'] = "Search - ";
        $this->load->view(PATH_FOLDER_ADMIN . '/view.header.php', $data);
        /* #### */
        $data['list'] = $this->product->displaySearch($filter_name);
        $data['total_rows'] = count($data['list']);
        $data['filter_name'] = $filter_name;
        /* #### */
        $this->load->view(PATH_FOLDER_ADMIN . '/' . $this->Controller . '/list', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/view.footer.php');
    }
	 public function getImgThumb($id_product = 0) {
        $data['thumb'] = $this->product->getImgThumb($id_product);
        $this->load->view(PATH_FOLDER_ADMIN . '/ajax/ajax.img.thumb.php', $data);
    }
	 public function changeitem($id_product = 0) {
        $data['item'] = $this->item->getItem($id_product);
        $this->load->view(PATH_FOLDER_ADMIN . '/ajax/ajaxitem.php', $data);
    }
}
?>
