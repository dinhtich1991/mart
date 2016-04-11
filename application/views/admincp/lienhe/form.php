<?php
$avatar = isset($detail['avatar']) ? $detail['avatar'] : "";
$title = isset($detail['title_vn']) ? htmlentities(stripslashes($detail['title_vn']), ENT_QUOTES, "UTF-8") : "";
$sumary = isset($detail['sumary_vn']) ? $detail['sumary_vn'] : "";
$chitiet = isset($detail['detail_vn']) ? $detail['detail_vn'] : "";
$status = isset($detail['status']) ? $detail['status'] : "1";
$ordering = isset($detail['ordering']) ? $detail['ordering'] : $orderingMax;
$description = isset($detail['description']) ? $detail['description'] : "";
$keyword = isset($detail['keyword']) ? $detail['keyword'] : "";
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
                            <label class="col-sm-2 control-label">Tiêu đề</label>
                            <div class="col-sm-6">
                              <input name="title_vn" value="<?= $title; ?>" size="100" />
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Mô tả</label>
                            <div class="col-sm-6">
                               <textarea name="sumary_vn" class="form-control"><?= $sumary; ?></textarea>
                            </div>
                          </div>
                           <div class="form-group">
                            <label class="col-sm-2 control-label">Hình ảnh <br><i>Kích thước: 305 X 200px</i></label>
                            <div class="col-sm-10">
                                <?php
                                    if (is_file($avatar)) {
                                        ?>
                                        <img src="<?= $avatar; ?>" width="100"/><br/>
                                    <?php } ?>
                                    <input type="file" name="userfile" size="20" />                                    
                                    <input name="temp_img" type="hidden" value="<?= $avatar; ?>"/>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Nội dung</label>
                            <div class="col-sm-9">
                               <?= $this->function->display_CKEditor("detail_vn", $chitiet, 400); ?>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Key word</label>
                            <div class="col-sm-6">
                               <textarea name="keyword" class="form-control"><?= $keyword; ?></textarea>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Description</label>
                            <div class="col-sm-6">
                               <textarea name="description" class="form-control"><?= $description; ?></textarea>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Trạng thái</label>
                            <div class="col-sm-6">
                                <div class="radio">
                                  <label class="checkbox-inline">
                                    <input type="radio" name="status" id="optionsRadios1" value="1"  checked>
                                   Hiện
                                  </label>
                                  <label class="checkbox-inline">
                                    <input type="radio" name="status" id="optionsRadios2" value="0">
                                    Ẩn
                                  </label>
                                </div>
                            </div>
                          </div>
                          <div class="form-group text-center">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-upload"></i> Lưu lại</button>
                            <BUTTON onclick="return Question_Cancel('<?= $task_list; ?>');" type="button" class="btn btn-primary">Hủy</BUTTON>                          </div>
                    </div><!-- /.box-body -->
                    </form>
                </div>
            </section>
          </div><!-- /.row (main row) -->

        </section><!-- /.content -->
      </div><!-- /.content-wrapper -->
</div>
<script type="text/javascript" src="access/js/form.js"></script>
