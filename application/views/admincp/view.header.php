<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en" xml:lang="en">
        <head>
        <base href="<?= base_url(); ?>"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>
        <?= isset($title_header) ? $title_header : "Untitle" ?>
        </title>
        <link href="access/dist/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="access/dist/css/font-awesome.min.css" rel="stylesheet" />
        <link href="access/dist/css/admin.min.css" rel="stylesheet" type="text/css" />
        <link href="access/dist/css/skins.min.css" rel="stylesheet" type="text/css" />
        <link href="access/dist/css/admin.style.css" rel="stylesheet" type="text/css" />
        <link href="access/dist/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" rel="stylesheet" type="text/css" />
        <script src="access/dist/plugins/jQuery/jQuery-2.1.4.min.js"></script>
        <script src="access/dist/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="access/dist/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" type="text/javascript"></script>
        <script src="access/dist/js/app.min.js" type="text/javascript"></script>
        <script src="access/dist/js/demo.js" type="text/javascript"></script>
		<script type="text/javascript" src="ckeditor/ckeditor.js"></script>
        <script src='access/js/admin.js' type="text/javascript" language="javascript"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <script>
            var PATH_FOLDER_ADMIN = '<?= PATH_FOLDER_ADMIN; ?>';
            var IMG_LOADING = '<?= IMG_LOADING; ?>';
            
        </script>
        </head>
 <body class="skin-blue sidebar-mini">
		<header class="main-header"> 
          <!-- Logo --> 
          <a href="#" class="logo"> 
  <!-- mini logo for sidebar mini 50x50 pixels --> 
  <span class="logo-mini"><b>LinhTinh</b></span> 
  <!-- logo for regular state and mobile devices --> 
  <span class="logo-lg">Saigondomain</span> </a> 
          <!-- Header Navbar: style can be found in header.less -->
          <nav class="navbar navbar-static-top" role="navigation"> 
    <!-- Sidebar toggle button--> 
    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"> <span class="sr-only">Menu</span> </a>
    <div class="navbar-custom-menu">
              <ul class="nav navbar-nav">
        <!-- Messages: style can be found in dropdown.less--> 
        <!-- Tasks: style can be found in dropdown.less --> 
        
        <!-- User Account: style can be found in dropdown.less -->
        <li class="dropdown user user-menu"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <img src="<?= ADMIN_THUMB.'/'.$this->session->userdata("avatar"); ?>" class="user-image" alt="User Image"/> <span class="hidden-xs">
          <?= $this->session->userdata("nameAdmin"); ?>
          </span> </a>
                  <ul class="dropdown-menu">
            <!-- User image -->
            <li class="user-header"> <img src="<?= ADMIN_THUMB.'/'.$this->session->userdata("avatar"); ?>" class="img-circle" alt="User Image" />
                      <p> </p>
                    </li>
            <!-- Menu Body --> 
            
            <!-- Menu Footer-->
            <li class="user-footer">
                      <div class="pull-left">
                       <a href="<?= PATH_FOLDER_ADMIN ?>/administrator/edit/<?=$this->session->userdata("idAdmin");?>" class="btn btn-default btn-flat">Chỉnh sửa thông tin</a> </div>
                      <div class="pull-right"> <a href="<?= PATH_FOLDER_ADMIN ?>/logout" class="btn btn-default btn-flat">Đăng xuất</a> </div>
                    </li>
          </ul>
                </li>
        <!-- Control Sidebar Toggle Button --> 
        <!--
              <li>
                <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
              </li>
              -->
      </ul>
            </div>
  </nav>
 </header>
<!-- Left side column. contains the logo and sidebar -->
<?= $this->load->view(PATH_FOLDER_ADMIN . '/view.menu.php'); ?>
