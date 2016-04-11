<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Martreal extends CI_Controller {
	private $Mylang = "";
    public function __construct() {
        parent::__construct();
		$this->load->library("duocmaster");
		$this->Mylang = $this->getLang();
		$this->lang->load($this->Mylang, "lang");
    }

    /**
     * Trang chủ
     * @author : Nguyễn Vũ Linh
     * @copyright : saigondomain
     */
    public function index() {
		$data['lang']         = $this->Mylang;
        $data['active'] = "home";
		$data['style']="home";
		$data['topduan']=$this->martrealm->getDuAnTop(5,$data['lang']);
		$data['duannoibat']=$this->martrealm->getDuAnNoiBat($data['lang']);
        $this->load->view('index.header.php', $data);
        $this->load->view('home/index', $data);
        $this->load->view('index.footer.php', $data);
    }
	/**
     * @todo about us
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
	public function gioithieu() {
		$data['lang']         = $this->Mylang;
        $data['active'] = "about";
		$data['style']="lienhe";
		$data['title_header']=$this->lang->line('menu_aboutus');
		$data['about']=$this->martrealm->getAbout($data['lang']);
        $this->load->view('index.header.php', $data);
        $this->load->view('about/about', $data);
        $this->load->view('index.footer.php', $data);
    }
		/**
     * @todo product by cate
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
		public function productbycate($tag='',$page=0){
			$data['lang']         = $this->Mylang;
			$data['active'] = $tag;
			$data['style']="lienhe";
		$data['danhmuc']=$this->martrealm->getCategoryByTag($tag);
		if(count($data['danhmuc'])==0){
			redirect();
			}
		$data['title_header']=$data['danhmuc']['title'];
		$data['totla_row']=$this->martrealm->totalProductByCate($data['danhmuc']['id'],$data['lang']);
		$config['first_url'] =$tag."/";
        $config['base_url'] =$tag."/";
        $config['total_rows'] = $this->martrealm->totalProductByCate($data['danhmuc']['id'],$data['lang']);
        $config['per_page'] = 9;
        $config['cur_page'] = $page;
		$config['first_tag_open'] = '<li><a>';
		$config['first_link'] = 'Trước';
		$config['first_tag_close'] = '</li></a>';
		$config['last_tag_open'] = '<li><a>';
		$config['last_link'] = 'Sau';
		$config['last_tag_close'] = '</li></a>';
        $config['num_links'] = 10;
        $this->pagination->initialize($config);
		$data['list']=$this->martrealm->allProductByCate($config['per_page'], $page,$data['danhmuc']['id'],$data['lang']);
		$this->load->view('index.header.php', $data);
        $this->load->view('product/product.php', $data);
        $this->load->view('index.footer.php', $data);
		}
		
		
		public function productbyquan($quan='',$page=0){
			$data['lang']         = $this->Mylang;
			$data['active'] = "";
			$data['style']="lienhe";
			$str=explode('-',$quan);
			$data['quan']=$this->martrealm->getQuanById($str[0]);
		if(count($data['quan'])==0){
			redirect();
			}
		$data['title_header']=$data['quan']['name'];
		$config['first_url'] =$this->lang->line('link_quan').'/'.$quan."/";
        $config['base_url'] =$this->lang->line('link_quan').'/'.$quan."/";
        $config['total_rows'] = $this->martrealm->totalProductByQuan($data['quan']['id'],$data['lang']);
		$data['totla_row']= $this->martrealm->totalProductByQuan($data['quan']['id'],$data['lang']);
        $config['per_page'] =9;
        $config['cur_page'] = $page;
		$config['first_tag_open'] = '<li><a>';
		$config['first_link'] = 'Trước';
		$config['first_tag_close'] = '</li></a>';
		$config['last_tag_open'] = '<li><a>';
		$config['last_link'] = 'Sau';
		$config['last_tag_close'] = '</li></a>';
        $config['num_links'] = 10;
        $this->pagination->initialize($config);
		$data['list']=$this->martrealm->allProductByQuan($config['per_page'], $page,$data['quan']['id'],$data['lang']);
		$this->load->view('index.header.php', $data);
        $this->load->view('product/product.quan.php', $data);
        $this->load->view('index.footer.php', $data);
		}
		
		
		public function productbyloai($loai='',$page=0){
			$data['lang']         = $this->Mylang;
			$data['active'] = "";
			$data['style']="lienhe";
			$data['loai']=$this->martrealm->getLoaiByTag($loai);
		if(count($data['loai'])==0){
			redirect();
			}
		$data['title_header']=$data['loai']['title'];
		$config['first_url'] =$this->lang->line('link_loai').'/'.$loai."/";
        $config['base_url'] =$this->lang->line('link_loai').'/'.$loai."/";
        $config['total_rows'] = $this->martrealm->totalProductByLoai($data['loai']['id'],$data['lang']);
		$data['totla_row']=$this->martrealm->totalProductByLoai($data['loai']['id'],$data['lang']);
        $config['per_page'] = 9;
        $config['cur_page'] = $page;
		$config['first_tag_open'] = '<li><a>';
		$config['first_link'] = 'Trước';
		$config['first_tag_close'] = '</li></a>';
		$config['last_tag_open'] = '<li><a>';
		$config['last_link'] = 'Sau';
		$config['last_tag_close'] = '</li></a>';
        $config['num_links'] = 10;
        $this->pagination->initialize($config);
		$data['list']=$this->martrealm->allProductByLoai($config['per_page'], $page,$data['loai']['id'],$data['lang']);
		$this->load->view('index.header.php', $data);
        $this->load->view('product/product.loai.php', $data);
        $this->load->view('index.footer.php', $data);
		}
		/**
     * @todo detail product
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
	 public function detailproduct($tag='',$tag2=""){
		$data['lang']         = $this->Mylang;
		$data['active'] = $tag;
		$data['style']="lienhe";
		$data['detail']=$this->martrealm->detailproduct($tag2);
		$data['title_header']=$data['detail']['title'];
		$data['cate']	=$this->martrealm->getCategoryByTag($tag);
		$data['loai']=$this->martrealm->getLoaiByID($data['detail']['id_loai']);
		if(count($data['detail'])==0){
			redirect();
			}
		$this->load->view('index.header.php', $data);
        $this->load->view('product/detail.product.php', $data);
        $this->load->view('index.footer.php', $data);
		 }
	/**
     * @todo Gửi search
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
	public function search($page=0){
		$data['lang']         = $this->Mylang;
		$config['first_url'] ="search/";
		$data['active'] = "";
		$data['style']="lienhe";
        $config['base_url'] ="search/";
		$data['title_header']=$this->lang->line('text_34');
        $config['total_rows'] = $this->martrealm->totalProductBySearch($data['lang']);
		$data['totla_row']=$this->martrealm->totalProductBySearch($data['lang']);
        $config['per_page'] = 12;
        $config['cur_page'] = $page;
		$config['first_tag_open'] = '<li><a>';
		$config['first_link'] = 'Trước';
		$config['first_tag_close'] = '</li></a>';
		$config['last_tag_open'] = '<li><a>';
		$config['last_link'] = 'Sau';
		$config['last_tag_close'] = '</li></a>';
        $config['num_links'] = 10;
        $this->pagination->initialize($config);
		$data['list']=$this->martrealm->search($config['per_page'], $page,$data['lang']);
		//$data['list']=$this->martrealm->search($data['lang']);
		//$data['cate']=$this->vietnetm->getCategory();
        $this->load->view('index.header.php', $data);
        $this->load->view('search/search', $data);
        $this->load->view('index.footer.php', $data);
		}
	public function lienhe(){
		$data['lang']         = $this->Mylang;
		$data['active'] = "lienhe";
		$data['style']="lienhe";
		$data['title_header']=$this->lang->line('menu_contact');
        $this->load->view('index.header.php', $data);
        $this->load->view('contact/contact', $data);
        $this->load->view('index.footer.php', $data);
		}
	public function tuvan(){
		$data['lang']         = $this->Mylang;
		$data['active'] = "tuvan";
		$data['style']="lienhe";
		$data['title_header']=$this->lang->line('menu_tuvan');
		$data['tuvan']=$this->martrealm->getTuVan($data['lang']);
        $this->load->view('index.header.php', $data);
        $this->load->view('tuvan/tuvan', $data);
        $this->load->view('index.footer.php', $data);
		}
	public function images($id=0){
		$json = array();
		$photo=$this->martrealm->getPhoto($id);
		$da="";
		foreach($photo as $pt){
			$da=$da.','.'"'.base_url().PATH_HINH_THUMB2.'/'.$pt['images'].'"';
			}
		echo "[".substr($da,1)."]";
	}
	public function addyeucau() {
         $json = array();
        if ($this->input->post()) {
			$data = $this->input->post();
			$name = trim($data['name']);
            $email = trim($data['emailAddress']);
            $phone = trim($data['contactNumber']);
            $enquiryText = trim($data['enquiryText']);
			if($name=="" || $email=="" || $phone=="" || $enquiryText==""){
				$json['error_require'] = $this->lang->line('validate_msg1');
				}else {
                 if (!$this->function->valid_email($email))
                     $json['email_valid'] = $this->lang->line('validate_msg4');
                else {
					$this->martrealm->addyeucau($data);
					$senden=$this->contact_email("<p>".$this->lang->line('success_1')."</p>",$email,$name,"Enquiry from website: ".$_SERVER['SERVER_NAME']." ");
					
                   	$body="<p><strong>Họ Tên :</strong> " . $name . "</p>
							<p><strong>Số Điện Thoại : </strong>" . $phone . "</p>
							<p><strong>Email : </strong>" . $email . "</p>
							<p><strong>Yêu cầu : </strong>" . $enquiryText . "</p>";
					$adminConfig = $this->configm->getConfig();
					$this->contact_email($body,$adminConfig['email'],$name,"Enquiry from website: ".$_SERVER['SERVER_NAME']."");
				    if($senden==false){
						$json['email']="Message not sent. Please, notify site administrator ".$adminConfig['smtp_user']."";
						}
					$json['success'] = $this->lang->line('success_1');
				}
				}
			}
			 echo json_encode($json);
	}
    /**
     * @todo Gửi email liên hệ
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
    public function addcontact() {
		$json = array();
        if ($this->input->post()) {
			$data = $this->input->post();
			$name = trim($data['name']);
            $email = trim($data['email']);
            $phone = trim($data['phone']);
			$address = trim($data['address']);
            $message = trim($data['message']);
			if($name=="" || $email=="" || $phone=="" || $message=="" || $address==""){
				$json['error_require'] = $this->lang->line('validate_msg1');
				}else {
                 if (!$this->function->valid_email($email))
                     $json['email_valid'] = $this->lang->line('validate_msg4');
                else {
					$this->martrealm->addcontact($data);
					$senden=$this->contact_email("<p>".$this->lang->line('success_1')."</p>",$email,$name,"Contact from website: ".$_SERVER['SERVER_NAME']." ");
					
                   	$body="<p><strong>Họ Tên :</strong> " . $name . "</p>
							<p><strong>Số Điện Thoại : </strong>" . $phone . "</p>
							<p><strong>Email : </strong>" . $email . "</p>
							<p><strong>Địa chỉ : </strong>" . $address . "</p>
							<p><strong>Tin nhắn : </strong>" . $message . "</p>";
					$adminConfig = $this->configm->getConfig();
					$this->contact_email($body,$adminConfig['email'],$name,"Contact from website: ".$_SERVER['SERVER_NAME']."");
				    if($senden==false){
						$json['email']="Message not sent. Please, notify site administrator ".$adminConfig['smtp_user']."";
						}
					$json['success'] = $this->lang->line('success_1');
				}
				}
			}
			 echo json_encode($json);
	}
	/**
     * @todo Gửi email
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
	public function contact_email($body, $email, $name,$subject) {
        
            $adminConfig = $this->configm->getConfig();
             $config = Array( 
			  'protocol' => 'smtp', 
			  'smtp_host' => 'ssl://smtp.googlemail.com', 
			  'smtp_port' => 465, 
			  'smtp_user' => $adminConfig['smtp_user'], 
			  'smtp_pass' => $adminConfig['smtp_pass'], 
			  'mailtype' => 'html'); 
			
			  $this->load->library('email', $config); 
			  $this->email->set_newline("\r\n");
			  $this->email->from($adminConfig['smtp_user'], $name);
			  $this->email->to($email);
			  $this->email->subject($subject); 
			  $this->email->message($body);
			  return $this->email->send();
    } 
	 private function getLang()
    {
        $l = "vi";
        if (!$this->session->userdata('lang')) {
            $l = "vi";
        } else {
            $l = $this->session->userdata('lang');
        }
        return $l;
    }
    
    public function set_lang($lang)
    {
        $this->session->set_userdata(array(
            'lang' => $lang
        ));
        redirect(base_url());
        exit();
    }
	public function dangtin(){
		$data['lang']         = $this->Mylang;
		$data['active'] = "lienhe";
		$data['style']="lienhe";
		$data['title_header']=$this->lang->line('dangtin');
		if($this->input->post()){
			$param=$this->input->post();
			$this->martrealm->add_duan($param,$data['lang']);
			redirect(base_url().'?ac=success');
			}
        $this->load->view('index.header.php', $data);
        $this->load->view('dangtin/dangtin', $data);
        $this->load->view('index.footer.php', $data);
		}
	public function addPhoto(){
        $data['cache']= $this->input->get();
        $this->load->view('ajax/ajax.add_photo.php',$data);
    }
    public function delPhoto(){
        $img= basename($this->input->POST("img"));
		@unlink(PATH_HINH."/".$img);
        @unlink(PATH_HINH_THUMB."/".$img);
		@unlink(PATH_HINH_THUMB2."/".$img);
		@unlink(PATH_HINH_THUMB3."/".$img);
		@unlink(PATH_HINH_THUMB4."/".$img);
    }
	public function uploadPhoto() {
        $image= $this->duocmaster->uploadImage(PATH_HINH,"uploadfile");
        if($image){
            $this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB."/".$image,580,435);
			$this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB2."/".$image,245,185);
			$this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB4."/".$image,450,230);
			$this->duocmaster->resizeIMGv3(PATH_HINH."/".$image,PATH_HINH_THUMB3."/".$image,75,50);
            echo PATH_HINH_THUMB."/".$image;
        }else{
             echo "error";
        }
    }
}

/* Location: ./application/controllers/home.php */