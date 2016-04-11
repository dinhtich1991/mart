<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class CI_Function {

    public function thoat() {
        $CI = &get_instance();
    }
	public function get_youtube_id($url) {
    $url_string = parse_url($url, PHP_URL_QUERY);
    parse_str($url_string, $args);
    return isset($args['v']) ? $args['v'] : false;
	}
    public function getExtension($str) {
        $i = strrpos($str, ".");
        if (!$i) {
            return "";
        }

        $l = strlen($str) - $i;
        $ext = substr($str, $i, $l);
        return $ext;
    }
	public function getTyGia($gia){
		
		
		}
	//thu ngay thang
	public function ToThuDate_VN($date) {
		$date= strtotime($date);
        $thuTrongNgay = date("N",$date);
        $thu = "";
        switch ($thuTrongNgay) {
            case '1':$thu = "Thứ Hai ";
                break;
            case '2':$thu = "Thứ Ba ";
                break;
            case '3':$thu = "Thứ Tư ";
                break;
            case '4':$thu = "Thứ Năm ";
                break;
            case '5':$thu = "Thứ Sáu ";
                break;
            case '6':$thu = "Thứ Bảy ";
                break;
            case '7':$thu = "Chủ Nhật ";
                break;
        }
        $ngay = $thu . ", " . date('d/m/Y H:i',$date);
        return $ngay;
    }
    public function phanHang($number=0) {
        if ($number < 18)
            return "Chưa phân hạng";
        else if ($number >= 18 && $number < 36)
            return "Bạc";
        else if ($number >= 36 && $number < 60)
            return "Vàng";
        else if ($number >= 60)
            return "Bạch Kim";
    }

    
    public function convertHTML($title) {
        /* 	Replace with "-"
          Change it if you want
         */

        $replacement = '-';
        $map = array();
        $quotedReplacement = preg_quote($replacement, '/');

        $default = array(
            '/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|å/' => 'a',
            '/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|ë/' => 'e',
            '/ì|í|ị|ỉ|ĩ|Ì|Í|Ị|Ỉ|Ĩ|î/' => 'i',
            '/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|ø/' => 'o',
            '/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|ů|û/' => 'u',
            '/ỳ|ý|ỵ|ỷ|ỹ|Ỳ|Ý|Ỵ|Ỷ|Ỹ/' => 'y',
            '/đ|Đ/' => 'd',
            '/ç/' => 'c',
            '/ñ/' => 'n',
            '/ä|æ/' => 'ae',
            '/ö/' => 'oe',
            '/ü/' => 'ue',
            '/Ä/' => 'Ae',
            '/Ü/' => 'Ue',
            '/Ö/' => 'Oe',
            '/ß/' => 'ss',
            '/[^\s\p{Ll}\p{Lm}\p{Lo}\p{Lt}\p{Lu}\p{Nd}]/mu' => ' ',
            '/\\s+/' => $replacement,
            sprintf('/^[%s]+|[%s]+$/', $quotedReplacement, $quotedReplacement) => '',
        );
        //Some URL was encode, decode first
        $title = urldecode($title);

        $map = array_merge($map, $default);
        return strtolower(preg_replace(array_keys($map), array_values($map), $title));
    }

    /**
     * @todo : Thay dấu phẩy thành dấu chấm trong tiền tệ
     * @author : Huỳnh Văn Được
     * @copyright : Dpassion
     */
    public function changeCurrentStand($money) {
        $chars = array('.' => array(","));
        foreach ($chars as $key => $arr) {
            foreach ($arr as $val)
                $str = str_replace($val, $key, $money);
        }
        return $str;
    }

    /**
     * @todo : Chuyển định dạng d/m/yyy sang yyyy/m/d để đưa vào CSDL
     * @author : Huỳnh Văn Được - 20121025
     */
    public function changeFormatDate($date) {
        $arraydate = explode("-", $date);
        if (isset($arraydate[2]) && isset($arraydate[1]) && isset($arraydate[0]))
            return $arraydate[2] . "-" . $arraydate[1] . "-" . $arraydate[0];
        return "";
    }

    /**
     * @todo : Tạo chuỗi ngẫu nhiên 1
     * @author : Huỳnh Văn Được
     * @copyright : Dpassion
     * @uses : genRandomString()
     */
    public function RandomString1() {
        $length = 7;
        $string = "";
        for ($p = 0; $p < $length - 1; $p++) {
            $string .=mt_rand(0, 9);
        }
        return trim($string);
    }

    public function valid_email($str) {
        return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? FALSE : TRUE;
    }

    /**
     * @todo : Tạo chuỗi ngẫu nhiên 2
     * @author : Huỳnh Văn Được
     * @copyright : Dpassion
     * @uses : echo RandomString(50);
     */
    public function RandomString2($length) {
        $keys = array_merge(range(0, 9), range('a', 'z'));
        for ($i = 0; $i < $length; $i++) {
            $key .= $keys[array_rand($keys)];
        }
        return $key;
    }

    public function display_FCKEditor($objectForm, $value, $height = '350') {
        include_once ("editor/fckeditor/fckeditor.php");
        $oFCKeditor = new FCKeditor($objectForm);
        $oFCKeditor->BasePath = PATH_EDITOR . 'editor/fckeditor/';
        $oFCKeditor->Config['AutoDetectLanguage'] = true;
        $oFCKeditor->Config['DefaultLanguage'] = 'vi';
        $oFCKeditor->Config['FontNames'] = 'Arial;Comic Sans MS;Courier New;Tahoma;Times New Roman;Verdana';
        //en
        $oFCKeditor->ToolbarSet = 'Default';
        //Basic
        $oFCKeditor->Height = $height;
        $oFCKeditor->Config['EnterMode'] = 'br';
        $oFCKeditor->Config['SkinPath'] = '../editor/skins/office2003/';
        //silver//default
        $oFCKeditor->Value = $value;
        $oFCKeditor->Create();
    }

    public function display_CKEditor($objectForm, $value, $height = '350') {
        include_once ("editor/ckeditor/ckeditor.php");
        $oFCKeditor = new CKEditor($objectForm);
        $oFCKeditor->basePath = PATH_EDITOR . 'editor/ckeditor/';
        $oFCKeditor->config['language'] = 'en';
        $oFCKeditor->config['skin'] = 'office2003';
        $config = array();
        $oFCKeditor->config['height'] = $height;
        $oFCKeditor->editor($objectForm, $value, $config);
    }
	public function display_CK($name='',$value='',$class=''){
		$cke='
		<textarea name="'.$name.'" class="ckeditor '.$class.'">'.$value.'</textarea>';
		return $cke;	
	}
    public function display_CKEditorTyni($objectForm, $value, $height = '350') {
        include_once ("editor/ckeditor/ckeditor.php");
        $oFCKeditor = new CKEditor($objectForm);
        $oFCKeditor->basePath = PATH_EDITOR . 'editor/ckeditor/';
        $oFCKeditor->config['language'] = 'en';
        $oFCKeditor->config['skin'] = 'office2003';
        $config = array();
        $config['toolbar'] = array(
            array('Templates'),
            array('Image', 'Link', 'Unlink'),
            array('Source')
        );
        $oFCKeditor->config['height'] = $height;
        $oFCKeditor->editor($objectForm, $value, $config);
    }

    /* public function display_CKEditor($objectForm, $value, $height = '350') {        
      //echo '<script src="editor/ckeditor4.0/ckeditor.js"></script>';
      //echo '<script>CKEDITOR.replace("'.$objectForm.'", {extraPlugins: "tableresize"});</script>';
      echo '<textarea class="ckeditor" id="'.$objectForm.'" name="'.$objectForm.'" >'.$value.'</textarea>';

      } */

    # Cắt kí tự trong chuỗi

    public function cut_string($string, $max_length) {
        if ($string && $max_length) {
            if (strlen($string) > $max_length) {
                $string = substr($string, 0, $max_length);
                $pos = strrpos($string, " ");
                if ($pos === false) {
                    return substr($string, 0, $max_length) . "...";
                }
                return substr($string, 0, $pos) . "...";
            } else {
                return $string;
            }
        }
    }

    # Ngoại tệ từ vietcombank.com.vn

    public function NgoaiTe_vietcombank() {
        $Currency = array();
        if (@simplexml_load_file("http://www.vietcombank.com.vn/exchangerates/ExrateXML.aspx")) {
            $xml1 = simplexml_load_file("-");
            for ($i = 0; $i <= 17; $i++) {
                $str1 = $xml1->Exrate[$i];
                $CurrencyCode = $str1['CurrencyCode'];
                $CurrencyName = $str1['CurrencyName'];
                $Buy = $str1['Buy'];
                $Sell = $str1['Sell'];
                $Currency[$i]['CurrencyCode'] = $CurrencyCode;
                $Currency[$i]['CurrencyName'] = $CurrencyName;
                $Currency[$i]['Buy'] = $Buy;
                $Currency[$i]['Sell'] = $Sell;
            }
        }
        return $Currency;
    }

    public function getEUR() {
        $Currency = "0";
        if (@simplexml_load_file("http://www.vietcombank.com.vn/exchangerates/ExrateXML.aspx")) {
            $xml1 = simplexml_load_file("http://www.vietcombank.com.vn/exchangerates/ExrateXML.aspx");
            $str1 = $xml1->Exrate[4];
            $Currency = $str1['Transfer'];
        }
        return $Currency;
    }

    /**
     * @todo Change VND->Eu
     */
    public function convertVNDToEUR($number = 0) {
        $Currency = $this->getEUR();
        return number_format(ceil($number / $Currency), 0, '.', '.') . "€";
    }

    # Ngoại tệ từ vnepress.net

    public function NgoaiTe_Vnexpress($title = 'Ngoại tệ') {
        $html = '	
			<div class="infoType">
			<script language="JavaScript" src="http://www.vnexpress.net/Service/Forex_Content.js"></script>
                    	<table width="100%" cellspacing="1" cellpadding="0" border="0">
                        <tbody>
                        <tr>
                        	<td colspan="2" class="tieude">' . $title . '</td>
                        </tr>
						<tr>
						<script language="JavaScript">
							document.writeln("<tr><td>" + vForexs[0] + "</td><td>" + vCosts[0] + "</td></tr>")
							document.writeln("<tr><td>" + vForexs[1] + "</td><td>" + vCosts[1] + "</td></tr>")
							document.writeln("<tr><td>" + vForexs[2] + "</td><td>" + vCosts[2] + "</td></tr>")
							document.writeln("<tr><td>" + vForexs[4] + "</td><td>" + vCosts[4] + "</td></tr>")
							document.writeln("<tr><td>" + vForexs[6] + "</td><td>" + vCosts[6] + "</td></tr>")						
						</script>
                      </tbody></table>
			</div>';
        return $html;
    }

    # Ngày giờ hiện tại (Thứ, d/m/Y)

    public function Todate_VN() {
        $thuTrongNgay = date("N");
        $thu = "";
        switch ($thuTrongNgay) {
            case '1':$thu = "Thứ Hai ";
                break;
            case '2':$thu = "Thứ Ba ";
                break;
            case '3':$thu = "Thứ Tư ";
                break;
            case '4':$thu = "Thứ Năm ";
                break;
            case '5':$thu = "Thứ Sáu ";
                break;
            case '6':$thu = "Thứ Bảy ";
                break;
            case '7':$thu = "Chủ Nhật ";
                break;
        }
        $ngay = $thu . ", " . date('d/m/Y');
        return $ngay;
    }

    # Thị trường chứng khoán của FPTs

    public function ChungKhoan_FPTs($title = 'Thị trường chứng khoán') {
        $html = '
		<div>
		    <div class="clear"></div>
		        <div class="frame_title"><strong>' . $title . '</strong></div>
		        <iframe id="marketUpdateIframe" width="100%" scrolling="no" height="150" frameborder="0" src="http://liveboard.fpts.com.vn/MarketUpdate.aspx?groupid=1&language=0" marginwidth="0" marginheight="0">
		    </div>
		</div>';
        return $html;
    }

    # Đọc các file image trong folder, xuất ra mảng danh sách đường dẫn images 

    public function GetFileOnFolder($dir = "") {
        $array = array();
        if ($dh = opendir($dir)) {
            while (($file = readdir($dh)) !== FALSE) {
                $file = $dir . '/' . $file;

                if (!is_file($file) || substr($file, 0, 1) == '.') {
                    continue;
                }
                $array[] = htmlentities($file);
            }
            closedir($dh);
        }
        return $array;
    }

    # Share facebook

    public function share_facebook($url, $title = 'Share facebook') {
        $html = '<a href="http://www.facebook.com/sharer.php?u=' . $url . '">' . $title . '</a>';
        return $html;
    }

    # Tính khoảng cách giữa 2 ngày
    # Định dạng "Y-m-d"
    # $dt1<$dt2

    public function time_diff($dt1, $dt2) {
        $y1 = substr($dt1, 0, 4);
        $m1 = substr($dt1, 5, 2);
        $d1 = substr($dt1, 8, 2);

        $y2 = substr($dt2, 0, 4);
        $m2 = substr($dt2, 5, 2);
        $d2 = substr($dt2, 8, 2);

        $r1 = date('U', mktime(0, 0, 0, $m1, $d1, $y1));
        $r2 = date('U', mktime(0, 0, 0, $m2, $d2, $y2));
        
        if(($r2 - $r1)<0) return 0;
        else return date("d", ($r2 - $r1));
    }

    public function time_diff2($CheckIn, $CheckOut) {
        $CheckInX = explode("-", $CheckIn);
        $CheckOutX = explode("-", $CheckOut);
        $date1 = mktime(0, 0, 0, $CheckInX[1], $CheckInX[2], $CheckInX[0]);
        $date2 = mktime(0, 0, 0, $CheckOutX[1], $CheckOutX[2], $CheckOutX[0]);
        $interval = ($date2 - $date1) / (3600 * 24);
        // returns numberofdays 
        return $interval;
    }
    
    public function createFolder($path) {
        if (!is_dir($path)) {
            mkdir($path);
            chmod($path, 0777);
        }
    }

    public function deleteFolder($dirname) {
        if (is_dir($dirname))
            $dir_handle = opendir($dirname);
        if (!$dir_handle)
            return false;
        while ($file = readdir($dir_handle)) {
            if ($file != "." && $file != "..") {
                if (!is_dir($dirname . "/" . $file))
                    unlink($dirname . "/" . $file);
                else
                    delete_directory($dirname . '/' . $file);
            }
        }
        closedir($dir_handle);
        rmdir($dirname);
        return true;
    }

    public function renameFolder($oldname, $newname) {
        if (!is_dir($oldname)) {
            mkdir($oldname);
            chmod($oldname, 0777);
        } else {
            rename($oldname, $newname);
        }
    }

    public function getInfoYoutube($StringKey) {
        $video_ID = '';
        $JSON = file_get_contents("http://gdata.youtube.com/feeds/api/videos?q=" . $StringKey . "&max-results=1&v=2&alt=jsonc");
        $JSON_Data = json_decode($JSON);

        if (isset($JSON_Data->data->items) && isset($JSON_Data->data->items[0]))
            return $JSON_Data->data->items[0];
        else
            return false;

        //var_dump($JSON_Data);
        //exit();





        /*
          $obj->title;                   // Tiêu đề
          $obj->description;             // Mô tả
          $obj->thumbnail->sqDefault;    // Hình thumbnail
          $obj->uploader;                // Người upload
          $obj->viewCount;               // Số lượng xem
         */
    }

    /* Youtube */

    public function captcha() {
        $CI = & get_instance();
        $CI->load->library('session');

        $captcha = imagecreatefromgif('captcha/cross.gif');
        //set some variables
        $black = imagecolorallocate($captcha, 0, 0, 0);
        $white = imagecolorallocate($captcha, 225, 225, 225);
        $red = imagecolorallocate($captcha, 225, 0, 0);
        $font = 'captcha/arial.ttf';
        //random stuff
        $string = md5(microtime() * mktime());
        $text = substr($string, 0, 5);


        //$_SESSION['code'] = $text;        
        $data = array(
            'captcha' => base_url($text)
        );
        $CI->session->set_userdata($data);
        //create some stupid stuff
        imagettftext($captcha, 14, 5, 5, 20, $red, $font, $text);
        // begin to create image
        header('content-type: image/png');
        imagepng($captcha);
        //clean up
        //imagedestroy($captcha);
    }

    public function encode($originalStr) {
        $encodedStr = $originalStr;
        $num = mt_rand(1, 6);
        for ($i = 1; $i <= $num; $i++) {
            $encodedStr = base64_encode($encodedStr);
        }
        $seed_array = array('S', 'H', 'A', 'F', 'I', 'Q');
        $encodedStr = $encodedStr . "+" . $seed_array[$num];
        $encodedStr = base64_encode($encodedStr);
        return $encodedStr;
    }

    public function decode($decodedStr) {
        $seed_array = array('S', 'H', 'A', 'F', 'I', 'Q');
        $decoded = base64_decode($decodedStr);
        list($decoded, $letter) = split("\+", $decoded);
        for ($i = 0; $i < count($seed_array); $i++) {
            if ($seed_array[$i] == $letter)
                break;
        }
        for ($j = 1; $j <= $i; $j++) {
            $decoded = base64_decode($decoded);
        }
        return $decoded;
    }

    public function replaceStringImage($stringImage) {
        $chars = array('=' => array('/'));
        foreach ($chars as $key => $arr) {
            foreach ($arr as $val)
                $str = str_replace($val, $key, $stringImage);
        }
        return $str;
    }

    public function deReplaceStringImage($stringImage) {
        $chars = array('/' => array('='));
        foreach ($chars as $key => $arr) {
            foreach ($arr as $val)
                $str = str_replace($val, $key, $stringImage);
        }
        return $str;
    }

    public function getWidthByHeight($path, $height2 = 100) {
        $path = 'http://' . $_SERVER['SERVER_NAME'] . $path;
        if (file_exists($path)) {
            list($width1, $height1) = getimagesize($path);
            return ($width1 * $height2) / $height1;
        } else
            die("Đường dẫn hình sai.");
    }

    /**
     * @todo : DATABSE - Bật tắt trong status 1/0
     * $table : Tên bảng
     * $id    : id
     * $status : Nhận giá trị 1 hoặc 0
     * $field : Tên cột , mậc định là cột status
     */
    public function status($table, $id, $status, $field) {
        $CI = &get_instance();
        $CI->load->database();
        $status = (int) $status == 0 ? 1 : 0;
        $params = array($field => (int) $status);
        $CI->db->where(array('id' => $id), NULL, FALSE);
        $CI->db->update($table, $params);
        return $status;
    }

    /**
     * @todo : DATABSE - lấy ordering lớn nhất
     */
    public function orderingMax($table) {
        $CI = &get_instance();
        $CI->load->database();
        $CI->db->select_max('ordering');
        $query = $CI->db->get($table);
        $result = $query->result_array();
        return (int) $result[0]['ordering'] + 1;
    }

    /**
     * @todo : DATABSE - Xóa dữ liệu trong bảng gì với id là gì
     */
    public function del($table, $id) {
        $CI = &get_instance();
        $CI->load->database();
        $CI->db->delete($table, array('id' => (int) $id));
        return $id;
    }

    public function del_all($table) {
        $CI = &get_instance();
        $CI->load->database();
        $list = $CI->input->post('del');
        foreach ($list as $id) {
            $this->del($table, $id);
        }
    }

    /**
     * Cãp nhật thứ tự theo bảng, id, giá trị
     */
    public function ordering($table, $id, $value) {
        $CI = &get_instance();
        $CI->load->database();
        $param = array('ordering' => (int) $value);
        $CI->db->where(array('id' => (int) $id), NULL, FALSE);
        $CI->db->update($table, $param);
    }

    /**
     * Cập nhật thứ tự theo danh sách
     */
    public function ordering_all($table) {
        $CI = &get_instance();
        $CI->load->database();
        $list = $CI->input->post('ordering');
        foreach ($list as $id => $value) {
            $this->ordering($table, $id, $value);
        }
    }

    /**
     * Tính tổng số dòng với điều kiện $where là một mảng dạng array('cat'=>1,'id=10')
     */
    public function total_rows($table, $where = array()) {
        $CI = &get_instance();
        $CI->load->database();
        $CI->db->select('*');
        $CI->db->from($table);
        if (!empty($where))
            $CI->db->where($where);
        return $CI->db->count_all_results();
    }

    /**
     * Lấy tên gì trong bảng gì, với điều kiện gì
     * $where có dạng $where = array(
      'parent'=>116
      );
     */
    public function getSelectTableWhere($select, $table, $where, $orderby = FALSE, $order = "DESC") {
        $CI = &get_instance();
        $CI->load->database();
        $CI->db->select($select);
        $CI->db->from($table);
        if (!empty($where))
            $CI->db->where($where);
        if ($orderby)
            $CI->db->order_by($orderby, $order);
        $query = $CI->db->get();
        $result = $query->result_array();
        return ($result) ? $result[0] : array();
    }

    /**
     * Lấy tất cả các dòng tên gì trong bảng gì, với điều kiện gì
     * $where có dạng $where = array(
      'parent'=>116
      );
     */
    public function getMulSelectTableWhere($select, $table, $where, $orderby = FALSE, $order = "DESC") {
        $CI = &get_instance();
        $CI->load->database();
        $CI->db->select($select);
        $CI->db->from($table);
        if (!empty($where))
            $CI->db->where($where);
        if ($orderby)
            $CI->db->order_by($orderby, $order);
        $query = $CI->db->get();
        $result = $query->result_array();
        return ($result) ? $result : array();
    }

    /**
     * Lấy tên gì trong bảng gì, với điều kiện gì có limit
     * $where có dạng $where = array(
      'parent'=>116
      );
     */
    public function getMulSelectTableWhereLiMit($select, $table, $where, $orderby = FALSE, $order = "DESC", $num = 25, $offset = 0) {
        $CI = &get_instance();
        $CI->load->database();
        $CI->db->select($select);
        $CI->db->from($table);
        if (!empty($where))
            $CI->db->where($where);
        if ($orderby)
            $CI->db->order_by($orderby, $order);
        if (is_numeric($num) && is_numeric($offset))
            $CI->db->limit($num, $offset);
        $query = $CI->db->get();
        $result = $query->result_array();
        return ($result) ? $result : array();
    }

}

// Class user
// Location:application/libraries/function.php

    