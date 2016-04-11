<?php
$email    = "";
$username = "";
$name     = "";
$phone    = "";
$status   = "";
$level    = 1;
$id_user  = 0;
if (!empty($detail)) {
    $username = $detail['username'];
    $name     = $detail['name'];
    $phone    = $detail['phone'];
    $status   = $detail['status'];
    $level    = $detail['level'];
    $id_user  = $detail['id'];
}
?>
<?php
        $messages = $this->messages->get();
        if (is_array($messages)):
            foreach ($messages as $type => $msgs):
                if (count($msgs > 0)):
                    foreach ($msgs as $message):
                        echo ('<div id="messages"><div class="' . $type . '">' . $message . '</div></div> ');
                    endforeach;
                endif;
            endforeach;
        endif;
        ?>     
<form action="" method="post" enctype="multipart/form-data" class="forms" name="form" id="frm">
    <div class="page-title ui-widget-content ui-corner-all">
        <div class="float-left">
            <h1><b><?php echo $title_header; ?></b></h1> 
        </div>

        <div class="button float-right">        
            <a href="javascript:submit();" class="btn ui-state-default"><span class="ui-icon ui-icon-circle-plus"></span>Lưu lại</a>
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
                        </ul>
                    </div>

                </div>  
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</form>