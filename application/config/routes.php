<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
$route['default_controller'] = "martreal";
$route[PATH_FOLDER_ADMIN] = PATH_FOLDER_ADMIN . '/homepage';
$route[PATH_FOLDER_ADMIN . "/(:any)"] = PATH_FOLDER_ADMIN . '/$1';
$route[PATH_FOLDER_ADMIN . "/(:any)/(:any)"] = PATH_FOLDER_ADMIN . '/$1/$2';
$route[PATH_FOLDER_ADMIN . '/login'] = PATH_FOLDER_ADMIN . '/homepage/login';
$route[PATH_FOLDER_ADMIN . '/logout'] = PATH_FOLDER_ADMIN . '/homepage/logout';
$route['vi'] = 'martreal/set_lang/vi';
$route['en'] = 'martreal/set_lang/en';
$route['gioi-thieu']='martreal/aboutus';
$route['san-pham']="martreal/product";
$route['tu-van']="martreal/tuvan";
$route['advisory']="martreal/tuvan";
$route['lien-he']="martreal/lienhe";
$route['contact']="martreal/lienhe";
$route['gioi-thieu']="martreal/gioithieu";
$route['about-us']="martreal/gioithieu";
$route['add-yeu-cau']="martreal/addyeucau";
$route['add-contact']="martreal/addcontact";
$route['dang-tin']="martreal/dangtin";
$route['add-photo']="martreal/addPhoto";
$route['up-photo']="martreal/uploadPhoto";

$route['quan/(:any)']="martreal/productbyquan/$1";
$route['district/(:any)']="martreal/productbyquan/$1";
$route['quan/(:any)/(:num)']="martreal/productbyquan/$1/$2";
$route['district/(:any)/(:num)']="martreal/productbyquan/$1/$2";

$route['search']="martreal/search";
$route['search/(:num)']="martreal/search/$1";
$route['loai-bat-dong-san/(:any)']="martreal/productbyloai/$1";
$route['property-type/(:any)']="martreal/productbyloai/$1";
$route['loai-bat-dong-san/(:any)/(:num)']="martreal/productbyloai/$1/$2";
$route['property-type/(:any)/(:num)']="martreal/productbyloai/$1/$2";
$route['sort']="martreal/sort";
$route['load-hinh/(:num)']="martreal/images/$1";
$route['(:any)/(:num)']="martreal/productbycate/$1/$2";
$route['(:any)/(:any)']="martreal/detailproduct/$1/$2";
$route['(:any)']="martreal/productbycate/$1";


/* End of file routes.php */
/* Location: ./application/config/routes.php */

