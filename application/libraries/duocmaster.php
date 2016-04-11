<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class CI_Duocmaster {

    /**
     * @todo   : tạo thư mục theo URL
     * @param  : Chuổi truyền URL
     * @author : Huỳnh Văn Được - 20121106
     */
    public function createFolder($path) {
        if (!is_dir($path)) {
            mkdir($path);
            chmod($path, 0777);
        }
    }

    /**
     * @todo   : Hủy tất cả các thẻ a trong chuỗi truyền vào
     * @param  : Chuổi truyền vào
     * @uses   : $this->duocomaster->removeTag_a($string);
     * @return : Trả về chuổi không chứa thẻ a
     * @author : Huỳnh Văn Được - 20121106
     */
    public function removeTag_a($string) {
        $string = preg_replace("/<a[^>]+\>/i", "", $string);
        return $string;
    }

    /**
     * @todo   : Hủy tất cả các thẻ img trong chuỗi truyền vào
     * @param  : Chuổi truyền vào
     * @return : Trả về chuổi không chứa thẻ img
     * @uses   : $this->duocmaster->removeTag_img($string);     
     * @author : Huỳnh Văn Được - 20121106
     */
    public function removeTag_img($string) {
        $string = preg_replace("/<img[^>]+\>/i", "", $string);
        return $string;
    }

    /**
     * @todo   : Kiểm tra đường dẫn của URL xem có hợp lệ không (chứa http: || https hay không)
     * @param  : Truyền vào URL
     * @return : True nếu URL hợp lệ, ngược lại trả về FALSE
     * @uses   : $this->duocmaster->isValidURL('http://yume.vn');
     * @author :  Huỳnh Văn Được - 20121106
     */
    public function isValidURL($url) {
        return preg_match('|^http(s)?://[a-z0-9-]+(.[a-z0-9-]+)*(:[0-9]+)?(/.*)?$|i', $url);
    }

    /**
     * @todo   : Kiểm tra email có hợp lệ không
     * @param  : Truyền vào email
     * @return : True nếu email hợp lệ, ngược lại trả về FALSE
     * @uses   : $this->duocmaster->isValidEmail('duoc.huynh@dpassion.com');
     * @author : Huỳnh Văn Được - 20121106
     */
    public function isValidEmail($email) {
        return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $email)) ? FALSE : TRUE;
    }

    /**
     * @todo   : Download hình từ server xuống thư mục
     * @param  : Truyền vào đường dẫn hình trên server và đường dẫn hình cần lưu     
     * @uses   : $this->duocmaster->saveImage('http://domain.com/i.jpg','upload/1.jpg');
     * @author : Huỳnh Văn Được - 20121106
     */
    public function saveImage($inPath, $outPath) {
        $in = fopen($inPath, "rb");
        $out = fopen($outPath, "wb");
        while ($chunk = fread($in, 8192)) {
            fwrite($out, $chunk, 8192);
        }
        fclose($in);
        fclose($out);
    }

    /**
     * @todo   : Cắt chuỗi theo độ dài nhật định
     * @param  : Truyền vào chuỗi cần cắt, số kí tự cần lấy
     * @return : Số kí tự của chuỗi truyền vào, nếu dài hơn số kí tự cần lấy sẽ thay bằng dấu ...
     * @uses   : $this->duocmaster->cut_string('duocmaster',1);
     * @author : Huỳnh Văn Được - 20121106
     */
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

    /**
     * Upload và resize hình sử dụng Browse
     * @param : Truyền đường dẫn hình, width resize, height resize
     * @return : Trả về đường dẫn hình, nếu xãy ra lỗi trả về FALSE
     * @uses : <input type="file" name="userfile" size="20" />
     * @author : Huỳnh Văn Được - 20121127
     */
    public function uploadResize($path, $width = 200, $height = 200, $resize = TRUE, $field = 'userfile') {
        $CI = &get_instance();
        $CI->load->library('image_lib');
        $CI->load->library('image_moo');
        $config['upload_path'] = $path;
        $config['allowed_types'] = '*'; // Định dạng file
        $config['remove_spaces'] = TRUE;
        $CI->load->library('upload', $config);
        if (!$CI->upload->do_upload($field)) {
            //$error = array('error' => $this->upload->display_errors());
            return FALSE;
        } else {
            //$data = array('upload_data' => $this->upload->data());
            //$config['image_library']  = 'gd2';
            //$config['source_image']   = $CI->upload->upload_path . $CI->upload->file_name;
            //$config['maintain_ratio'] = TRUE;
            //$config['width']          = $width;
            //$config['height']         = $height;
            //$config['remove_spaces']  = TRUE;
            //$config['quality']        = '100';
            //$CI->load->library('image_lib', $config);
            //$CI->image_lib->fit(); // fit,resize,crop    
            //$CI->image_lib->clear(); // Phải có dòng này upload nhiều hình sẽ chạy ổn định
            //$CI->image_lib->initialize($config); 
            if ($resize) {
                $real_path = $CI->upload->upload_path . $CI->upload->file_name;
                $resize_path = $CI->upload->upload_path . $CI->upload->file_name;
                $re = $CI->image_moo->load($real_path)->resize_crop($width, $height)->save($resize_path, true);
                if (!$re)
                    return FALSE;
            }
            return $config['upload_path'] . $CI->upload->file_name;
        }
    }

    /**
     * resise hình, thư mục resize nằm trong thư mục upload/resize
     * @param : Truyền vào đường dẫn hình, width, hright
     * @return :Trả về đường dẫn hình nếu thành công, ngược lại trả về FALSE;
     */
    public function resize($path, $width = 200, $height = 200) {
        $CI = &get_instance();
        $ROOT_UPLOAD = FOLDER_UPLOAD;
        $ROOT_RESIZE = FOLDER_RESIZE;
        $CI->load->library('image_moo');
        $CI->load->helper('string');
        $path = trim_slashes($path);
        $resize_path = FOLDER_UPLOAD . "/" . FOLDER_RESIZE . "/" . trim_slashes($path);
        $real_path = FOLDER_UPLOAD . "/" . trim_slashes($path);
        $array = explode("/", $resize_path);
        $n = count($array);
        $folder = "";
        for ($i = 0; $i < $n - 1; $i++) {
            $folder.= $array[$i] . "/";
            $this->createFolder($folder);
        }
        $CI->image_moo->load($real_path)->resize_crop($width, $height)->save($resize_path, true);
        return $path;
    }

    /**
     * @todo Upload file, lưu trong mục upload/files
     * @return : Trả về đường dẫn file, nếu xãy ra lỗi trả về FALSE
     * @uses : <input type="file" name="userfile" size="20" />
     * @author : Huỳnh Văn Được - 20130306   
     */
    public function uploadFile($path, $field = 'userfile',$encrypt_name=FALSE) {
        $CI = &get_instance();
        $CI->load->library('image_lib');
        $config['upload_path'] = $path;
        $config['allowed_types'] = '*'; // Định dạng file
        $config['remove_spaces'] = TRUE;
        $config['encrypt_name']=$encrypt_name;
        $CI->load->library('upload', $config);
        if (!$CI->upload->do_upload($field)) {
            return FALSE;
        } else {
            return $path . $CI->upload->file_name;
        }
    }
	 public function uploadMP3($path, $field = 'userfile',$encrypt_name=FALSE) {
        $CI = &get_instance();
        $config['upload_path'] = $path;
        $config['allowed_types'] = 'mp3'; // Định dạng file
        $config['remove_spaces'] = TRUE;
		$config['max_size']	= '102400';
        $config['encrypt_name']=$encrypt_name;
        $CI->load->library('upload', $config);
        if (!$CI->upload->do_upload($field)) {
            return FALSE;
        } else {
            return $path . $CI->upload->file_name;
        }
    }

    /**
     * @todo Resize hình, không bóp méo, không cắt hình, với background trắng, dữ kích thước như hình thật
     * @param String $source_image :Đường dẫn nguồn hình
     * @param String $destination :Đường dẫn đích
     * @param int  $tn_w :Độ rộng hình cần resize
     * @param int  $tn_h :Chiều dài hình cần resize
     * @author Huỳnh Văn Được 20130304 <duoc.huynh@dpassion.com>
     */
    public function resizeIMGv2($source_image, $destination, $tn_w, $tn_h, $quality = 100, $wmsource = false) {
        $info = getimagesize($source_image);
        $imgtype = image_type_to_mime_type($info[2]);
        #assuming the mime type is correct
        switch ($imgtype) {
            case 'image/jpeg':
                $source = imagecreatefromjpeg($source_image);
                break;
            case 'image/gif':
                $source = imagecreatefromgif($source_image);
                break;
            case 'image/png':
                $source = imagecreatefrompng($source_image);
                break;
            default:
                die('Invalid image type.');
        }
        #Figure out the dimensions of the image and the dimensions of the desired thumbnail
        $src_w = imagesx($source);
        $src_h = imagesy($source);
        #Do some math to figure out which way we'll need to crop the image
        #to get it proportional to the new size, then crop or adjust as needed
        $x_ratio = $tn_w / $src_w;
        $y_ratio = $tn_h / $src_h;
        if (($src_w <= $tn_w) && ($src_h <= $tn_h)) {
            $new_w = $src_w;
            $new_h = $src_h;
        } elseif (($x_ratio * $src_h) < $tn_h) {
            $new_h = ceil($x_ratio * $src_h);
            $new_w = $tn_w;
        } else {
            $new_w = ceil($y_ratio * $src_w);
            $new_h = $tn_h;
        }
        $newpic = imagecreatetruecolor(round($new_w), round($new_h));
        imagecopyresampled($newpic, $source, 0, 0, 0, 0, $new_w, $new_h, $src_w, $src_h);
        $final = imagecreatetruecolor($tn_w, $tn_h);
        $backgroundColor = imagecolorallocate($final, 255, 255, 255);
        imagefill($final, 0, 0, $backgroundColor);
        //imagecopyresampled($final, $newpic, 0, 0, ($x_mid - ($tn_w / 2)), ($y_mid - ($tn_h / 2)), $tn_w, $tn_h, $tn_w, $tn_h);
        imagecopy($final, $newpic, (($tn_w - $new_w) / 2), (($tn_h - $new_h) / 2), 0, 0, $new_w, $new_h);
        #if we need to add a watermark
        if ($wmsource) {
            #find out what type of image the watermark is
            $info = getimagesize($wmsource);
            $imgtype = image_type_to_mime_type($info[2]);
            #assuming the mime type is correct
            switch ($imgtype) {
                case 'image/jpeg':
                    $watermark = imagecreatefromjpeg($wmsource);
                    break;
                case 'image/gif':
                    $watermark = imagecreatefromgif($wmsource);
                    break;
                case 'image/png':
                    $watermark = imagecreatefrompng($wmsource);
                    break;
                default:
                    die('Invalid watermark type.');
            }
            #if we're adding a watermark, figure out the size of the watermark
            #and then place the watermark image on the bottom right of the image
            $wm_w = imagesx($watermark);
            $wm_h = imagesy($watermark);
            imagecopy($final, $watermark, $tn_w - $wm_w, $tn_h - $wm_h, 0, 0, $tn_w, $tn_h);
        }
        if (imagejpeg($final, $destination, $quality)) {
            return true;
        }
        return false;
    }

    /**
     * resise hình theo kích thước cố định, nếu hình không đúng kícht thước thì cắt hình
     * @param : Truyền vào đường dẫn hình, width, hright
     * @return :Trả về đường dẫn hình nếu thành công, ngược lại trả về FALSE;
     */
    public function resizeIMGv3($pathIn, $pathOut, $width = 100, $height = 100) {
        $CI = &get_instance();
        $CI->load->library('image_moo');
        $CI->load->helper('string');
        $CI->image_moo->load($pathIn)->resize_crop($width, $height)->save($pathOut, true);
        return $pathOut;
    }

    /**
     * @todo upload image in $folder, width objiect $obj
     * @return : đường dẫn hình
     * @author : Huỳnh Văn Được - 20130306   
     */
    public function uploadImage($folder, $obj) {
        $CI = &get_instance();
        $CI->load->library('image_lib');
        $config['upload_path'] = $folder;
        $config['allowed_types'] = 'jpg|png|gif|JPG'; // Định dạng file
        $config['remove_spaces'] = TRUE;
        $CI->load->library('upload', $config);
        if (!$CI->upload->do_upload($obj)) {
            echo "<center><b>Upload không thành công !</b></center>";
            return FALSE;
        } else {
            return $CI->upload->file_name;
        }
    }

    /**
     * @todo resize image before upload
     * @return : đường dẫn hình
     * @author : Huỳnh Văn Được - 20140210
     */
    public function resizeImageBefore($folder, $obj, $width = 1000, $height = 1000) {
        $CI = &get_instance();
        $CI->load->library('image_lib');
        $config['upload_path'] = $folder;
        $config['allowed_types'] = 'jpg|png|gif|JPG'; // Định dạng file
        $config['remove_spaces'] = TRUE;
        $CI->load->library('upload', $config);
        if (!$CI->upload->do_upload($obj)) {
            echo "<center><b>Upload không thành công !</b></center>";
            return FALSE;
        } else {
            $CI->image_lib->clear();
            $file_data = $CI->upload->data();
            $max_height = $width;
            $max_width = $height;
            if ($file_data['image_width'] > $max_width || $file_data['image_height'] > $max_height) {
                $config['image_library'] = 'gd2';
                $config['source_image'] = $file_data['full_path'];
                $config['quality'] = '100%';
                $config['maintain_ratio'] = true;
                $config['width'] = $width;
                $config['height'] = $height;
                $CI->image_lib->initialize($config);
                $CI->image_lib->resize();
            }
            return $folder.$CI->upload->file_name;
        }
    }

}
