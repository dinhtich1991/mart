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
                        <!--<button onclick="return Question_Update();">Cập nhật vị trí</button>-->
                        <button class="btn btn-danger" onclick="return Question_Delete_All();">Xóa</button>           
                    </div>
            <form name="LISTFORM" id="LISTFORM" method="post" action="<?=$action_form;?>" enctype="multipart/form-data">
                    <div class="box box-primary table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead                        <tr>
                            <td style="text-align: center;" width="2%">
                                <input onclick="javascript: selectAll(this.checked);" type="checkbox" name="checkall"/>
                            </td>
                            <td width="10%">Name</td>
                            <td width="10%">Email</td>
                            <td width="10%">Phone</td>
                            <td width="40%">Message</td>                                                              
                            <td width="7%">Status</td>    
                            <td width="8%">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <?php
                        foreach ($list as $row) {
                            $id = $row['id'];
                            $title = $row['name'];
							$email= $row['email'];
							$phone= $row['phone'];
							$message= $row['message'];
                            $status = $row['status'];
                            $img_status = $status == 1 ? STATUS_1 : STATUS_0;
                            ?>
                            <tr>
                                <td style="text-align: center;"><input  type="checkbox" name="del[]" value="<?= $id; ?>"> </td>
								<td class="left"><?= $title; ?></td>
								<td class="left"><?= $email; ?></td>
                                <td class="left"><?= $phone; ?></td>
                                <td class="left"><?= $message; ?></td>
                                <td class="center"><img id="status" status="<?= $status; ?>" onclick="changeStatus(this, '<?= $id; ?>', 'status');" src="<?= $img_status; ?>"/></td>
                                <td>
                                 <div class="col-1">  <a class="deg360" data-toggle="modal" data-target=".bs-example-modal-lg<?=$id?>">
                  <i class="glyphicon glyphicon-eye-open"></i></a></div>
                                 <div class="col-1"><a onclick="Question_Delete('<?= $task_del; ?>/<?= $id; ?>');" class='deg360' data-id=''><i class='fa fa-trash-o'></i></a></div>  
                                 </td>
                            </tr>
                        <?php } ?>
                    </tbody>
</table>
                    </div>
                    </form>
                </section>
            </div><!-- /.row  -->
           </div> <!--/.content-->
      </div><!-- /.content-wrapper -->  
<?php foreach($list as $row){
							$id = $row['id'];
                            $title = $row['name'];
							$phone= $row['phone'];
							$message= $row['message'];
							$email= $row['email'];
							$add_date=date('d-m-Y',strtotime($row['add_date']));
	
	?>
<div class="modal fade bs-example-modal-lg<?=$id?>" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel">Yêu cầu tư vấn của
          <?=$title?>
        </h4>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
                            <thead                        <tr>
                            <td width="15%">Name</td>
                            <td width="13%">Phone</td>                                                                                          
                            <td width="12%">Email</td>    
                            <td width="15%">Date</td>
                            <td width="40%">Message</td> 
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td width="15%"><?=$title?></td>
                            <td width="13%"><?=$phone?></td>                                                                                          
                            <td width="12%"><?=$email?></td>    
                            <td width="15%"><?=$add_date?></td>
                            <td width="40%"><?=$message?></td> 
                        </tr>
                    </tbody>
                    </table>
       </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
      </div>
    </div>
  </div>
</div>
<?php }?>
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