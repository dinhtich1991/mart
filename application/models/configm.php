<?php

class Configm extends CI_Model {

    private $TBL_CONTACT = 'contact';

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function getConfig() {
        $this->db->select('*');
        $this->db->from('config');
        $query = $this->db->get();
        $r = $query->result_array();
        return $r ? $r[0] : array();
    }

    /**
     * @todo : Add contact
     * @author : Huỳnh Văn Được - 20121031
     */
    public function addContact($data) {
        //$data      = $this->input->post();
        $params = array(
            'name' => trim(addslashes($data['name'])),
            'email' => trim(addslashes($data['email'])),
            'phone' => trim(addslashes($data['phone'])),
            'contact' => trim(addslashes($data['contact'])),
            'add_date' => date("Y-m-d H:i:s"),
        );
        $this->db->insert($this->TBL_CONTACT, $params);
    }

}
?>

