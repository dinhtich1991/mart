<?php
$name = isset($detail['name']) ? htmlentities(stripslashes($detail['name']), ENT_QUOTES, "UTF-8") : "";
$phone = isset($detail['phone']) ? $detail['phone'] : "";
$email = isset($detail['email']) ? $detail['email'] : "";
$address= isset($detail['address']) ? $detail['address'] : "";
$code= isset($detail['code']) ? $detail['code'] : "";
$sl= isset($detail['sl']) ? $detail['sl'] : "";
$note= isset($detail['note']) ? $detail['note'] : "";
$add_date= isset($detail['add_date']) ? $detail['add_date'] : "";
$status = isset($detail['status']) ? $detail['status'] : "1";
?>
<script type="text/javascript" src="access/js/jquery.jsajaxfileuploader.js"></script>
<link href="access/js/jquery.jsajaxfileuploader.css" rel="stylesheet" type="text/css" />
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
                            <label class="col-sm-2 control-label">Họ tên: </label>
                            <div class="col-sm-6">
                              <p><?=$name?></p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Số điện thoại: </label>
                            <div class="col-sm-6">
                            	<p><?=$phone?></p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Địa chỉ: </label>
                            <div class="col-sm-6">
                            	<p><?=$address?></p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Email: </label>
                            <div class="col-sm-6">
                            	<p><?=$email?></p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Số lượng: </label>
                            <div class="col-sm-6">
                            	<p><?=$sl?></p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Ghi chú: </label>
                            <div class="col-sm-6">
                            	<p><?=$note?></p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Ngày đặt: </label>
                            <div class="col-sm-6">
                            	<p><?=date('d-m-Y',strtotime($add_date))?></p>
                            </div>
                          </div>
                         <div class="form-group">
                            <label class="col-sm-2 control-label">Sản phẩm: </label>
                            <div class="col-sm-6">
                            	<?php 
									$sanpham = $this->product->getsp($code);
								?>
                                <img src="<?=PATH_HINH_THUMB.'/'.$sanpham['avatar']?>" width="100">
                            	<p><strong>Tên sản phẩm: </strong><?=$sanpham['title']?></p>
                                <p><strong>Mã sản phẩm: </strong><?=$sanpham['code']?></p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Status: </label>
                            <div class="col-sm-1">
                              	<label>
                               <input type="radio" value="1" name="status" <?=$status==1?"checked='checked'":""?> />
                                Đã xem
                                </label>
                                <label>
                                <input type="radio" value="0" name="status" <?=$status==0?"checked='checked'":""?>/>
                                 Chưa xem
                                 </label>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                              <button type="submit" class="btn btn-default">Cập nhật</button>
                            </div>
                          </div>
                    </div><!-- /.box-body -->
                    </form>
                </div>
            </section>
          </div><!-- /.row (main row) -->

        </section><!-- /.content -->
      </div><!-- /.content-wrapper -->
</div>
<script type="text/javascript" src="access/js/form.js"></script>
