<?php

class Postm extends CI_Model {
    private $TBL_STATISBAIVIET     = "posts";
    private $TBL_ABOUTUS           = "aboutus";

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }
    /**
     * @todo: about us
     * @author : Nguyễn Vũ Linh
     * @copyright : Dpassion
     */
    public function aboutus() {
        $table = $this->TBL_ABOUTUS;
        $this->db->select('description,link1,link2');
        $this->db->from($table);        
        $query = $this->db->get();
        $result = $query->result_array();
        return ($result) ? $result[0] : null;
    }
    /**
     * @todo: Hiện thị chi tiết theo id
     * @author : Nguyễn Vũ Linh
     * @copyright : Dpassion
     */
    public function getList($type,$lang='vn') {
        $table = $this->TBL_STATISBAIVIET;
        $this->db->select('*');
        $this->db->from($table);
        $this->db->where(array('type' =>$type));
        $query  = $this->db->get();
        $result = $query->result_array();
        return ($result) ? $result[0] : null;
    }
}
?>
