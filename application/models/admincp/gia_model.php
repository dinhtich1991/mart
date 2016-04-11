<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Gia_model extends CI_Model {

    private $TBL_SLIDE = "gia";

    public function __construct() {
        parent::__construct();
        $this->load->database();
        $this->load->library("duocmaster");
        $this->load->library("function");
    }

    /**
     * @todo: Hiển thị tất cả
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function display($num, $offset = 0) {
        $table = $this->TBL_SLIDE;
        $this->db->select('*');
        $this->db->from($table);
        $this->db->order_by('ordering', 'desc');
        $this->db->limit($num, $offset);
        $query = $this->db->get();
        return $query->result_array();
	}
	public function displaylang($lang) {
        $table = $this->TBL_SLIDE;
        $this->db->select('*');
        $this->db->from($table);
		$this->db->where(array('lang' => $lang));
        $query = $this->db->get();
        return $query->result_array();
	}

    /**
     * @todo: Hiển thị tất cả
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function displaySearch($filter_name = "") {
        $filter_name = $this->function->convertHTML($filter_name);
        $table = $this->TBL_SLIDE;
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
        $table = $this->TBL_SLIDE;
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
        $table = $this->TBL_SLIDE;
        $params = $this->input->post();
        $this->db->insert($table, $params);
        return TRUE;
    }

    /**
     * @todo : Cập nhật theo id
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function update($id) {
        $table = $this->TBL_SLIDE;
        $params = $this->input->post();
        $this->db->where(array('id' => $id), NULL, FALSE);
        $this->db->update($table, $params);
    }

    /**
     * @todo : Xóa mẫu tin theo id
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function del($id) {
        $table = $this->TBL_SLIDE;
        return $this->function->del($table, $id);
    }

    /**
     * @todo : Bật tắt tình trạng nhanh
     */
    public function status($id = 0, $status = 0, $field = 'status') {
        $table = $this->TBL_SLIDE;
        return $this->function->status($table, $id, $status, $field);
    }

    /**
     * Lấy vị trí lớn nhất
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function orderingMax() {
        $table = $this->TBL_SLIDE;
        return $this->function->orderingMax($table);
    }

    /**
     * Chức năng xóa tất cả
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function del_all() {
        $table = $this->TBL_SLIDE;
        $this->function->del_all($table);
    }

    /**
     * Chức năng sắp xếp nhanh trong danh sách
     * @author : Nguyễn Linh
     * @copyright : Dpassion
     */
    public function ordering_all() {
        $table = $this->TBL_SLIDE;
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
        $table = $this->TBL_SLIDE;
        $where = array();
        return $this->function->total_rows($table, $where);
    }
}

?>
