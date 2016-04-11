 <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
           <span class="glyphicon glyphicon-list-alt"><a href="<?= $task_list; ?>"><?= $title_header; ?>(Total:<?= $total_rows; ?>)</a></span>
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
                        <button class="btn btn-danger" onclick="return Question_Delete_All();">Del</button>           
                        <a href="<?= $task_add; ?>"><button class="btn btn-primary">Add new</button></a>
                    </div>
            <form name="LISTFORM" id="LISTFORM" method="post" action="<?=$action_form;?>" enctype="multipart/form-data">
                    <div class="box box-primary table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                <th width="2%" style="text-align: center;">
                                <input onclick="javascript: selectAll(this.checked);" type="checkbox" name="checkall"/>
                                </th>
                                    <th width="20%">User name</th>
                                    <th width="20%">Full name</th>
                                    <th width="20%">Registration Date</th>
                                    <th width="7%">Status</th>
                                    <th width="5%">Action</th>
                                </tr>
                            </thead>
                            <tbody id="content">
                                     <?php
                                        foreach ($list as $row) {
                                            $name         = $row['name'];
                                            $user         = $row['username'];
                                            $id           = $row['id'];
                                            $date         = date("d-m-Y H:i",strtotime($row['add_date']));
                                            $status       = $row['status'];
                                            $img_status   = $status == 1 ? STATUS_1 : STATUS_0;
                                            $ordering     = $row['ordering'];
                                    ?>
                                        <tr>
                                            <td> <input  type="checkbox" name="del[]" value="<?= $id; ?>"></td>
                                            <td><?=$user?></td>
                                            <td><?=$name?></td>
                                            <td><?=$date?></td>
                                            <td>
                                            <img id="status" status="<?=$status;?>" onclick="changeStatus(this,'<?= $id; ?>','status');" src="<?= $img_status; ?>" />
                                            </td>
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
<script type="text/javascript">
    function filter() {
        var url = '<?= $task_serach; ?>';
        var filter_name = $('input[name=\'filter_name\']').attr('value');
        if (filter_name) {
            url += '?filter_name=' + encodeURIComponent(filter_name);
            location = url;
        }
    }
    function callback() {
        location = '<?= $task_list; ?>';
    }
</script>