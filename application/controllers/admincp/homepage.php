<?php 
if (!defined('BASEPATH'))  exit('No direct script access allowed');
class Homepage extends CI_Controller {
    private $Controller = "homepage";
    
    public function __construct() {        
        parent::__construct();
        $this->load->model(PATH_FOLDER_ADMIN.'/user_model', 'user');
        
    }
    public function index() {  
        if(!$this->session->userdata('idAdmin')) redirect(PATH_FOLDER_ADMIN.'/login'); 
        $data['title_header'] = "Administrator";
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php',$data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php');  
    }   
    /**
     * @todo : Đăng nhập
     */
    public function login() {        
        if ($this->input->post()) {
            if ($this->authenticate())  redirect(PATH_FOLDER_ADMIN.'/homepage');
        }
        $this->load->view(PATH_FOLDER_ADMIN.'/login.php');
    }
     /**
     * @todo : Đăng nhập
     */
    private function authenticate() {
        $this->load->library('session');
        $result = $this->user->login($this->input->post('username'), $this->input->post('password'));  
		
        if (empty($result)) return false;
        else if (!empty($result)) {
            $data = array(
                'idAdmin'    => $result[0]['id'],
                'nameAdmin'  => $result[0]['name'],
                'levelAdmin' => $result[0]['level'],
                'avatar' => $result[0]['avatar'],
            );           
           $user= $this->session->set_userdata($data);               
            return true; 
        }
    }
     /**
     * @todo : Thoát
     */
    public function logout() {
        $this->session->sess_destroy();
        redirect(PATH_FOLDER_ADMIN.'/login','refresh');        
    }
}
?>
