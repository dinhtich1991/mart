
<div class="content-wrapper"> 
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1> <span class="glyphicon glyphicon-list-alt"></span>
      <?=$title_header;?>
      (Total:
      <?= $total_rows; ?>
      ) </h1>
  </section>
  <div class="content">
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
    <div class="row">
      <div class="message" id="message"></div>
      <section class="col-md-12">
        <div align="right" style="margin-bottom:1px;">
          <button class="btn btn-warning" onclick="return Question_Update();">Cập nhật vị trí</button>
          <button class="btn btn-danger" onclick="return Question_Delete_All();">Xóa</button>
          <a href="<?= $task_add; ?>">
          <button class="btn btn-primary">Thêm mới</button>
          </a> </div>
        <form name="LISTFORM" id="LISTFORM" method="post" action="<?= $action_form; ?>" enctype="multipart/form-data">
          <div class="box box-primary table-responsive">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th width="1%" style="text-align: center;"> <input onclick="javascript: selectAll(this.checked);" type="checkbox" name="checkall"/>
                  </th>
                  <th width="5%">Thứ tự</th>
                  <th width="20%">Tên dự án</th>
                  <th width="15%">Giá</th>
                  <th width="15%">Loại</th>
                  <th width="7%">Ngôn ngữ</th>
                  <th width="7%">Nỗi bật</th>
                  <th width="7%">Trạng thái</th>
                  <th width="7%">Action</th>
                </tr>
                <tr class="filter">
                  <td class="center">#</td>
                  <td class="center">#</td>
                  <td colspan="7">
                  <input type="text" class="form-control" placeholder="Tên sản phẩm" value="<?= isset($filter_name) ? $filter_name : "" ?>" name="filter_name">
                    <button type="button" class="btn btn-info" onclick="filter();">Search</button>
                    <button type="button" class="btn btn-info" onclick="callback();">List</button></td>
                </tr>
              </thead>
              <tbody id="content">
                <?php
                                        foreach ($list as $row) {
                                            $name         = $row['title'];
                                            $id           = $row['id'];
											$gia           = $row['gia'];
											$lang           = $row['lang'];
											$id_cate  = $row['id_cate'];
                                            $status       = $row['status'];
                                            $img_status   = $status == 1 ? STATUS_1 : STATUS_0;
											$is_hot       = $row['is_hot'];
                                            $img_is_hot   = $is_hot == 1 ? STATUS_1 : STATUS_0;
                                            $ordering     = $row['ordering'];
											$cate=$this->category->getList($id_cate);
                                    ?>
                <tr>
                  <td><input  type="checkbox" name="del[]" value="<?= $id; ?>"></td>
                  <td class="center"><input type="text" name="ordering[<?= $id; ?>]" value="<?= $ordering; ?>" size="5"/></td>
                  <td><?=$name?></td>
                  <td><?=$gia?></td>
                  <td><?=$cate['title']?></td>
                  <td><?=$lang?></td>
                  <td><img id="status" status="<?=$is_hot;?>" onclick="changeStatus(this,'<?= $id; ?>','is_hot');" src="<?= $img_is_hot; ?>" /></td>
                  <td><img id="status" status="<?=$status;?>" onclick="changeStatus(this,'<?= $id; ?>','status');" src="<?= $img_status; ?>" /></td>
                  <td><div class="col-1"> <a href='<?= $task_edit; ?>/<?=$id;?>' class='deg360' data-id=''><i class='fa fa-edit'></i></a></div>
                    <div class="col-1"><a onclick="Question_Delete('<?= $task_del; ?>/<?= $id; ?>');" class='deg360' data-id=''><i class='fa fa-trash-o'></i></a></div></td>
                </tr>
                <?php } ?>
              </tbody>
            </table>
          </div>
          <nav class="text-center">
               <ul class="pagination">
                 <?php echo $this->pagination->create_links(); ?>
               </ul>
          </nav>
        </form>
      </section>
    </div>
    <!-- /.row  --> 
  </div>
  <!--/.content--> 
</div>
<!-- /.content-wrapper --> 
<script type="text/javascript" src="access/js/form.js"></script> 
<script type="text/javascript">

                                // id: là id của rows
                                // field : là tên của trường ví dụ: status,is_hot
                                function changeStatus(this_, id, field) {
                                    var status = $(this_).attr("status");
                                    $.ajax({
                                        url: '<?= $task_status; ?>/' + id + '/' + status + '/' + field,
                                        type: "get",
                                        beforeSend: function() {
                                            $(this_).attr("src", '<?= IMG_LOADING; ?>');
                                        },
                                        success: function(data) {
                                            $(this_).attr("status", data)
                                            if (data == 1)
                                                $(this_).attr("src", '<?= STATUS_1; ?>');
                                            else if (data == 0)
                                                $(this_).attr("src", '<?= STATUS_0; ?>');

                                        }
                                    });
                                }
</script> 
<script type="text/javascript">
    function filter() {
        var url = '<?= $task_serach; ?>';
        var filter_name = $('input[name=\'filter_name\']').val();
        if (filter_name) {
            url += '?filter_name=' + encodeURIComponent(filter_name);
            location = url;
        }
    }
    function callback() {
        location = '<?= $task_list; ?>';
    }
</script>