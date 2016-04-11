<div id="content">
    <div class="breadcrumb">
        <br />        
    </div>
    <form id="form" action="" onsubmit="return check_input();" method="post" enctype="multipart/form-data" name="LISTFORM">
        <div class="box">
            <div class="left"></div>
            <div class="right"></div>
            <div class="heading">
                <h1 style="background-image: url('access/image/review.png');">
                    <?= $title; ?>
                </h1>
                <div class="buttons" style="float:right;">
                    <input type="submit" name="save" value="Lưu lại" class="button_v1">                
                    <input onclick="return Question_Cancel('<?=$task_list;?>');" type="button" value="Hủy bỏ" class="button_v1">
                </div>
            </div>
            <div class="content">
                <div id="tabs" class="htabs">
                    <a tab="#tab_general">TỔNG QUAN</a>
                    <a tab="#tab_data">TÙY CHỌN</a>
                </div>

                <div id="tab_general">                   
                    <div id="language1">
                        <table class="form">

                            <tr>
                                <td><span class="required">*</span> Tiêu đề:</td>
                                <td><input name="t_v" value="" size="50" />
                                </td>
                            </tr>

                            <tr>
                                <td>Mô tả tóm tắt:</td>
                                <td><textarea name="intro_v" cols="100" rows="5"></textarea></td>
                            </tr>

                            <tr>
                                <td>Nội dung:</td>
                                <td><?=$this->function->display_CKEditor("contents","",300);?></td>
                            </tr>
                            
                            <tr>
                                <td>Chọn hình</td>
                                <td>
                                    <input type="text" readonly="readonly" onclick="openKCFinder(this,'image')"
                                    value="Click tại đây để chọn hình" style="width:50%;cursor:pointer" />                                    
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
                <div id="tab_data">
                    <table class="form">

                        <tr>
                            <td>Danh mục liên quan:</td>
                            <td>
                                <select name="category">
                                    <option value="0"> --- None --- </option>			
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Hình:</td>
                            <td valign="top">
                                <input type="file" name="file" tabindex="2" size="22px"/>
                            </td>

                        </tr>
                        <tr>
                            <td> Thứ tự:</td>
                            <td><input name="ordering" value="0" size="1" />
                            </td>
                        </tr>

                        <tr>
                            <td> Trạng thái:</td>
                            <td>
                                <label><input type="radio" value="1" name="status" checked="checked" /> Hiển thị </label>
                                <label><input type="radio" value="0" name="status" /> Ẩn</label>
                            </td>
                        </tr>

                    </table>
                </div>


            </div>
        </div>
    </form>
    <script type="text/javascript">
        $.tabs('#tabs a'); 
    </script>
</div>
<script type="text/javascript" src="access/js/form.js"></script>
