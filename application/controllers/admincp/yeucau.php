<?php
if (!defined('BASEPATH'))  exit('No direct script access allowed');
class Yeucau extends CI_Controller {

    /**
     * Tên controller = tên thư mục(gồm form.php, list.php)
     */
    private $Controller = "yeucau";
    private $task;    
    
    public function __construct() {
        parent::__construct();    
        if(!$this->session->userdata('idAdmin')) redirect(PATH_FOLDER_ADMIN.'/login');
        $this->load->model(PATH_FOLDER_ADMIN.'/yeucau_model', 'yeucau');  
		 $this->load->model(PATH_FOLDER_ADMIN.'/user_model', 'user');
        
        $this->task=$this->task();        
    }

    /**
     * Nạp link task thêm,sửa,xóa,danh sách,tình trạng ẩn hiện,submit form (Xóa chọn, sắp sếp nhanh)
     * Dạng folderadmin/controller/method
     */
    public function task(){
        $data['task_add']      = PATH_FOLDER_ADMIN."/".$this->Controller."/add";
        $data['task_edit']     = PATH_FOLDER_ADMIN."/".$this->Controller."/edit";
        $data['task_del']      = PATH_FOLDER_ADMIN."/".$this->Controller."/del";
        $data['task_list']     = PATH_FOLDER_ADMIN."/".$this->Controller;
        $data['task_status']   = PATH_FOLDER_ADMIN."/".$this->Controller."/status";
        $data['action_form']   = PATH_FOLDER_ADMIN."/".$this->Controller."/action";
        $data['page']          = PATH_FOLDER_ADMIN."/".$this->Controller."/p";
        $data['task_serach']   = PATH_FOLDER_ADMIN."/".$this->Controller."/search";
        return $data;
    }       
    
    public function index() { 
        $this->p(0);
    }
    
    public function p($page=0){       
        $data = $this->task;    
        $data['title_header'] = "Yêu cầu tư vấn";
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php',$data);
        /* #### */
        #Phân trang
        $config['base_url']    = $data['page'];
        $config['total_rows']  = $this->yeucau->total_rows();
        $config['per_page']    = ADMIN_PER_PAGE; 
        $config['num_links']   = ADMIN_NUM_LINKS;
        $config['cur_page']    = $page;
        $this->pagination->initialize($config); 
        $data['total_rows']    = $config['total_rows'];
        $data['list']          = $this->yeucau->display($config['per_page'],$page);     
        
        /* #### */
        $this->load->view(PATH_FOLDER_ADMIN.'/'.$this->Controller.'/list',$data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php'); 
    }
    
    /**
     * Addtion
     */
    public function add(){        
        $data = $this->task;        
        if ($this->input->post()) {
            if($this->yeucau->add()) $this->messages->add(MSG_ADD_SUCCESS, 'success');
            else $this->messages->add(MSG_ADD_ERROR, 'warning');
            redirect($data['task_list']);
        }
                
        $data['title_header']  = "Add New - Dịch vụ";
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php',$data);
        /* #### */        
        $data['orderingMax']    = $this->yeucau->orderingMax();
                
        /* #### */
        $this->load->view(PATH_FOLDER_ADMIN.'/'.$this->Controller.'/form',$data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php'); 
    }
    
    public function edit($id){
        $data = $this->task;        
        if ($this->input->post()) {
            $this->yeucau->update($id);
            $this->messages->add(MSG_EDIT_SUCCESS, 'success');
            redirect($data['task_list']);
        }
        
        $data['title_header']   = "Edit - Dịch vụ";
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php',$data);
        /* #### */
        
        $data['detail']         = $this->yeucau->getList((int)$id);       
        
        /* #### */
        $this->load->view(PATH_FOLDER_ADMIN.'/'.$this->Controller.'/form',$data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php'); 
    }
    
    /**
     * Chức năng : Xóa bằng href
     * @author : Nguyễn Linh
     */
    public function del($id){ 
        $data = $this->task;
        $this->yeucau->del($id);
        $this->messages->add(MSG_DEL_SUCCESS, 'success');
        redirect($data['task_list']);
    }
    
    /**
     * Chức năng : Ajax Hiện/Ẩn nhanh
     * @author : Nguyễn Linh
     */
    public function status($id=0,$status=0,$field='status'){
        echo $this->yeucau->status($id,$status,$field);
    }
    /**
     * Chức năng : Xóa nhiều & Sắp xếp nhanh
     * @author : Nguyễn Linh
     */
    public function action(){
        $data = $this->task;
        if($this->input->post("del")){
            $this->yeucau->del_all();     
            $this->messages->add(MSG_DEL_SUCCESS, 'success');
        }else if($this->input->post("ordering")){
            $this->yeucau->ordering_all();     
            $this->messages->add(MSG_EDIT_SUCCESS, 'success');
        }
        redirect($data['task_list']);
    }   
    
    /**
     * Trang tìm kiếm
     */
    public function search(){
        
        $filter_name = $this->input->get("filter_name");
        
        
        $data = $this->task;
        $page = 0;
        $data['title_header'] = "Tìm kiếm";
        $this->load->view(PATH_FOLDER_ADMIN.'/view.header.php',$data);
        /* #### */
        
        $data['list']          = $this->yeucau->displaySearch($filter_name);     
        $data['total_rows']    = count($data['list']);
        $data['filter_name']   = $filter_name;   
        
        /* #### */
        $this->load->view(PATH_FOLDER_ADMIN.'/'.$this->Controller.'/list',$data);
        $this->load->view(PATH_FOLDER_ADMIN.'/view.footer.php'); 
    }
}

?>
