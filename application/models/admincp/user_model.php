<?php

class User_model extends CI_Model {

    private $TBL_USER = "user";

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    /**
     * @todo: Hiển thị danh sách user không phải là 
     */
    public function display($num, $offset = 0) {
        $this->db->select('*');
        $this->db->from('user');
        $this->db->where(array('is_admin' => 0));
        $this->db->order_by('id', 'desc');
        $this->db->limit($num, $offset);
        $query = $this->db->get();
        return $query->result_array();
    }

    public function displayAllUser() {
        $this->db->select('*');
        $this->db->from('user');
        $this->db->where(array('is_admin' => 0));
        $query = $this->db->get();
        return $query->result_array();
    }

    public function displayPermissionGroup() {
        $this->db->select('*');
        $this->db->from('authorities');
        $query = $this->db->get();
        return $query->result_array();
    }
	//get liên hệ
	public function getDatHang(){
		return $this->function->getMulSelectTableWhere('*','customer',array('status'=>0));
		}
	//get liên hệ
	public function getYeuCau(){
		return $this->function->getMulSelectTableWhere('*','dattheoyeucau',array('status'=>0));
		}
    /**
     * @todo: Hiển thị danh sách quản trị
     * @author : Nguyễn Vũ Linh
     */
    public function display_quantri($num, $offset) {
        $this->db->select('*');
        $this->db->from('user');
        $this->db->where(array('is_admin' => 1));
        $this->db->order_by('ordering', 'desc');
        $this->db->limit($num, $offset);
        $query = $this->db->get();
        return $query->result_array();
    }

    /**
     * @todo: Hiện thị chi tiết user theo id
     * @author : Nguyễn Vũ Linh
     */
    public function getList($id) {
        $this->db->select('*');
        $this->db->from('user');
        $this->db->where(array('id' => (int) $id));
        $query = $this->db->get();
        $result = $query->result_array();
        return (isset($result)) ? $result[0] : null;
    }

    /**
     * @todo : Thêm user quản trị, phân quyền user quản trị theo loại tin rao
     * @author : Nguyễn Vũ Linh
     */
    public function add() {
        $params = $this->input->post();
        $params['is_admin'] = 1; // admin là 1
        $params['password'] = md5($params['password']);
       // $controller = $params['controller'];
		$params['avatar']=basename($params['avatar']);
        unset($params['controller']);
        $this->db->insert('user', $params);
        $id = $this->db->insert_id();

        // insert quền
       // $this->insertPermissionGroup($id, $controller);
    }

    /**
     * @todo : Cập nhật user quản trị
     * @author :Nguyễn Vũ Linh
     */
    public function update($id) {
        $data = $this->input->post();
//        $controller = $data['controller'];
		$params['avatar']=basename($data['avatar']);
        $data_user = array(
            'username' => $data['username'],
            'name' => $data['name'],
            'status' => $data['status'],
			'avatar'=>$params['avatar']
			
        );
        $this->db->where(array('id' => $id), NULL, FALSE);
        $this->db->update('user', $data_user);

        /* Nếu sửa đổi password */
        if (trim($this->input->post('password')) != "") {
            $this->db->where(array('id' => $id), NULL, FALSE);
            $this->db->update('user', array('password' => md5($this->input->post('password'))));
        }

        // insert quền
       // $this->insertPermissionGroup($id, $controller);
    }

    /**
     * @todo : insert quyền cho user
     * @author : Nguyễn Vũ Linh
     */
    public function insertPermissionGroup($id_user, $list_controller) {
        $this->db->delete("groups_authorities", array('id_user' => (int) $id_user));
        $n = count($list_controller);
        for ($i = 0; $i < $n; $i++) {
            $params = array(
                'id_user' => $id_user,
                'controller' => $list_controller[$i],
            );
            $this->db->insert("groups_authorities", $params);
        }
    }

    /**
     * @todo :  Đăng nhập admin
     * @author : Nguyễn Vũ Linh
     */
    public function login($username, $password) {
        $data = array();
        $this->db->select('id,name,level,avatar');
        $this->db->from('user');
        $this->db->where(array('is_admin' => 1, 'status' => 1, 'username' => $username, 'password' => md5($password)));
        $query = $this->db->get();
        if ($query->num_rows() > 0) {
            $data = $query->result_array();
        }
        $query->free_result();
        return $data;
    }

    /**
     * @todo: Kiểm tra user nào quản trị loại tin rao nào
     * @author : Nguyễn Vũ Linh
     * @param int $id_user ID User
     * @param string $controller controller quyền

     */
    public function checkUserPermission($id_user, $controller) {
        $this->db->select('*');
        $this->db->from('groups_authorities');
        $this->db->where(array('id_user' => (int) $id_user, 'controller' => trim($controller)));
        return $this->db->count_all_results();
    }

    public function changeUser($id) {
        $data = $this->input->post();
        if (trim($data['password']) == "") {
            $data_user = array(
                'username' => trim($data['username']),
                'name' => trim($data['name'])
            );
            $this->db->where(array('id' => $id), NULL, FALSE);
            $this->db->update('user', $data_user);
        } else {
            $data_user = array(
                'username' => trim($data['username']),
                'name' => trim($data['name']),
                'password' => md5(trim($data['password']))
            );
            $this->db->where(array('id' => $id), NULL, FALSE);
            $this->db->update('user', $data_user);
        }
    }

    /**
     * @todo : Xóa user quản trị và khóa quyền của Loại tin rao
     * @author : Nguyễn Vũ Linh
     */
    public function del($id) {
        return $this->function->del("user", $id);
    }

    /**
     * @todo : Bật tắt tình trạng nhanh
     */
    public function status($id = 0, $status = 0, $field = 'status') {
        return $this->function->status("user", $id, $status, $field);
    }

    public function orderingMax() {
        return $this->function->orderingMax("user");
    }

    public function del_all() {
        $this->function->del_all($this->TBL_USER);
    }

    public function ordering_all() {
        $this->function->ordering_all($this->TBL_USER);
    }

    public function total_rows() {
        $where = array('is_admin' => 1);
        return $this->function->total_rows($this->TBL_USER, $where);
    }

  

}
