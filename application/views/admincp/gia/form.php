<?php
$gia = isset($detail['gia']) ? htmlentities(stripslashes($detail['gia']), ENT_QUOTES, "UTF-8") : "";
$status = isset($detail['status']) ? $detail['status'] : "1";
$lang = isset($detail['lang']) ? $detail['lang'] : "";
$ordering = isset($detail['ordering']) ? $detail['ordering'] : $orderingMax;
?>
<script type="text/javascript" src="access/js/jquery.jsajaxfileuploader.js"></script>
<div class="content-wrapper">
  <section class="content-header">
    <h1> <span class="glyphicon glyphicon-list-alt"></span>
      <?= $title_header; ?>
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
                <label class="col-sm-2 control-label">Chọn ngôn ngữ: </label>
                <div class="col-sm-8"> <span style="max-width: 200px;overflow: hidden;float: left;">
                  <select class="form-control" name="lang" >
                    <option value="0">--Chọn ngôn ngữ--</option>
                    <?php $cate = $this->langg->display(100,0);
											foreach($cate as $row){
									 ?>
                    <option <?php if ($lang == $row['lang']) echo "selected='selected'"; ?> value="<?=$row['lang']?>">
                    <?=$row['title']?>
                    </option>
                    <?php } ?>
                  </select>
                  </span> </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">Giá: </label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" name="gia" value="<?=$gia?>">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">Ordering: </label>
                <div class="col-sm-1">
                  <input value="<?=$ordering?>" type="text" class="form-control" name='ordering'/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">Status: </label>
                <div class="col-sm-1">
                  <label>
                    <input type="radio" value="1" name="status" <?=$status==1?"checked='checked'":""?> />
                    Show </label>
                  <label>
                    <input type="radio" value="0" name="status" <?=$status==0?"checked='checked'":""?>/>
                    Hide </label>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default">Save</button>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </form>
        </div>
      </section>
    </div>
    <!-- /.row (main row) --> 
    
  </section>
  <!-- /.content --> 
</div>
<!-- /.content-wrapper -->
</div>
<script type="text/javascript" src="access/js/form.js"></script> 
