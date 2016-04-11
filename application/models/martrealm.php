<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Martrealm extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }
	/*
	*get loai
	*author: Nguyễn Vũ Linh
	*/
	public function getLoai($lang="vi"){
		return $this->function->getMulSelectTableWhere('*','loai',array('status'=>1,'lang'=>$lang),'ordering','DESC');
		}
	public function getLoaiByTag($tag='',$lang="vi"){
		return $this->function->getSelectTableWhere('*','loai',array('status'=>1,'lang'=>$lang,'tag'=>$tag),'ordering','DESC');
		}
	public function getLoaiByID($id=0,$lang="vi"){
		return $this->function->getSelectTableWhere('*','loai',array('status'=>1,'lang'=>$lang,'id'=>$id),'ordering','DESC');
		}
	public function totalProductByLoai($id=0,$lang="vi") {
        return $this->function->total_rows('duan', array('status' => 1,'id_loai'=>$id,'lang'=>$lang));
   		}
	public function allProductByLoai($limit = 3, $offset = 0,$id=0,$lang="vi"){
		 $this->db->limit($limit, $offset);
		 $sort=$this->input->get('sort');
		 switch($sort){
			case "Latest": $this->db->order_by("add_date", "desc"); break;
			case "LowestPrice": $this->db->order_by("gia", "asc"); break;
			case "HighestPrice": $this->db->order_by("gia", "desc"); break;	 
		}
		return $this->function->getMulSelectTableWhere('*','duan',array('status'=>1,'id_loai'=>$id,'lang'=>$lang),'ordering','DESC');
		}
	/*
	*get quận
	*author: Nguyễn Vũ Linh
	*/
	public function getQuan($lang="vi"){
		return $this->function->getMulSelectTableWhere('*','district',array('status'=>1),'ordering','ASC');
		}
	public function getQuanById($id=0){
		return $this->function->getSelectTableWhere('*','district',array('status'=>1,'id'=>$id),'ordering','ASC');
		}
	/**
     * @todo 
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
	public function totalProductByQuan($id=0,$lang="vi") {
        return $this->function->total_rows('duan', array('status' => 1,'quan'=>$id,'lang'=>$lang));
   		}
	public function allProductByQuan($limit = 3, $offset = 0,$id=0,$lang="vi"){
		 $this->db->limit($limit, $offset);
		 $sort=$this->input->get('sort');
		 switch($sort){
			case "Latest": $this->db->order_by("add_date", "desc"); break;
			case "LowestPrice": $this->db->order_by("gia", "asc"); break;
			case "HighestPrice": $this->db->order_by("gia", "desc"); break;	 
		}
		return $this->function->getMulSelectTableWhere('*','duan',array('status'=>1,'quan'=>$id,'lang'=>$lang),'ordering','DESC');
		}
	/*
	*get gia
	*author: Nguyễn Vũ Linh
	*/
	public function getGia($lang="vi"){
		return $this->function->getMulSelectTableWhere('*','gia',array('status'=>1,'lang'=>$lang),'ordering','DESC');
		}
		
	/*
	*get danh muc
	*author: Nguyễn Vũ Linh
	*/
	public function getCategory($lang="vi"){
		return $this->function->getMulSelectTableWhere('*','category',array('status'=>1,'lang'=>$lang),'ordering','DESC');
		}
	 public function getCategoryByTag($tag=''){
		 return $this->function->getSelectTableWhere('*','category',array('status'=>1,'tag'=>$tag),'ordering','DESC');	
		 }
	public function getCategoryByID($id=0){
		 return $this->function->getSelectTableWhere('*','category',array('status'=>1,'id'=>$id),'ordering','DESC');	
		 }
	/**
     * @todo 
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
	 public function getDuAnTop($limit = 4,$lang="vi"){
		 $this->db->limit($limit);
		return $this->function->getMulSelectTableWhere('*','duan',array('status'=>1,'lang'=>$lang),'ordering','DESC');
		}
	public function getTopPhoto($id_duan=0){
		return $this->function->getSelectTableWhere('*','photo_duan',array('id_duan'=>$id_duan),'ordering','DESC');
		}
	public function getPhoto($id_duan=0){
		return $this->function->getMulSelectTableWhere('*','photo_duan',array('id_duan'=>$id_duan),'ordering','DESC');
		}
	public function getDuAnNoiBat($lang="vi"){
		return $this->function->getMulSelectTableWhere('*','duan',array('status'=>1,'lang'=>$lang,'is_hot'=>1),'ordering','random');
		}
	/**
     * @todo 
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
	public function totalProductByCate($id=0,$lang="vi") {
        return $this->function->total_rows('duan', array('status' => 1,'id_cate'=>$id,'lang'=>$lang));
   		}
	public function allProductByCate($limit = 3, $offset = 0,$id=0,$lang="vi"){
		 $this->db->limit($limit, $offset);
		 $sort=$this->input->get('sort');
		 switch($sort){
			case "Latest": $this->db->order_by("add_date", "desc"); break;
			case "LowestPrice": $this->db->order_by("gia", "asc"); break;
			case "HighestPrice": $this->db->order_by("gia", "desc"); break;	 
		}
		return $this->function->getMulSelectTableWhere('*','duan',array('status'=>1,'id_cate'=>$id,'lang'=>$lang),'ordering','DESC');
		}
	public function totalProductByItem($id=0) {
        return $this->function->total_rows('product', array('status' => 1,'id_item'=>$id));
   		}
	public function allProductByItem($limit = 3, $offset = 0,$id=0){
		 $this->db->limit($limit, $offset);
		return $this->function->getMulSelectTableWhere('*','product',array('status'=>1,'id_item'=>$id),'ordering','DESC');
		}
	public function getProductByCate($id_cate=0,$id=0){
		return $this->function->getMulSelectTableWhere('*','product',array('status'=>1,'id_cate'=>$id_cate,'id !='=>$id),'ordering','DESC');
		}
	public function getProductByCateLimit($id=0,$limit=0){
		$this->db->limit($limit);
		return $this->function->getMulSelectTableWhere('*','product',array('status'=>1,'id_cate'=>$id),'ordering','DESC');
		}
	public function getProductHot(){
		return $this->function->getMulSelectTableWhere('*','product',array('status'=>1,'is_hot'=>1),'ordering','DESC');
		}
	
	/**
     * @todo 
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
	 public function detailproduct($tag='',$lang="vi"){
		 return $this->function->getSelectTableWhere('*','duan',array('status'=>1,'tag'=>$tag,'lang'=>$lang));
		 }	
	
	/**
     * @todo 
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
	public function getADV($lang="vi"){
	return $this->function->getMulSelectTableWhere('*','adv',array('status'=>1,'lang'=>$lang),'ordering','DESC');	
	}
	/**
     * @todo 
     * @author Nguyễn Vũ Linh
     * @since 20150615
     */
	public function totalProductBySearch($lang="vi") {
		$key=$this->input->get('key');
		$gia=$this->input->get('gia');
		$loai=$this->input->get('loai');
		$quan=$this->input->get('quan');
		$danhmuc=$this->input->get('danhmuc');
		$minbed=$this->input->get('minbed');
		$maxbed=$this->input->get('maxbed');
		$filter_name = $this->function->convertHTML($key);
        if ($filter_name != ""){
            $this->db->like('tag', $filter_name);
		} 
		if($gia !=""){
			$this->db->where('id_gia',$gia);	
		}
		if($loai !=""){
			$this->db->where('id_loai',$loai);
			}
		if($quan !=""){
			$this->db->where('quan',$quan);
			}
		if($minbed != "" && $maxbed="" ){
			$this->db->where(array('sophongngu >='=>$minbed,"sophongngu <="=>$maxbed));
			}
		if($danhmuc !=""){
			$this->db->where('id_cate',$danhmuc);
			}
        return $this->function->total_rows('duan', array('status' => 1,'lang'=>$lang));
   		}
	public function search($limit = 3, $offset = 0,$lang="vi"){
		$this->db->limit($limit, $offset);
		$key=$this->input->get('key');
		$gia=$this->input->get('gia');
		$loai=$this->input->get('loai');
		$quan=$this->input->get('quan');
		$danhmuc=$this->input->get('danhmuc');
		$minbed=$this->input->get('minbed');
		$maxbed=$this->input->get('maxbed');
		$filter_name = $this->function->convertHTML($key);
        if ($filter_name != ""){
            $this->db->like('tag', $filter_name);
		} 
		if($gia !=""){
			$this->db->where('id_gia',$gia);	
		}
		if($loai !=""){
			$this->db->where('id_loai',$loai);
			}
		if($quan !=""){
			$this->db->where('quan',$quan);
			}
		if($minbed != "" && $maxbed="" ){
			$this->db->where(array('sophongngu >='=>$minbed,"sophongngu <="=>$maxbed));
			}
		if($danhmuc !=""){
			$this->db->where('id_cate',$danhmuc);
			}
			return $this->function->getMulSelectTableWhere('*','duan',array('status'=>1,'lang'=>$lang),'ordering','DESC');
		}
		public function getTuVan($lang="vi"){
			return $this->function->getSelectTableWhere('*','tuvan',array('status'=>1,'lang'=>$lang));
			}
		public function getAbout($lang="vi"){
			return $this->function->getSelectTableWhere('*','aboutus',array('status'=>1,'lang'=>$lang));
			}
		public function addyeucau($data){
			$params['name']=strip_tags($data['name']);
			$params['email']=strip_tags($data['emailAddress']);
			$params['phone']=strip_tags($data['contactNumber']);
			$params['message']=strip_tags($data['enquiryText']);
			$params['add_date']=date('d-m-Y');
			$this->db->insert('yeucau',$params);
			}
		public function getDoiTac(){
			return $this->function->getMulSelectTableWhere('*','doitac',array('status'=>1),'ordering',"DESC");
			}
		public function addcontact($data){
			$params['name']=strip_tags($data['name']);
			$params['email']=strip_tags($data['email']);
			$params['phone']=strip_tags($data['phone']);
			$params['message']=strip_tags($data['message']);
			$params['address']=strip_tags($data['address']);
			$params['add_date']=date('Y-m-d');
			$this->db->insert('contact',$params);
			}
		public function add_duan($data,$lang="vi"){
			$table = "duan";
			$data['add_date']=date('Y-m-d H:i:s');
			$listIMG = $data['images'];
			unset($data['images']);
			$data['tag'] = $this->function->convertHTML($data['title']);
			$data['ordering']=$this->orderingMax();
			$data['lang']=$lang;
			$this->db->insert($table, $data);
			$id = $this->db->insert_id();
			$this->insertMulipleImg($listIMG,$id);
			}
		public function orderingMax() {
        $table = "duan";
        return $this->function->orderingMax($table);
    }
		public function insertMulipleImg($listIMG, $id) {
        $this->db->delete("photo_duan", array('id_duan' => (int) $id));
        $n = count($listIMG);
        for ($i = 0; $i < $n; $i++) {
            $params = array(
                'id_duan' => $id,
                'images' => basename($listIMG[$i]),
                'ordering' => $i
            );
            if (is_file($listIMG[$i])) {
                $this->db->insert("photo_duan", $params);
            }
        }
    }
}
