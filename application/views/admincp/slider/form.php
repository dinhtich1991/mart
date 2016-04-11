<?php
$avatar = isset($detail['avatar']) ? $detail['avatar'] : "";
$title = isset($detail['title']) ? htmlentities(stripslashes($detail['title']), ENT_QUOTES, "UTF-8") : "";
$link = isset($detail['link']) ? $detail['link'] : "";
$status = isset($detail['status']) ? $detail['status'] : "1";
$ordering = isset($detail['ordering']) ? $detail['ordering'] : $orderingMax;
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
                            <label class="col-sm-2 control-label">Title: </label>
                            <div class="col-sm-6">
                              <input name="title" value="<?= $title; ?>" size="100" />
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Link</label>
                            <div class="col-sm-6">
                            <input name="link" value="<?= $link; ?>" size="100" />
                            </div>
                          </div>
                           <div class="form-group">
                            <label class="col-sm-2 control-label">Banner <br><i>Kích thước: 1100 X 350px</i></label>
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
                            <label class="col-sm-2 control-label">Trạng thái</label>
                            <div class="col-sm-6">
                                <div class="radio">
                                  <label class="checkbox-inline">
                                    <input type="radio" name="status" id="optionsRadios1" value="1"  checked>
                                   Show
                                  </label>
                                  <label class="checkbox-inline">
                                    <input type="radio" name="status" id="optionsRadios2" value="0">
                                    Hide
                                  </label>
                                </div>
                            </div>
                          </div>
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
</div>
<script type="text/javascript" src="access/js/form.js"></script>
