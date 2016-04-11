<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Khuyenmai extends CI_Controller {

    /**
     * Tên controller = tên thư mục(gồm form.php, list.php)
     */
    private $Controller = "khuyenmai";
    private $task;
    private $arrayTitle = array(
		"khuyen-mai"=>"Khuyến mãi"
    );

    public function __construct() {
        parent::__construct();
        if (!$this->session->userdata('idAdmin'))
            redirect(PATH_FOLDER_ADMIN . '/login');
        $this->load->model(PATH_FOLDER_ADMIN . '/khuyenmai_model', 'khuyenmai');
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
        $data['page'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/p";
        $data['task_serach'] = PATH_FOLDER_ADMIN . "/" . $this->Controller . "/search";
        return $data;
    }

    public function edit($type) {
        $data = $this->task;
        if ($this->input->post()) {
            $this->khuyenmai->update($type);
            //$this->messages->add(MSG_EDIT_SUCCESS, 'success');
            redirect($data['task_edit'] . "/" . $type, "refresh");
        }

        $data['title_header'] = isset($this->arrayTitle[$type]) ? $this->arrayTitle[$type] : "Chưa có tiêu đề";
        $this->load->view(PATH_FOLDER_ADMIN . '/view.header.php', $data);
        /* #### */

        $data['detail'] = $this->khuyenmai->getList($type);

        /* #### */
        $this->load->view(PATH_FOLDER_ADMIN . '/' . $this->Controller . '/form', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/view.footer.php');
    }

}

?>
