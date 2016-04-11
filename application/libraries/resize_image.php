<?php

// Thay đổi kích thước ảnh khi ảnh đó đã có sẵn và tồn tại trong một thư mục nào đó
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class CI_Resize_image {

    var $image;
    var $image_type;

    public function load($filename) {


        $image_info = getimagesize($filename);
        $this->image_type = $image_info[2];
        if ($this->image_type == IMAGETYPE_JPEG) {

            $this->image = imagecreatefromjpeg($filename);
        } elseif ($this->image_type == IMAGETYPE_GIF) {

            $this->image = imagecreatefromgif($filename);
        } elseif ($this->image_type == IMAGETYPE_PNG) {

            $this->image = imagecreatefrompng($filename);
        }
    }

    function save($filename, $image_type = IMAGETYPE_JPEG, $compression = 75, $permissions = null) {

        if ($image_type == IMAGETYPE_JPEG) {
            imagejpeg($this->image, $filename, $compression);
        } elseif ($image_type == IMAGETYPE_GIF) {

            imagegif($this->image, $filename);
        } elseif ($image_type == IMAGETYPE_PNG) {

            imagepng($this->image, $filename);
        }
        if ($permissions != null) {

            chmod($filename, $permissions);
        }
    }

    function output($image_type = IMAGETYPE_JPEG) {

        if ($image_type == IMAGETYPE_JPEG) {
            imagejpeg($this->image);
        } elseif ($image_type == IMAGETYPE_GIF) {

            imagegif($this->image);
        } elseif ($image_type == IMAGETYPE_PNG) {

            imagepng($this->image);
        }
    }

    function getWidth() {

        return imagesx($this->image);
    }

    function getHeight() {

        return imagesy($this->image);
    }

    function resizeToHeight($height) {

        $ratio = $height / $this->getHeight();
        $width = $this->getWidth() * $ratio;
        $this->resize($width, $height);
    }

    function resizeToWidth($width) {
        $ratio = $width / $this->getWidth();
        $height = $this->getheight() * $ratio;
        $this->resize($width, $height);
    }

    function scale($scale) {
        $width = $this->getWidth() * $scale / 100;
        $height = $this->getheight() * $scale / 100;
        $this->resize($width, $height);
    }

    function resize($width, $height) {
        $new_image = imagecreatetruecolor($width, $height);
        imagecopyresampled($new_image, $this->image, 0, 0, 0, 0, $width, $height, $this->getWidth(), $this->getHeight());
        $this->image = $new_image;
    }

}

/* ==========================================================================
  Thay đổi kích thước ảnh là 250x400											||
  "upload/picture.jpg":đường dẫn hình ban đầu								||
  "upload/picture2.jpg":đường dẫn hình với kích thước sau khi đã thay đổi	||
  ||
  $image = new SimpleImage();												||
  $image->load('upload/picture.jpg');										||
  $image->resize(250,400);													||
  $image->save('upload/picture2.jpg');										||
  /*==========================================================================

 *
  /*==========================================================================
  Thay đổi kích thước ảnh là với height cố định là 500 và width tự động	    ||
  "upload/picture.jpg":đường dẫn hình ban đầu									||
  "upload/picture2.jpg":đường dẫn hình với kích thước sau khi đã thay đổi		||
  ||
  $image = new SimpleImage();													||
  $image->load('upload/picture.jpg');											||
  $image->resizeToHeight(500);												||
  $image->save('upload/picture2.jpg');										||
  /*==========================================================================

  /*==========================================================================
  Thay đổi kích thước ảnh là với width cố định là 250 và height tử động	    ||
  "upload/picture.jpg":đường dẫn hình ban đầu									||
  "upload/picture2.jpg":đường dẫn hình với kích thước sau khi đã thay đổi		||
  ||
  $image = new SimpleImage();													||
  $image->load('upload/picture.jpg');											||
  $image->resizeToWidth(250);													||
  $image->save('upload/picture2.jpg');										||
  /*==========================================================================

  /*==========================================================================
  Thay đổi kích thước ảnh là 50% so với ảnh gốc							    ||
  "upload/picture.jpg":đường dẫn hình ban đầu									||
  "upload/picture2.jpg":đường dẫn hình với kích thước sau khi đã thay đổi		||
  ||
  $image = new SimpleImage();													||
  $image->load('upload/picture.jpg');											||
  $image->scale(50);         													||
  $image->save('upload/picture2.jpg');										||
  /*==========================================================================

  /*==========================================================================
  Cho phép bạn xuất ra các hình ảnh trực tiếp
  vào trình duyệt mà không cần phải lưu hình ảnh			   				    ||
  "upload/picture.jpg":đường dẫn hình ban đầu									||
  "upload/picture2.jpg":đường dẫn hình với kích thước sau khi đã thay đổi		||

  header('Content-Type: image/jpeg');											||
  $image = new SimpleImage();													||
  $image->load('upload/picture.jpg');											||
  $image->resizeToWidth(150);													||
  $image->output();															||
  /*==========================================================================

  /*==========================================================================
 * Resize ảnh với Browse...
 *
 * $image->load($_FILES['file']['tmp_name']);
  $image->resize(300,150);
  $image->save($_FILES['file']['name']);
 *
 *
  /*==========================================================================

  link:http://www.white-hat-web-design.co.uk/blog/resizing-images-with-php/
 */

/*
  header('Content-Type: image/jpeg');
  $image = new SimpleImage();
  $image->load('http://anbinhland.vn/upload/image/Tin%20tuc/33.jpg');
  $image->resizeToWidth(150);
  $image->output(); */

/* header('Content-type: image/jpg');
  $image = new SimpleImage();
  $image->load('/sample-resized.jpg');
  $image->scale(50);
  $image->output(); */

/* header('Content-type: image/jpg');
  $image = new SimpleImage();
  $image->load('picture2.jpg');
  $image->resizeToWidth(100);
  $image->save('resize_picture2.jpg');
  $image->output(); */
?>