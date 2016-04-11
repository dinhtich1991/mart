<?php
$email = "";
$username = "";
$name = "";
$phone = "";
$status = "";
$level = 1;
$id_user = 0;
if (!empty($detail)) {
    $username   = $detail['username'];
    $name       = $detail['name'];
    $phone      = $detail['phone'];
    $status     = $detail['status'];
    //$level      = $detail['level'];
    $id_user    = $detail['id'];
}
?>
<form action="" method="post" enctype="multipart/form-data" class="forms" name="form" id="frm">
    <div class="page-title ui-widget-content ui-corner-all">
        <div class="float-left">
            <h1><b><?php echo $title_header; ?></b></h1> 
        </div>

        <div class="button float-right">        
            <a href="javascript:submit();" class="btn ui-state-default"><span class="ui-icon ui-icon-circle-plus"></span>Lưu lại</a>
            <a onclick="questionCancel('<?php echo base_url() . PATH_FOLDER_ADMIN; ?>/user/quantri_list');" class="btn ui-state-default"><span class="ui-icon ui-icon-circle-plus"></span>Hủy bỏ</a>
        </div>
        <div class="clearfix"></div>
        <div class="other">        
            <div class="hastable">                 
                <div style="float: left; width:99%; padding-left:1%; border-top: 1px solid #ccc;">

                    <div id="thongtin" class="show1">
                        <ul>

                            <li>
                                <label class="desc">Họ tên</label>
                                <div>
                                    <input type="text" tabindex="1" maxlength="255" value="<?php echo $name; ?>" class="field text small" name="name" />
                                </div>
                            </li> 

                            <li>
                                <label class="desc">Tên đăng nhập</label>
                                <div>
                                    <input type="text" tabindex="1" maxlength="255" value="<?php echo $username; ?>" class="field text small" name="username" />
                                </div>
                            </li>

                            <li>
                                <label class="desc">Mật khẩu</label>
                                <div>
                                    <input type="password" tabindex="1" maxlength="255" value="" class="field text small" name="password" />
                                </div>    
                            </li>

                            <!--<li>
                                <label class="desc">Cấp quản trị</label>
                                <div>
                                    <?php
                                    $options = array('1' => 'Cấp 1', '2' => 'Cấp 2', '3' => 'Cấp 3');
                                    echo form_dropdown('level', $options, $level, 'class="select" onchange="changeLevel(this.value);"');
                                    ?>     
                                </div> 
                            </li>-->
                            <li>
                                <label class="desc">Loại tin rao (Nhấn Ctrl để chọn nhiều)</label>
                                <div>
                                    <select name="categories[]" size="1" multiple="multiple" id="categories" class="field select small" style="height: 100px;">
                                        <?php
                                        foreach ($listLoaiTinRao as $row) {                                            
                                            $count = $this->user->checkUserPermission($row['id'], $id_user);
                                            $select = "";
                                            if ($count > 0)$select = 'selected="selected"';
                                            ?>                                       
                                            <option value="<?= $row['id'] ?>" <?= $select; ?>><?= $row['e_title'] ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <label  class="desc">Tình trạng</label>
                                <div>
                                    <?php
                                    $options = array('1' => 'Bật', '0' => 'Tắt');
                                    echo form_dropdown('status', $options, $status, 'class="select"');
                                    ?>     
                                </div>
                            </li>  
                        </ul>
                    </div>
                </div>  
                </div>
            <div class="clearfix"></div>
        </div>
    </div>
</form>