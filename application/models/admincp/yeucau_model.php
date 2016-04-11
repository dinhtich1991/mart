<?php

class Yeucau_model extends CI_Model {
	private $TBL_DICHVU = "yeucau";
    private $FOLDER_PARTNER = "dataweb/images/";

    public function __construct() {
        parent::__construct();
        $this->load->database();
        $this->load->library("duocmaster");
    }

    /**
     * @todo: Hiển thị tất cả
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function display($num, $offset = 0) {
		$table = $this->TBL_DICHVU;
        $this->db->select('*');
        $this->db->from($table);
        $this->db->order_by('id', 'ASC');
        $this->db->limit($num, $offset);
        $query = $this->db->get();
        return $query->result_array();
    }

    /**
     * Lấy theo bảng, trường gì, cột điều kiện, giá trị
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    /**
     * Đếm số thumb của dự án
     */
    public function totalThumb($id) {
		$table = $this->TBL_DICHVU;
        $where = array("id" => $id);
        $result = $this->function->total_rows($table, $where);
        return $result;
    }

    /**
     * @todo: Hiển thị tất cả
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function displaySearch($filter_name = "") {
		$table = $this->TBL_DICHVU;
        $filter_name = $this->function->convertHTML($filter_name);
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
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function getList($id) {
		$table = $this->TBL_DICHVU;
        $this->db->select('*');
        $this->db->from($table);
        $this->db->where(array('id' => (int) $id));
        $query = $this->db->get();
        $result = $query->result_array();
        return (isset($result)) ? $result[0] : null;
    }

    /**
     * @todo : Thêm 
     * @author : Nguyễn Linh 
     * @copyright : Dpassion
     */
    public function add() {
		$table = $this->TBL_DICHVU;
        $params = $this->input->post();
        $params['tag'] = $this->function->convertHTML($params['title_vn']);
        // Create Folder
        $path_year = "dataweb/".date("Y");
        $path_year_month = "dataweb/".date("Y")."/".date("m");
        $this->duocmaster->createFolder($path_year);
        $this->duocmaster->createFolder($path_year_month);
        $params['avatar'] = $this->duocmaster->uploadResize($path_year_month."/",305,200);
        unset($params['temp_img']);
        $this->db->insert($table, $params);
        return TRUE;
    }


    /**
     * @todo : Cập nhật theo id
     * @author :  Nguyễn Linh 
     * @copyright : Dpassion
     */
    public function update($id) {
		$table = $this->TBL_DICHVU;
        $params = $this->input->post();
        $params['tag'] = $this->function->convertHTML($params['title_vn']);
        // Create Folder
        $path_year = "dataweb/".date("Y");
        $path_year_month = "dataweb/".date("Y")."/".date("m");
        $this->duocmaster->createFolder($path_year);
        $this->duocmaster->createFolder($path_year_month);
        
        $params['avatar'] = $params['temp_img'];
        $imgUpload = $this->duocmaster->uploadResize($path_year_month."/",305,200);
        if ($imgUpload) {
            $params['avatar'] = $imgUpload;
            @unlink($params['temp_img']);
        }
        unset($params['temp_img']);
        $this->db->where(array('id' => $id), NULL, FALSE);
        $this->db->update($table, $params);
    }

    /**
     * @todo : Xóa mẫu tin theo id
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function del($id) {
		$table = $this->TBL_DICHVU;
		$img=$this->getList($id);
			@unlink($img['avatar']);
        return $this->function->del($table, $id);
    }

    /**
     * @todo : Bật tắt tình trạng nhanh
     */
    public function status($id = 0, $status = 0, $field = 'status') {
        return $this->function->status($this->TBL_DICHVU, $id, $status, $field);
    }

    /**
     * Lấy vị trí lớn nhất
     * @author :  Nguyễn Linh
     * @copyright : Dpassion
     */
    public function orderingMax() {
        return $this->function->orderingMax($this->TBL_DICHVU);
    }

    /**
     * Chức năng xóa tất cả
     * @author :  Nguyễn Linh
     * @copyright : Dpassion
     */
    public function del_all() {
		$list = $this->input->post('del');
        foreach ($list as $id) {
            $this->del($id);
        }
        $this->function->del_all($this->TBL_DICHVU);
    }

    /**
     * Chức năng sắp xếp nhanh trong danh sách
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function ordering_all() {
        $this->function->ordering_all($this->TBL_DICHVU);
    }

    /**
     * Chức năng tính tổng số dòng trong phân trang nếu không có
     * điều kiện thì $where = array();
     * Ngược lại, $where = array(
     *                          'status'    =>1
     *                          );
     */
    public function total_rows() {
        $where = array();
        return $this->function->total_rows($this->TBL_DICHVU, $where);
    }
}

?>
