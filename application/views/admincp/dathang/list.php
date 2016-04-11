 <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
           <span class="glyphicon glyphicon-list-alt"></span> <?=$title_header;?>(Total:<?= $total_rows; ?>)
          </h1>
        
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
                        <!--<button onclick="return Question_Update();" class="btn btn-info">Cập nhật vị trí</button>-->
                        <button class="btn btn-danger" onclick="return Question_Delete_All();">Xóa</button>           
                        <!--<a href="<?= $task_add; ?>"><button class="btn btn-primary">Thêm mới</button></a>-->
                    </div>
            <form name="LISTFORM" id="LISTFORM" method="post" action="<?=$action_form;?>" enctype="multipart/form-data">
                    <div class="box box-primary table-responsive">
                        <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <td style="text-align: center;" width="2%">
                                <input onclick="javascript: selectAll(this.checked);" type="checkbox" name="checkall"/>
                            </td>
                            <td width="15%">Họ tên</td>
                            <td width="25%">Địa chỉ</td>
                            <td width="15%">Số điện thoại</td>   
                            <td width="15%">Email</td>                        
                            <td class="center" width="15%">Tình trạng</td>    
                            <td class="right" width="10%">Thao tác</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        foreach ($list as $row) {
                            $id = $row['id'];
                            $name = $row['name'];
							$phone = $row['phone'];
							$address = $row['address'];
							$email = $row['email'];
							$code = $row['code'];
                            $status = $row['status'];
                            $img_status = $status == 1 ? STATUS_1 : STATUS_0;
                            ?>
                            <tr>
                                <td style="text-align: center;"><input  type="checkbox" name="del[]" value="<?= $id; ?>"> </td>
                                <td>
                                     <?=$name?>
                                </td>
                                <td>
                                     <?=$address?>
                                </td>
                                <td>
                                     <?=$phone?>
                                </td>
                                <td>
                                     <?=$email?>
                                </td>
                                 <td class="center">
                                 
                                 <?php 
								 	switch($status){
										case 0: echo "Chưa phân loại"; break;
										case 1: echo "Đang giao hàng"; break;
										case 2: echo "Hoàn tất"; break;
										}
								 ?>
                                 </td>
                                <td>
                                 <div class="col-1"> 
                                 <a href="javascript:void(0);" class='deg360' data-id='' onclick="admin.donhang('<?=$id?>','<?=$code?>');">
                                 <i class='fa fa-edit'></i></a></div>
                                 <div class="col-1"><a onclick="Question_Delete('<?= $task_del; ?>/<?= $id; ?>');" class='deg360' data-id=''><i class='fa fa-trash-o'></i></a></div>  
                                 </td>
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
            </div><!-- /.row  -->
           </div> <!--/.content-->
      </div><!-- /.content-wrapper -->  
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
								 $(window).load(function(){
								 
								});
</script>

<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    </div>
  </div>
</div>