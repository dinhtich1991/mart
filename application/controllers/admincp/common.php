<?php
if (!defined('BASEPATH'))  exit('No direct script access allowed');
class Common extends CI_Controller {
    
    private $Controller = "ajax";        
    public function __construct() {
        parent::__construct();    
        if(!$this->session->userdata('idAdmin')) redirect(PATH_FOLDER_ADMIN.'/login'); 
		
        $this->load->library("duocmaster");
    }   
	public function uploadSlider(){        
        $image= $this->duocmaster->uploadImage(PATH_SLIDER,"uploadfile");
        if($image){
            $this->duocmaster->resizeIMGv3(PATH_SLIDER."/".$image,PATH_SLIDER_THUMB."/".$image,1600,485);
            echo PATH_SLIDER_THUMB."/".$image;
        }else{
             echo "error";
        }
        
    }
	public function uploadIcon(){        
        $image= $this->duocmaster->uploadImage(PATH_HINH,"uploadfile");
        if($image){
            $this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB."/".$image,48,48);
            echo PATH_HINH_THUMB."/".$image;
        }else{
             echo "error";
        }
        
    }
	public function uploadAvatar(){        
        $image= $this->duocmaster->uploadImage(PATH_HINH,"uploadfile");
        if($image){
            $this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB."/".$image,275,180);
            echo PATH_HINH_THUMB."/".$image;
        }else{
             echo "error";
        }
        
    }
	public function uploadHinh(){        
        $image= $this->duocmaster->uploadImage(PATH_HINH,"uploadfile");
        if($image){
            $this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB."/".$image,970,600);
            echo PATH_HINH_THUMB."/".$image;
        }else{
             echo "error";
        }
        
    }
    public function uploadAdmin(){        
        $image= $this->duocmaster->uploadImage(ADMIN,"uploadfile");
        if($image){
            $this->duocmaster->resizeIMGv3(ADMIN."/".$image,ADMIN_THUMB."/".$image,450,425);
            echo ADMIN_THUMB."/".$image;
        }else{
             echo "error";
        }
        
    }
/**bo add nhieu anh san pham**/
    public function addPhoto(){
        $data['cache']= $this->input->get();
        $this->load->view(PATH_FOLDER_ADMIN.'/'.'ajax/ajax.add_photo.php',$data);
    }
    public function delPhoto(){
        $img= basename($this->input->POST("img"));
		@unlink(PATH_HINH."/".$img);
        @unlink(PATH_HINH_THUMB."/".$img);
		@unlink(PATH_HINH_THUMB2."/".$img);
    }
    public function uploadPhoto() {
        $image= $this->duocmaster->uploadImage(PATH_HINH,"uploadfile");
        if($image){
            $this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB."/".$image,580,435);
			$this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB2."/".$image,245,185);
			$this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB4."/".$image,450,230);
			$this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB3."/".$image,75,50);
			$this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB5."/".$image,692,325);
            echo PATH_HINH_THUMB."/".$image;
        }else{
             echo "error";
        }
    }
	public function addHinh(){
        $data['cache']= $this->input->get();
        $this->load->view(PATH_FOLDER_ADMIN.'/'.'ajax/ajax.add_hinh.php',$data);
    }
	
    /*end*/
 
    /**
     * @todo Upload File
 
     */
    public function uploadFile() {
        $file= $this->duocmaster->uploadFile("dataweb/files/","uploadfile");
        if ($file) {            
            echo $file;
        } else {
            echo "error";
        }
    }
}
?>
