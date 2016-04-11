<?php

class Product_model extends CI_Model {

    private $TBL_PRODUCTS = "duan";
	private $TBL_IMG_PRODUCTS='photo_duan';
	private $FOLDER_SILDE = "dataweb/images/";

    public function __construct() {
        parent::__construct();
        $this->load->database();
        $this->load->library("duocmaster");
    }

    /**
     * @todo: Hiển thị tất cả
     * @author : Huỳnh Văn Được
     * @copyright : Dpassion
     */
    public function display($num, $offset = 0) {
        $table = $this->TBL_PRODUCTS;
        $this->db->select('*');
        $this->db->from($table);
        $this->db->order_by('ordering', 'desc');
        $this->db->limit($num, $offset);
        $query = $this->db->get();
        return $query->result_array();
    }
	public function display2($num, $offset = 0) {
        $table = $this->TBL_PRODUCTS;
        $this->db->select('*');
        $this->db->from($table);
		$this->db->where('status',0);
        $this->db->order_by('ordering', 'desc');
        $this->db->limit($num, $offset);
        $query = $this->db->get();
        return $query->result_array();
    }
	
    /**
     * @todo: Hiển thị tất cả
     * @author : Nguyễn Vũ Linh
     */
    public function displaySearch($filter_name = "") {
        $filter_name = $this->function->convertHTML($filter_name);
        $table = $this->TBL_PRODUCTS;
        $this->db->select('*');
        $this->db->from($table);
        if ($filter_name != "")
            $this->db->like('tag', $filter_name);
        $this->db->order_by('id', 'desc');
        $query = $this->db->get();
        return $query->result_array();
    }
    /**
     * @todo: Hiện thị chi tiết theo id
     * @author : Nguyễn Vũ Linh
     * @copyright : Dpassion
     */
    public function getList($id) {
        $table = $this->TBL_PRODUCTS;
        $this->db->select('*');
        $this->db->from($table);
        $this->db->where(array('id' => (int) $id));
        $query = $this->db->get();
        $result = $query->result_array();
        return (isset($result)) ? $result[0] : null;
    }
	public function getsp($id) {
        $table = $this->TBL_PRODUCTS;
        $this->db->select('*');
        $this->db->from($table);
        $this->db->where(array('code' => $id));
        $query = $this->db->get();
        $result = $query->result_array();
        return (isset($result)) ? $result[0] : null;
    }
	  public function getImgThumb($id) {
        $select = "*";
        $table = $this->TBL_IMG_PRODUCTS;
        $where = array("id_duan" => $id);
        $result = $this->function->getMulSelectTableWhere($select, $table, $where);
        return $result ? $result : array();
    }

    /**
     * @todo : Thêm 
     * @author : Nguyễn Vũ Linh
     * @copyright : Dpassion
     */
    public function add() {
        $table = $this->TBL_PRODUCTS;
        $params = $this->input->post();
		$params['add_date']=date('Y-m-d H:i:s');
		$listIMG = $params['images'];
        unset($params['images']);
		 $avartar = $this->duocmaster->uploadResize($this->FOLDER_SILDE, 80, 100, TRUE);
        if ($avartar) {
            $params['avatar'] = $avartar;
        }
		unset($params['temp_img']);
		$params['tag'] = $this->function->convertHTML($params['title']);
        $this->db->insert($table, $params);
		$id = $this->db->insert_id();
	    $this->insertMulipleImg($listIMG,$id);
    }
		/**
     * @todo : Sữa 
     * @author : Nguyễn Vũ Linh
     * @copyright : Dpassion
     */
    public function update($id) {
        $this->load->helper('string');
        $table = $this->TBL_PRODUCTS;
        $params = $this->input->post();
		$params['add_date']=date('Y-m-d H:i:s');
		$listIMG = $params['images'];
        unset($params['images']);
		 $params['tag'] = $this->function->convertHTML($params['title']);
		 $avartar = $this->duocmaster->uploadResize($this->FOLDER_SILDE,  80, 100, TRUE);
        if ($avartar) {
            $params['avatar'] = $avartar;
			@unlink($params['temp_img']);
        }
        unset($params['temp_img']);
		$this->db->where(array('id' => $id), NULL, FALSE);
        $this->db->update($table, $params);
		$this->insertMulipleImg($listIMG,$id);
    }

    /**
     * del hình resize
     * @author : Nguyễn Vũ Linh
     * @copyright : Dpassion
     */
    public function delImgThumb($id) {
        $result = $this->getImgThumb($id);
		$tb=$this->TBL_IMG_PRODUCTS;
        foreach ($result as $image) {
            @unlink(PATH_HINH . "/" . $image['images']);
			@unlink(PATH_HINH_THUMB . "/" . $image['images']);
			$this->function->del($tb, $image['id']);
        }
	}
    public function del($id) {
        $table = $this->TBL_PRODUCTS;
		//$img=$this->getList($id);
			//@unlink(PATH_HINH_THUMB.'/'.$img['avatar']);
			//@unlink(PATH_HINH.'/'.$img['avatar']);
		$this->delImgThumb($id);
        return $this->function->del($table, $id);
    }
	  /**
     * Chức năng xóa tất cả
     * @author :  Nguyễn Vũ Linh
     * @copyright : Dpassion
     */
    public function del_all() {
        $table = $this->TBL_PRODUCTS;
		 foreach ($list as $id) {
            $this->del($id);
			$this->function->del($tb, $id);
        }
        $this->function->del_all($table);
    }
	 public function insertMulipleImg($listIMG, $id) {
        $this->db->delete($this->TBL_IMG_PRODUCTS, array('id_duan' => (int) $id));
        $n = count($listIMG);
        for ($i = 0; $i < $n; $i++) {
            $params = array(
                'id_duan' => $id,
                'images' => basename($listIMG[$i]),
                'ordering' => $i
            );
            if (is_file($listIMG[$i])) {
                $this->db->insert($this->TBL_IMG_PRODUCTS, $params);
            }
        }
    }
    /**
     * @todo : Bật tắt tình trạng nhanh
     */
    public function status($id = 0, $status = 0, $field = 'status') {
        $table = $this->TBL_PRODUCTS;
        return $this->function->status($table, $id, $status, $field);
    }
	public function getItem($id){
		return $this->function->getMulSelectTableWhere('*','item',array('id_cate'=>$id));
	}
    /**
     * Lấy vị trí lớn nhất
     * @author :  Nguyễn Vũ Linh
     * @copyright : Dpassion
     */
    public function orderingMax() {
        $table = $this->TBL_PRODUCTS;
        return $this->function->orderingMax($table);
    }

  

    /**
     * Chức năng sắp xếp nhanh trong danh sách
     * @author :  Nguyễn Vũ Linh
     * @copyright : Dpassion
     */
    public function ordering_all() {
        $table = $this->TBL_PRODUCTS;
        $this->function->ordering_all($table);
    }

    /**
     * Chức năng tính tổng số dòng trong phân trang nếu không có
     * điều kiện thì $where = array();
     * Ngược lại, $where = array(
     *                          'status'    =>1
     *                          );
     */
    public function total_rows() {
        $table = $this->TBL_PRODUCTS;
        return $this->function->total_rows($table);
    }
	 public function total_rows2() {
        $table = $this->TBL_PRODUCTS;
		$this->db->where('status',0);
        return $this->function->total_rows($table);
    }


}

?>
