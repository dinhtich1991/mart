<aside class="main-sidebar"> 
  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar"> 
    <!-- Sidebar user panel -->
    <div class="user-panel">
      <div class="pull-left image"> <img src="<?= ADMIN_THUMB.'/'.$this->session->userdata("avatar"); ?>" class="img-circle" alt="User Image" /> </div>
      <div class="pull-left info">
        <p><?= $this->session->userdata("nameAdmin"); ?></p>
        <a><i class="fa fa-circle text-success"></i> Online</a> </div>
    </div>
    
    <!-- sidebar menu: : style can be found in sidebar.less -->
    <ul class="sidebar-menu">
      <li class="header">MENU</li>
      <li> <a href="<?= PATH_FOLDER_ADMIN ?>/aboutus"> <i class="fa fa-envelope-o"></i> <span>Giới thiệu</span></a> </li>
      <li> <a href="<?= PATH_FOLDER_ADMIN ?>/tuvan"> <i class="fa fa-envelope-o"></i> <span>Tư vấn</span></a> </li>
      <li> <a href="<?= PATH_FOLDER_ADMIN ?>/lienhe"> <i class="fa fa-envelope-o"></i> <span>Liên hệ</span></a> </li>
      <li> <a href="<?= PATH_FOLDER_ADMIN ?>/yeucau"> <i class="fa fa-envelope-o"></i> <span>Yêu cầu tư vấn</span></a> </li>
       <li> <a href="<?= PATH_FOLDER_ADMIN ?>/adv"> <i class="fa fa-envelope-o"></i> <span>Quảng cáo</span></a> </li>
       <li> <a href="<?= PATH_FOLDER_ADMIN ?>/doitac"> <i class="fa fa-gears"></i> <span>Đối tác</span></a> </li>
       <li> <a href="<?= PATH_FOLDER_ADMIN ?>/duyet"> <i class="fa fa-gears"></i> <span>Dự án chờ duyệt</span></a> </li>
      <li class="treeview"> <a href="#"> <i class="fa fa-server"></i> <span>Dự án</span> <i class="fa fa-angle-left pull-right"></i> </a>
        <ul class="treeview-menu">
          <li><a href="<?= PATH_FOLDER_ADMIN ?>/category"><i class="fa fa-circle-o"></i>Category</a></li>
          <li><a href="<?= PATH_FOLDER_ADMIN ?>/loai"><i class="fa fa-circle-o"></i>Loại dự án</a></li>
          <li> <a href="<?= PATH_FOLDER_ADMIN ?>/gia"> <i class="fa fa-envelope-o"></i>Giá bán</a> </li>
          <li><a href="<?= PATH_FOLDER_ADMIN ?>/product"><i class="fa fa-circle-o"></i>Dự án</a></li>
        </ul>
      </li>  
      <li class="treeview"> <a href="#"> <i class="fa fa-gears"></i> <span>Configuration</span> <i class="fa fa-angle-left pull-right"></i> </a>
        <ul class="treeview-menu">
          <li> <a href="<?= PATH_FOLDER_ADMIN ?>/config"> <i class="fa fa-circle-o"></i> <span>System Configuration</span> </a> </li>
          <li> <a href="<?= PATH_FOLDER_ADMIN ?>/administrator"> <i class="fa fa-circle-o"></i> <span>Admistrator</span> </a>
        </ul>
      </li>
      </li>
      <li><a href="<?= PATH_FOLDER_ADMIN ?>/logout"><i class="fa fa-sign-out"></i> <span>Logout</span></a></li>
    </ul>
  </section>
  <!-- /.sidebar --> 
</aside>
