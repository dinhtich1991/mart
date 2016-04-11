<?php
$title_vn = isset($detail['title']) ? htmlentities(stripslashes($detail['title']), ENT_QUOTES, "UTF-8") : "";
$status = isset($detail['status']) ? $detail['status'] : "1";
$image = isset($detail['image']) && is_file( $detail['image']) ? $detail['image'] : '';
$detail_vn = isset($detail['detail']) ? $detail['detail'] : "";
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
                              <input type="text" class="form-control" name="title" value="<?=$title_vn?>">
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-sm-2 control-label">Detail: </label>
                            <div class="col-sm-10">
                              	<?=$this->function->display_CKEditor('detail',$detail_vn,300);?>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                              <button type="submit" class="btn btn-default">Save</button>
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