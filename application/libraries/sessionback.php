<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class CI_SessionBack{
    public function setDefault(){
        $CI=& get_instance();
        $CI->load->library('session');
        $CI->load->helper('url');
        $data=array(
            'session_back'=>base_url($CI->uri->uri_string())
        );
        $CI->session->set_userdata($data);
    }
    public function set($url){
        $CI=& get_instance();
        $CI->load->library('session');
        $CI->load->helper('url');
        $data=array(
            'session_back'=>base_url($url)
        );
        $CI->session->set_userdata($data);
    }
}
// Class user
// Location:application/libraries/SessionBack.php
