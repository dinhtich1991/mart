<?php
class Config_model extends CI_Model {   
    private $func;
    public function  __construct() {
        parent::__construct();
        $this->load->library('function');
        $this->load->database();
    }   
    public function get(){
        $this->db->select('*');
        $this->db->from('config');
        $query=$this->db->get();   
        $r    = $query->result_array();  
        return $r[0];
    }
    public function updateSMTP(){
        $data = $this->input->post();
        $this->db->update('config',$data);
        
    }

}

?>
