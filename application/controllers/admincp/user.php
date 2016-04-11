<?php
if (!defined('BASEPATH'))  exit('No direct script access allowed');
class User extends CI_Controller {

    /**
     * Tên controller = tên thư mục chứa form, list
     */
    private $Controller = "user";
    
    public function __construct() {
        parent::__construct();
        $this->load->model(PATH_FOLDER_ADMIN.'/user_model', 'user');
      
        if (!$this->session->userdata('idAdmin')) redirect(PATH_FOLDER_ADMIN.'/login');
    }

    public function index() {        
        if ($this->input->post('list')) {
            $list     = $this->input->post('list');
            $is_admin = $this->input->post("is_admin");
            foreach ($list as $id) {
                $this->user->del($id);
            }
            $this->messages->add('Xóa thành công !', 'success');
            if($is_admin==1) redirect(PATH_FOLDER_ADMIN.'/'.$this->Controller.'/quantri_list');
            else redirect(PATH_FOLDER_ADMIN.'/user');
        }
        $this->user_list();
    }

    public function user_list($limit=0) {
        $data['title_header']   = 'Danh sách thành viên';
        $config['base_url']     = base_url() . PATH_FOLDER_ADMIN.'/user/list_';
        $config['total_rows']   = $this->db->count_all('user');
        $config['per_page']     = 10; //so mau tin tren 1 trang
        $config['uri_segment']  = 4;
        $this->pagination->initialize($config);
        $data['list'] = $this->user->display($config['per_page'], $this->uri->segment(4));
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/user/view.user.list.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php');
    }

    public function quantri_list() {  
        $data = $this->task();
        $data['title_header']   = 'Cấu hình &rsaquo; Quản trị';
        $data['list'] = $this->user->display_quantri();
        $data['listLoaiTinRao'] = $this->loaitinrao->display();
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/'.$this->Controller.'/list.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php');
    }
    
    public function dequyCategory($cap=0,$gach="---+", $arr = NULL){
        $result = $this->category->parent($cap);
        if(!$arr) $arr = array();//khoi tao 1 array co ten la arr  
        foreach($result as $row){
            $arr[] = array('id'=>$row['id'],"parent"=>$cap,'name_category'=>$gach.$row['name_category'],'type'=>$row['type']); 
            $arr   = $this->dequyCategory($row['id'],$gach.$gach,$arr);  
        }
        return $arr;
    }
    
    public function delUser($id=0) {
        $this->user->del($id);
        $this->messages->add('Xóa thành công !', 'success');
        redirect(PATH_FOLDER_ADMIN.'/user/user_list');        
    }
    
    public function add() {
        if ($this->input->post()) {
            $this->user->addUser();
            $this->messages->add('Thêm thành viên thành công !', 'success');
            redirect(PATH_FOLDER_ADMIN.'/user');
        }
        $data['title_header'] = 'Cấu hình &rsaquo; Quản trị &rsaquo; Thêm mới';
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/user/view.user.form.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php');
    }
    /**
     * @todo : Thêm người quản trị
     * @author : Huỳnh Văn Được
     * @copyright : Dpassion
     */
    public function add_quantri() {
        if ($this->input->post()) {
            $this->user->add();
            $this->messages->add('Thêm thành viên thành công !', 'success');
            redirect(PATH_FOLDER_ADMIN.'/user/quantri_list');
        }        
        $data['title_header']   = 'Cấu hình &rsaquo; Quản trị &rsaquo; Thêm mới';
        $data['listLoaiTinRao'] = $this->loaitinrao->display();
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/user/form_quantri.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php');
    }

    public function del($id=0) {
        $this->user->del($id);
        $this->messages->add('Xóa thành công !', 'success');
        redirect(PATH_FOLDER_ADMIN.'/user/quantri_list');        
    }

    public function edit($id=0) {
        if ($this->input->post()) {
            $this->user->updateUser($id);
            $this->messages->add('Sửa đổi thành công !', 'success');
            redirect(PATH_FOLDER_ADMIN.'/user');
        }
        $data['list']   = array();
        $data['detail'] = $this->user->getList($id);                
        $data['title_header'] = 'Cấu hình &rsaquo; Quản trị &rsaquo; Sửa đổi :: ' . $data['detail']['name'];
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/user/view.user.form.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php');
    }
    
    public function changepw($id=0){
        if ($this->input->post()) {
            $this->user->changeUser((int)$id);
            $this->messages->add('Sửa đổi thành công !', 'success');
            redirect(PATH_FOLDER_ADMIN.'/user/changepw/'.(int)$id);
        }
        $data['list']   = array();
        $data['detail'] = $this->user->getList($id);        
        
        $data['title_header'] = 'Thay đổi thông tin :: ' . $data['detail']['name'];
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/user/changepw.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php');
    }
    
    public function edit_quantri($id=0) {
        if ($this->input->post()) {
            $this->user->update($id);
            $this->messages->add('Sửa đổi thành công !', 'success');
            redirect(PATH_FOLDER_ADMIN.'/user/quantri_list');
        }
        $data['list']           = array();
        $data['detail']         = $this->user->getList($id);             
        $data['title_header']   = 'Cấu hình &rsaquo; Quản trị &rsaquo; Sửa đổi :: ' . $data['detail']['name'];
        $data['listLoaiTinRao'] = $this->loaitinrao->display();
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/user/form_quantri.php', $data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php');
    }

    /**
     * Nạp link task thêm, xóa, sửa 
     * Dạng folderadmin/controller/method
     */
    public function task(){
        $data['task_add']  = PATH_FOLDER_ADMIN."/".$this->Controller."/add";
        $data['task_edit'] = PATH_FOLDER_ADMIN."/".$this->Controller."/edit";
        $data['task_del']  = PATH_FOLDER_ADMIN."/".$this->Controller."/del";
        $data['task_list'] = PATH_FOLDER_ADMIN."/".$this->Controller."/p";
        return $data;
    } 

}

?>
