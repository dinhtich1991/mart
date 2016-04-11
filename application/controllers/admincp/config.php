<?php
if (!defined('BASEPATH'))  exit('No direct script access allowed');

class Config extends CI_Controller {

    /**
     * Tên controller = tên thư mục chứa form, list
     */
    private $Controller = "config";

    public function __construct() {
        parent::__construct();
        if(!$this->session->userdata('idAdmin')) redirect(PATH_FOLDER_ADMIN.'/login');
        $this->load->model(PATH_FOLDER_ADMIN . '/config_model', 'config_');        
        $this->load->model(PATH_FOLDER_ADMIN . '/user_model', 'user');
    }

    public function index() {
        if ($this->input->post()) {
            $this->config_->updateSMTP();
            $this->messages->add(MSG_EDIT_SUCCESS, 'success');
            redirect(PATH_FOLDER_ADMIN . '/' . $this->Controller);
        }

        $data['detail']       = $this->config_->get();
        $data['title_header'] = 'General';
        $this->load->view(PATH_FOLDER_ADMIN . '/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/' . $this->Controller . '/form.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN . '/view.footer.php');
    }

}

