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
                        <button class="btn btn-danger" onclick="return Question_Delete_All();">Del</button>           
                        <a href="<?= $task_add; ?>"><button class="btn btn-primary">Add new</button></a>
                    </div>
            <form name="LISTFORM" id="LISTFORM" method="post" action="<?=$action_form;?>" enctype="multipart/form-data">
                    <div class="box box-primary table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead                        <tr>
                            <td style="text-align: center;">
                                <input onclick="javascript: selectAll(this.checked);" type="checkbox" name="checkall"/>
                            </td>
                            <td class="center" width="50%">Image</td>
                            <td class="left" width="30%">Title</td>                                                                                           
                            <td class="center" width="7%">Status</td>    
                            <td class="right"  width="7%">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <?php
                        foreach ($list as $row) {
                            $id = $row['id'];
                            $title = $row['title'];
                            $status = $row['status'];
                            $avatar = $row['avatar'];
                            $ordering = $row['ordering'];
                            $img_status = $status == 1 ? STATUS_1 : STATUS_0;
                            ?>
                            <tr>
                                <td style="text-align: center;"><input  type="checkbox" name="del[]" value="<?= $id; ?>"> </td>
                                <td class="left" width="50">
                                    <a href="<?= $task_edit; ?>/<?= $id; ?>">
                                        <img src="<?= $avatar; ?>" width="50"/>
                                    </a>
                                </td>
                                <td class="left"><a href="<?= $task_edit; ?>/<?= $id; ?>"><strong><?= $title; ?></strong></a></td>
                                <td class="center"><img id="status" status="<?= $status; ?>" onclick="changeStatus(this, '<?= $id; ?>', 'status');" src="<?= $img_status; ?>"/></td>
                                <td>
                                 <div class="col-1"> <a href='<?= $task_edit; ?>/<?=$id;?>' class='deg360' data-id=''><i class='fa fa-edit'></i></a></div>
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