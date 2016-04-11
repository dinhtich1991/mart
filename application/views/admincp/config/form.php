<?php
$title_web = isset($detail['title_web']) ? $detail['title_web'] : "";
$meta_description = isset($detail['meta_description']) ? $detail['meta_description'] : "";
$meta_keywords = isset($detail['meta_keywords']) ? $detail['meta_keywords'] : "";
$email = isset($detail['email']) ? $detail['email'] : "";
$phone = isset($detail['phone']) ? $detail['phone'] : "";
$cell_phone = isset($detail['cell_phone']) ? $detail['cell_phone'] : "";
$zing = isset($detail['zing']) ? $detail['zing'] : "";
$twitter = isset($detail['twitter']) ? $detail['twitter'] : "";
$smtp_user = isset($detail['smtp_user']) ? $detail['smtp_user'] : "";
$smtp_pass = isset($detail['smtp_pass']) ? $detail['smtp_pass'] : "";
$facebook = isset($detail['facebook']) ? $detail['facebook'] : "";
$address = isset($detail['address']) ? $detail['address'] : "";
$g_plus = isset($detail['g_plus']) ? $detail['g_plus'] : "";
$youtube = isset($detail['youtube']) ? $detail['youtube'] : "";
$nick_yahoo = isset($detail['nick_yahoo']) ? $detail['nick_yahoo'] : "";
$name_company = isset($detail['name_company']) ? $detail['name_company'] : "";
$slogan = isset($detail['slogan']) ? $detail['slogan'] : "";
$footer1_vn = isset($detail['footer1_vn']) ? $detail['footer1_vn'] : "";
$footer2_vn = isset($detail['footer2_vn']) ? $detail['footer2_vn'] : "";
$footer2_en = isset($detail['footer2_en']) ? $detail['footer2_en'] : "";
?>
 <div class="content-wrapper">
 <section class="content-header">
          <h1>
           <?= $title_header; ?>
          </h1>
        </section>

        <!-- Main content -->
        <section class="content">

          <div class="row">
            <div class="message" id="message"></div>
            <section class="col-md-12">
                <div class="box box-primary">
 		<form id="form" action="" class="form-horizontal" onsubmit="return check_input();" method="post" enctype="multipart/form-data" name="LISTFORM">
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
                                <label for="name">Title default: </label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="title_web" value="<?= $title_web; ?>" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Meta Description: </label>
                            </div>
                            <div class="col-md-8"> 
                                <textarea name="meta_description" class="form-control" rows="2"><?=$meta_description?></textarea>                           
                            </div>
                        </div>
                     <div class="clearfix"></div>
                      <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Meta keyword: </label>
                            </div>
                            <div class="col-md-8"> 
                                <textarea name="meta_keywords" class="form-control" rows="2"><?=$meta_keywords?></textarea>                           
                            </div>
                        </div>
                     <div class="clearfix"></div>
                     <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Company name: </label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="name_company" value="<?= $name_company; ?>" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Email: </label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="email"  value="<?= $email; ?>" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Address: </label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="address" value="<?= $address; ?>" />
                            </div>
                        </div>
                        <!--<div class="clearfix"></div>
                         <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Facebook: </label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="facebook"  value="<?= $facebook; ?>" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                         <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Twitter: </label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="twitter"  value="<?= $twitter; ?>" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Linked in: </label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="g_plus"  value="<?= $g_plus; ?>" />
                            </div>
                        </div>-->
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Phone: </label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="phone"  value="<?= $phone; ?>" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">Phone 2: </label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="cell_phone"  value="<?= $cell_phone; ?>" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">SMTP USER:</label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="text" class="form-control" name="smtp_user"  value="<?= $smtp_user; ?>" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="name">SMTP PASS: </label>
                            </div>
                            <div class="col-md-8"> 
                                <input type="password" class="form-control" name="smtp_pass"  value="<?= $smtp_pass; ?>" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-upload"></i> Lưu lại</button>
                        </div>
                      </div><!-- /.box-body -->
                    </form>
                </div>
            </section>
          </div><!-- /.row (main row) -->

        </section><!-- /.content -->
      </div><!-- /.content-wrapper -->
      
    <script type="text/javascript" src="access/js/form.js"></script>