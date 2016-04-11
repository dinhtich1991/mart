<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Slider extends CI_Controller {
    /*     * slider
     * Tên controller = tên thư mục(gồm form.php, list.php)
     */

    private $Controller = "slider";
    private $task;

    public function __construct() {
        parent::__construct();
        if (!$this->session->userdata('idAdmin'))
            redirect(PATH_FOLDER_ADMIN . '/login');
        $this->load->model(PATH_FOLDER_ADMIN . '/slider_model', 'slider');
		 $this->load->model(PATH_FOLDER_ADMIN.'/user_model', 'user');
      
        $this->task = $this->task();
    }

    /**
     * Nạp link task thêm,sửa,xóa,danh sách,tình trạng ẩn hiện,submit form (Xóa chọn, sắp sếp nhanh)
     * Dạng folderadmin/controller/method
     */
    public function task() {
        $data['task_add'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/add";
        $data['task_edit'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/edit";
        $data['task_del'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/del";
        $data['task_list'] = PATH_FOLDER_ADMIN . "/" . $this->Controller;
        $data['task_status'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/status";
        $data['action_form'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/action";
        $data['slider'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/p";
        return $data;
    }

    public function index() {
        $this->p(0);
    }

    public function p($slider = 0) {
        $data = $this->task;
        $data['title_header'] = "Slider";
        $this->load->view(PATH_FOLDER_ADMIN . '/view.header.php', $data);
        $config['base_url'] = $data['slider'];
        $config['total_rows'] = $this->slider->total_rows();
        $config['per_slider'] = ADMIN_PER_PAGE;
        $config['num_links'] = ADMIN_NUM_LINKS;
        $config['cur_slider'] = $slider;
        $this->pagination->initialize($config);
        $data['total_rows'] = $config['total_rows'];
        $data['list'] = $this->slider->display($config['per_slider'], $slider);
        $this->load->view(PATH_FOLDER_ADMIN . '/' . $this->Controller . '/list', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/view.footer.php');
    }

    /**
     * Addtion
     */
    public function add() {
        $data = $this->task;
        if ($this->input->post()) {
            $this->slider->add();
            $this->messages->add(MSG_ADD_SUCCESS, 'success');
            redirect($data['task_list']);
        }
        $data['title_header'] = "Add new";
        $this->load->view(PATH_FOLDER_ADMIN . '/view.header.php', $data);
        $data['orderingMax'] = $this->slider->orderingMax();
        $this->load->view(PATH_FOLDER_ADMIN . '/' . $this->Controller . '/form', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/view.footer.php');
    }

    public function edit($id) {
        $data = $this->task;
        if ($this->input->post()) {
            $this->slider->update($id);
            $this->messages->add(MSG_EDIT_SUCCESS, 'success');
            redirect($data['task_list']);
        }

        $data['title_header'] = "Edit";
        $this->load->view(PATH_FOLDER_ADMIN . '/view.header.php', $data);
        /* #### */

        $data['detail'] = $this->slider->getList((int) $id);


        /* #### */
        $this->load->view(PATH_FOLDER_ADMIN . '/' . $this->Controller . '/form', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/view.footer.php');
    }

    /**
     * Chức năng : Xóa bằng href
     * @author : Huỳnh Văn Được - 20121123
     */
    public function del($id) {
        $data = $this->task;
        $this->slider->del($id);
        $this->messages->add(MSG_DEL_SUCCESS, 'success');
        redirect($data['task_list']);
    }

    /**
     * Chức năng : Ajax Hiện/Ẩn nhanh
     * @author : Huỳnh Văn Được - 20121123
     */
    public function status($id = 0, $status = 0, $field = 'status') {
        echo $this->slider->status($id, $status, $field);
    }

    /**
     * Chức năng : Xóa nhiều & Sắp xếp nhanh
     * @author : Huỳnh Văn Được - 20121123
     */
    public function action() {
        $data = $this->task;
        if ($this->input->post("del")) {
            $this->slider->del_all();
            $this->messages->add(MSG_DEL_SUCCESS, 'success');
        } else if ($this->input->post("ordering")) {
            $this->slider->ordering_all();
            $this->messages->add(MSG_EDIT_SUCCESS, 'success');
        }
        redirect($data['task_list']);
    }

}

?>
