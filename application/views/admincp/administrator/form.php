<script type="text/javascript" src="<?= base_url('access/js/ajaxupload.3.5.js'); ?>"></script>
<?php 
$id = isset($detail['id']) ? (int) $detail['id'] : 0;
$avatar = isset($detail['avatar']) && is_file(ADMIN_THUMB . "/" . $detail['avatar']) ? ADMIN_THUMB . "/" . $detail['avatar'] : ICON_UPLOAD_PHOTO;
$name     = isset($detail['name'])?$detail['name']:"";
$username = isset($detail['username'])?$detail['username']:"";
$password = isset($detail['password'])?$detail['password']:"";
$level = isset($detail['level'])?$detail['level']:"";
$status   = isset($detail['status'])?$detail['status']:"1";
?>
<div class="content-wrapper">
 <section class="content-header">
          <h1>
              <span class="glyphicon glyphicon-list-alt"></span> <?= $title_header; ?>
          </h1>
        </section>

        <!-- Main content -->
        <section class="content">

          <div class="row">
            <div class="message" id="message"></div>
            <section class="col-md-12">
                <div class="box box-primary">
                    <form id="form" class="form-horizontal" onsubmit="return check_input();" method="post" enctype="multipart/form-data" name="LISTFORM">
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
                      <div class="box-body">
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Full name</label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="name" required="" value="<?= $name; ?>" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">User name</label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="username" required="" value="<?= $username; ?>" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Password</label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="password" class="form-control" name="password"  />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Avatar</label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="hidden" name="avatar" value="<?= $avatar; ?>" size="70" id="hiddenAdmin">
                                <div id="uploadAdmin"><img src="<?= $avatar; ?>" id="img_logo" style="max-width: 100px;"/></div>
                                <span id="loadAjax"></span>
                                <br/><strong>(Size: 450x425px)</strong>
                            </div>
                        </div>
                        <div class="clearfix"></div>		
                         <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Status</label>
                            </div>
                            <div class="col-md-8"> 
                               <label>
                               <input type="radio" value="1" name="status" <?=$status==1?"checked='checked'":""?> />
                                Hiển thị 
                                </label>
                                <label>
                                <input type="radio" value="0" name="status" <?=$status==0?"checked='checked'":""?>/>
                                 Ẩn
                                 </label>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-upload"></i> Save</button>
                        </div>
                      </div><!-- /.box-body -->
                    </form>
                </div>
            </section>
          </div><!-- /.row (main row) -->

        </section><!-- /.content -->
      </div><!-- /.content-wrapper -->
      
    <script type="text/javascript" src="access/js/form.js"></script>
      <script type="text/javascript">
                        $(document).ready(function () {
                            admin.uploadAdmin();  
                        });
</script>