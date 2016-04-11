<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/*
  |--------------------------------------------------------------------------
  | File and Directory Modes
  |--------------------------------------------------------------------------
  |
  | These prefs are used when checking and setting modes when working
  | with the file system.  The defaults are fine on servers with proper
  | security, but you may wish (or even need) to change the values in
  | certain environments (Apache running a separate process for each
  | user, PHP under CGI with Apache suEXEC, etc.).  Octal values should
  | always be used to set the mode correctly.
  |
 */
define('FILE_READ_MODE', 0644);
define('FILE_WRITE_MODE', 0666);
define('DIR_READ_MODE', 0755);
define('DIR_WRITE_MODE', 0777);

/*
  |--------------------------------------------------------------------------
  | File Stream Modes
  |--------------------------------------------------------------------------
  |
  | These modes are used when working with fopen()/popen()
  |
 */

define('FOPEN_READ', 'rb');
define('FOPEN_READ_WRITE', 'r+b');
define('FOPEN_WRITE_CREATE_DESTRUCTIVE', 'wb'); // truncates existing file data, use with care
define('FOPEN_READ_WRITE_CREATE_DESTRUCTIVE', 'w+b'); // truncates existing file data, use with care
define('FOPEN_WRITE_CREATE', 'ab');
define('FOPEN_READ_WRITE_CREATE', 'a+b');
define('FOPEN_WRITE_CREATE_STRICT', 'xb');
define('FOPEN_READ_WRITE_CREATE_STRICT', 'x+b');


/**
 * author: Nguyễn Vũ Linh<br/>
 * date:20121017
 * Chức năng: Trả về đường dẫn của thư mục admin
 */
define('PATH_SITE', dirname($_SERVER['PHP_SELF']));
define('PATH_FOLDER_ADMIN','admincp');        // Thư mục admin    
define('PATH_EDITOR',PATH_SITE);               // phải có dấu "/" phía cuối
define('FOLDER_UPLOAD', "upload");                   // Thư mục upload dữ liệu
define('FOLDER_RESIZE', 'resize');                   // Thư mục rezise ex: upload/resize


/* TEXT */
define('UPDATING', 'Updating !');                 // Text đang cập nhật
define('MSG_ADD_SUCCESS', 'added succeed !');      // Text thêm thành công
define('MSG_ADD_ERROR', 'added failed!');          // Text thêm thất bại
define('MSG_DEL_SUCCESS', 'Seccess !');       // Text xóa thành công
define('MSG_EDIT_SUCCESS', 'Success !');      // Text thêm thành công



define('STATUS_1', 'access/image/1.png');                        // Trạng thái bật
define('STATUS_0', 'access/image/0.png');                        // Trạng thái ẩn
define('IMG_LOADING', 'access/image/loading.gif');           // Trạng thái ẩn
define('ICON_UPLOAD', 'access/image/filemanager/folder.png');   // icon upload
define('ICON_DEL', 'access/image/b_drop.png'); // icon xóa
define('ICON_ADD', 'access/image/filemanager/upload.png');      // icon thêm
define('ICON_UPLOAD_PHOTO', 'access/image/filemanager/upload_photo.png');      // icon thêm
define('ADMIN','dataweb/admin');
define('ADMIN_THUMB','dataweb/admin/thumb');
define('IMG_VN', '<img src="access/image/flags/vn.png"/>');
define('IMG_EN', '<img src="access/image/flags/gb.png"/>');

/* UPLOAD */
define('PATH_THUMB','dataweb/thumb');
define('PATH_SMALL', 'dataweb/small');
define('PATH_ICON', 'dataweb/icon');
define('ICON_ADD_NEWS', 'access/image/filemanager/list_add.png');
define('PATH_DICHVU','dataweb/hinhanh');
define('PATH_DICHVU_THUMB','dataweb/hinhanh/thumb');
define('PATH_HINH','dataweb/hinh');
define('PATH_HINH_THUMB','dataweb/hinh/thumb');
define('PATH_HINH_THUMB2','dataweb/hinh/thumb2');
define('PATH_HINH_THUMB3','dataweb/hinh/thumb3');
define('PATH_HINH_THUMB4','dataweb/hinh/thumb4');
define('PATH_HINH_THUMB5','dataweb/hinh/thumb5');
/* NGAN LUONG */
define('NGANLUONG_URL', 'https://www.nganluong.vn/checkout.php');
define('MERCHANT_ID', '30630');
define('MERCHANT_PASS', '888saigondomain');
define('RECEIVER','support@saigondomain.com');
// pagination
define('ADMIN_PER_PAGE', '10');                                    // Phân trang admin 25 rows/trang
define('ADMIN_NUM_LINKS', '100');                                  // Hiển thị 100 link
// pagination clientdefine('CLIENT_PER_PAGE', '12');                                    // Phân trang admin 25 rows/trang
define('CLIENT_NUM_LINKS', '5');                                  // Hiển thị 100 link
define('CLIENT_PER_PAGE', 1);

define('W_IMG_LARGE', '145');
define('H_IMG_LARGE', '190');

// MAX số lượng đặt
define('MAX_NUM', '1000');

/* End of file constants.php */
/* Location: ./application/config/constants.php */
