<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class User extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->helper(array('form', 'url'));
        $this->load->model('user_model', 'user');
        $this->load->model('config_model', 'myconfig');
        $this->load->model('staticbaiviet_model', 'staticbaiviet');
        $this->load->model('config_model', 'myconfig');
        $this->load->model('category_model', 'category');
        $this->load->model('common_model', 'common');
        $this->load->model('product_model', 'product');
        $this->load->model('order_model', 'order');
        $this->load->library('breadcrumb');
    }

    public function registry() {
        $json = array();
        if ($this->input->post()) {
            $data = $this->input->post();

            $name           = trim($data['name']);
            $email          = trim($data['email']);
            $re_email       = trim($data['re_email']);
            $password       = trim($data['password']);
            $re_password    = trim($data['re_password']);
            $phone          = trim($data['phone']);
            $refer          = isset($data['refer'])?$data['refer']:0;

            if ($name == "" || $email == "" || $re_email == "" || $password == "" || $re_password == "" || $phone == "")
                $json['error_require'] = "Vui lòng nhập đầy đủ các thông tin.";
            else {
                if ($email != $re_email)
                    $json['error_email'] = "Hai email không giống nhau";
                else if (!$this->function->valid_email($email))
                    $json['error_email_validate'] = "Email không đúng định dạng";
                else {
                    if ($this->user->countEmail($email) > 0)
                        $json['error_exits_email'] = "Email này đã tồn tại";
                    else if ($password != $re_password) {
                        $json['error_password'] = "Hai mật khẩu không giống nhau";
                    } else {
                        $data = array(
                            'name'      => $name,
                            'email'     => $email,
                            'password'  => md5($password),
                            'phone'     => $phone,
                            'refer'     => $refer,
                            'add_date'  => date('Y-m-d H:i:s'),
                            'status'    => 1
                        );
                        $this->user->add($data);
                        # Đăng nhập sau khi đăng kí thành công
                        
                        /* ### Nội dung email ###*/
                        $body = '              
                        <div><b>Xin chúc mừng '.$name.', bây giờ bạn đã là thành viên của GeVi.vn</b></div>
                        <div>&nbsp;</div>                
                        <div>
                        <ul>
                            <li>Email đăng nhập: '.$email.'</li>
                            <li>Mật khẩu: '.$password.'</li>                   
                        </ul>
                        <p>Chúc bạn một ngày vui vẻ cùng GeVi.vn</p>
                        </div>';
                        /* ### Nội dung email ###*/
                        $this->send($data, $body);
                        
                        
                        $user = $this->user->login($email, $password);
                        if (!empty($user)) {
                            $data = array(
                                'id_session' => $user[0]['id'],
                                'name_session' => $user[0]['name'],
                                'email_session' => $user[0]['email'],
                            );
                            $this->session->set_userdata($data);
                            $json['success'] = $this->session->userdata("CALLBACK_URL") ? $this->session->userdata("CALLBACK_URL") : base_url();
                        }
                    }
                }
            }
        }
        echo json_encode($json);
    }

    public function login() {
        $json = array();
        if ($this->input->post()) {
            $username = trim($this->input->post('email'));
            $password = trim($this->input->post('password'));
            if ($username == "" || $password == "")
                $json['error_require'] = "Vui lòng nhập đầy đủ các thông tin.";
            else {
                $user = $this->user->login($username, $password);
                if (!empty($user)) {
                    $data = array(
                        'id_session' => $user[0]['id'],
                        'name_session' => $user[0]['name'],
                        'email_session' => $user[0]['email'],
                    );
                    $this->session->set_userdata($data);
                    $json['success'] = $this->session->userdata("CALLBACK_URL") ? $this->session->userdata("CALLBACK_URL") : base_url();
                }
                else
                    $json['faile'] = "Đăng nhập không thành công !";
            }
        }
        echo json_encode($json);
    }
    /**
     * @todo : Gửi mail
     * @author : Huỳnh Văn Được - 20121105
     * @copyright : TFA
     */
    private function send($data,$body=""){
        $adminConfig = $this->myconfig->getConfig();
        /*$config = Array(
            'protocol'  => 'smtp',
            'smtp_host' => 'ssl://smtp.googlemail.com',
            'smtp_port' => 465,
            'smtp_user' => $adminConfig['smtp_user'],
            'smtp_pass' => $adminConfig['smtp_pass'],
            'mailtype' => 'html'
        );*/
        $config = Array(
            'protocol'      => 'smtp',
            'smtp_host'     => 'smtp.live.com',
            'smtp_crypto'   => 'tls',
            'smtp_port'     => 587,
            'smtp_user'     => "service@gevi.vn",
            'smtp_pass'     => "sinhnhatongxa",
            'mailtype'      => 'html'
        );
        $this->load->library('email', $config);
        $this->email->set_newline("\r\n");
        $this->email->from("service@gevi.vn","Đăng kí thành viên Gevi");
        $this->email->to($data['email']);
        $this->email->bcc("duoc.huynh@dpassion.com");
        $this->email->subject("Đăng kí thành viên");
        $this->email->message($body);
        $this->email->send();
    }  
    
    public function logout() {
        $this->session->sess_destroy();
        redirect(base_url());
    }
    
    /**
     * @todo Thôn tin user
     * @author HVD 20131007 <duoc.huynh@dpassion.com>
     */
    public function index(){
        $data['category']       = $this->category->display();
        
        /* breadcrumb */
        $this->breadcrumb->append_crumb('Trang chủ',base_url());
        $this->breadcrumb->append_crumb('Thông tin khách hàng',  site_url("user"));
        
        $id_user                = $this->session->userdata("id_session");
        if(!$id_user) redirect (base_url());
        
        $data['userDetail']     = $this->user->detailUser($id_user);
        $data['city']           = $this->product->getCity();
        $data['list_order']     = $this->order->getListOrderByUser($id_user);
        $data['textRefer']      = $this->staticbaiviet->getList("refer");
        $data['list_refer']     = $this->user->getUserByRefer($this->session->userdata("id_session"));
        
        $this->load->view('index.header.php', $data);
        $this->load->view('customer/index', $data);
        $this->load->view('index.footer.php');
    }
    /**
     * @todo Update user
     * @author HDV 20131008 <duoc.huynh@dpassion.com>
     */
    public function update_user(){
        $json = array();
        if($this->input->post()){
            $data = $this->input->post();
            if(trim($data['name'])=="") $json['error']="Nhập tên của bạn";
            else if(trim($data['address']=="")) $json['error']="Nhập địa chỉ của bạn";
            else if($data['id_city']==0) $json['error']="Chưa chọn thành phố";
            else if($data['id_district']==0) $json['error']="Chưa chọn quận huyện";
            else if(!checkdate($data['month'],$data['day'],$data['year'])) $json['error']="Ngày sinh không hợp lệ";
            else if(trim($data['phone'])=="") $json['error']="Chưa nhập số điện thoại";
            else{
                $this->user->update($this->session->userdata("id_session"));
                $json['success'] = "Cập nhật thành công";
            }
        }
        echo json_encode($json);
    }
    /**
     * @todo Update password
     * @author HVD 20131008 <duoc.huynh@dpassion.com>
     */
    public function update_pass(){
        $json = array();
        if($this->input->post()){
            $data = $this->input->post();
            
            if(trim($data['oldpass'])=="") $json['error']="Nhập mật khẩu cũ";
            else if(trim($data['newpass']=="")) $json['error']="Nhập mật khẩu mới";
            else if(trim($data['xacnhanpass'])=="") $json['error']="Chưa xác nhận mật khẩu";
            else if($this->user->check_old_pass($data['oldpass'],$this->session->userdata("id_session"))==0) $json['error']="Mật khẩu cũ không đúng";
            else if(trim($data['newpass'])!=trim($data['xacnhanpass'])) $json['error']="Hai mật khẩu mới không giống nhau";
            else{
                $this->user->change_pw($data['newpass'],$this->session->userdata("id_session"));
                $json['success'] = "Cập nhật mật khẩu thành công";
            }
        }
        echo json_encode($json);
    }
    /**
     * @todo List order
     * @author HVD 20131008 <duoc.huynh@dpassion.com>
     */
    public function list_order($code=0){
        $data['items']          = $this->order->getProductByCodeCart($code);
        $data['customer_order'] = $this->order->getRecipient($code);
        $data['code_cart']      = $code;
        $this->load->view('customer/list-order.php',$data);
    }
    /**
     * @todo Xem Thu nhập của người giới thiệu
     * @author HVD 20131011 <duoc.huynh@dpassion.com>
     */
    public function refer($id=0){
        $data['list_order'] = $this->user->getOrderByRefer($id);
        $this->load->view('customer/list-refer.php',$data);
    }
    /**
     * @todo Quên mật khẩu
     * @author Huỳnh Văn Được 20131101 <duoc.huynh@dpassion.com>
     */
    public function forgot_password(){
        $json = array();
        if($this->input->post()){
            $data = $this->input->post();
            
            if(trim($data['forgot_email'])=="") $json['error']="Vui lòng nhập email";
            else if(!$this->function->valid_email($data['forgot_email'])) $json['error']="Email không đúng";
            else if($this->user->existEmail($data['forgot_email'])==0) $json['error']="Email này không tồn tại !";
            else {
                $passNews    = $this->user->forgetw($data['forgot_email']);
                
                $body = '              
                        <div><b>Bạn có yêu cầu quên mật khẩu</b></div>
                        <div>&nbsp;</div>                
                        <div>Bây giờ mật khẩu mới của bạn là
                        <ul>
                            <li>Email đăng nhập: '.$data['forgot_email'].'</li>
                            <li>Mật khẩu mới: '.$passNews.'</li>                   
                        </ul>
                        <p>Vui lòng thay đổi mật khẩu để bảo mật thông tin này. Chúc bạn một ngày vui vẻ cùng GeVi.vn</p>
                        </div>';
                
                $adminConfig = $this->myconfig->getConfig();
                /*$config = Array(
                    'protocol'  => 'smtp',
                    'smtp_host' => 'ssl://smtp.googlemail.com',
                    'smtp_port' => 465,
                    'smtp_user' => "mailer@saigondomain.com",
                    'smtp_pass' => "123qazplm",
                    'mailtype' => 'html'
                );*/
                $config = Array(
                    'protocol'      => 'smtp',
                    'smtp_host'     => 'smtp.live.com',
                    'smtp_crypto'   => 'tls',
                    'smtp_port'     => 587,
                    'smtp_user'     => "service@gevi.vn",
                    'smtp_pass'     => "sinhnhatongxa",
                    'mailtype'      => 'html'
                );
                $this->load->library('email', $config);
                $this->email->set_newline("\r\n");
                $this->email->from("service@gevi.vn","Yêu cầu lấy lại mật khẩu");
                $this->email->to($data['forgot_email']);
                $this->email->bcc("duoc.huynh@dpassion.com");
                $this->email->subject("Quên mật khẩu đăng nhập GEVI");
                $this->email->message($body);
                $this->email->send();
                $json['success']="Gửi thành công. <br/>Vui lòng kiểm tra email ".$data['forgot_email'];
            }            
            
        }
        echo json_encode($json);
    }

}
