<div class="page-title ui-widget-content ui-corner-all">
    <div class="float-left">
        <h1><b><?php echo $title_header; ?></b></h1>         
    </div>

    <div class="button float-right">
        <a onclick="questionDelAll();" class="btn ui-state-default"><span class="ui-icon ui-icon-circle-plus"></span>Xóa chọn</a>
        <a href="<?php echo base_url().PATH_FOLDER_ADMIN; ?>/user/add_quantri"  class="btn ui-state-default"><span class="ui-icon ui-icon-circle-plus"></span>Thêm mới</a>
    </div>
    <div class="clearfix"></div>
    <div class="other">  

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
        <div class="hastable">
            <form name="frmList" class="pager-form" method="post" action="<?php echo base_url().PATH_FOLDER_ADMIN; ?>/user" id="frmList">
                <table id="sort-table"> 
                    <thead> 
                        <tr>
                            <th style="text-align: center;width: 1%;"><input type="checkbox" value="check_none" onclick="javascript: selectAll(this.checked);" class="submit"/></th>
                            <th align="left">Họ tên</th>
                            
                            <th style="text-align: center; width: 10%;">Ngày đăng kí</th>
                            <th style="text-align: center; width: 10%;">Tình trạng(Bật/Tắt)</th> 
                            <th style="width:70px; text-align: center;">Sửa | Xóa</th> 
                        </tr> 
                    </thead> 
                    <tbody> 
                        <?php
                        if(isset($list)){
                        $i=1;    
                        foreach ($list as $row) {
                            //$results = $this->danhmuc->displayByPrent($row['id']);                            
                            //if($row['name_parent']==NULL) $txt = "Thuộc: danh mục gốc"; else $txt="Thuộc: ".$row['name_parent'];
                            ?>      
                            <tr class="<?=($i%2==0)?"chan":"";?>">
                                <td class="center"><input type="checkbox" value="<?php echo $row['id']; ?>" name="list[]" class="checkbox"/></td> 
                                                           
                                <td class=""><a href="<?php echo base_url().PATH_FOLDER_ADMIN; ?>/user/edit_quantri/<?php echo $row['id']; ?>"><?php echo $row['name'];?></a></td> 
                                                                  
                                <td class="align-center"><?php echo date('d/ m/ Y H:i:s',strtotime($row['add_date']));?></td>
                                <td class="align-center"><img src="<?php echo base_url(); ?>/images/admin/icon/<?php echo $row['status']; ?>.jpg"></td>
                                <td class="align-center">
                                    <a href="<?php echo base_url().PATH_FOLDER_ADMIN; ?>/user/edit_quantri/<?php echo $row['id']; ?>" title="Sửa">
                                        <img src="<?=base_url()?>images/admin/icon/b_edit.png" border="0"/>
                                    </a>                                
                                    &nbsp; | &nbsp;
                                    <a onclick="javascript:questionDel('<?php echo base_url().PATH_FOLDER_ADMIN; ?>/user/del/<?php echo $row['id']; ?>/<?php echo $row['is_admin']; ?>')" title="Xóa">
                                        <img src="<?=base_url()?>images/admin/icon/b_drop.png" border="0"/>
                                    </a>
                                </td>
                            </tr>    
                        <?php $i++;}/*end foreach*/ } //end if?>
                    </tbody>
                </table>
                <input type="hidden" value="1" name="is_admin"/>
            </form>
            <ul class="pagination">
                <?php echo $this->pagination->create_links(); ?>
            </ul>
        </div>  
        <div class="clearfix"></div>
    </div>
</div>