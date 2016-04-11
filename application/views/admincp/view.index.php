<div id="content">
    <div class="breadcrumb">
        <br />

    </div>
    <div class="box">
        <div class="left"></div>
        <div class="right"></div>
        <div class="heading">
            <h1 style="background-image: url('access/image/review.png');">
                <a href="<?=$task_list;?>">Title</a></h1>

            <div class="buttons" style="float:right;">
                <a href="<?=$task_add;?>"><button>Thêm</button></a>
                <button onclick="return Question_Delete();">Xóa chọn</button>
                <button onclick="return Question_Update();">Cập nhật</button>
            </div>

        </div>
        <div class="content">

            <form name="LISTFORM" method="post">
                <input type="hidden" name="factive" value=""/>
                <table class="list">
                    <thead>
                        <tr>
                            <td width="1" style="text-align: center;">
                                <input onclick="javascript: selectAll(this.checked);" type="checkbox" name="checkall"/>
                            </td>
                            <td class="center" width="1">Vị trí</td>
                            <td class="left">Chủ đề</td>
                            <td class="right">Tình trạng</td>
                            <td class="right">Thao tác</td>

                        </tr>
                    </thead>
                    <tbody>

                        <!--Tiêu đề-->
                        <tr class="filter">
                            <td>#</td>
                            <td>#</td>
                            <td><input type="text" value="Nhập từ khóa..." name="filter_name"></td>                            
                            <td class="right"><select name="filter_status">
                                    <option value="*"></option>
                                    <option value="1">Hiện</option>
                                    <option value="0">Ẩn</option>
                                </select>
                            </td>
                            <td align="right"><a class="button_v1" onclick="filter();"><span>Tìm kiếm</span></a></td>
                        </tr>
                        <!--Tiêu đề-->


                        <!--Lặp đoạn này-->
                        <tr>
                            <td style="text-align: center;">
                                <input  type="checkbox" name="ids[]" value="1">
                            </td>
                            <td class="center"><input type="text" name="orders[]" value="1" size="3"/></td>			            
                            <td class="left"><a href="#" title="Edit">Tiêu đề 1</a></td>
                            <td class="right">#</td>
                            <td class="right">[ <a href="#">Chỉnh sửa</a> ] | [ <a href="#">Xóa</a> ]</td>
                        </tr> 
                        <!--Lặp đoạn này-->

                    </tbody>
                </table>
            </form>
            <div class="pagination"><span class="disabled">« </span><span class="current">1</span><a href="?module=catalog&amp;option=news&amp;menu=sub&amp;page=2">2</a><a href="?module=catalog&amp;option=news&amp;menu=sub&amp;page=2">»</a></div>
        </div>
    </div>
</div>
<script type="text/javascript" src="access/js/form.js"></script>
<script type="text/javascript">
    function filter() {
        url = 'index.php?module=catalog&option=news&menu=sub';
	
        var filter_name = $('input[name=\'filter_name\']').attr('value');
	
        if (filter_name) {
            url += '&filter_name=' + encodeURIComponent(filter_name);
        }
	
        var filter_model = $('input[name=\'filter_model\']').attr('value');
	
        if (filter_model) {
            url += '&filter_model=' + encodeURIComponent(filter_model);
        }
	
        var filter_quantity = $('input[name=\'filter_quantity\']').attr('value');
	
        if (filter_quantity) {
            url += '&filter_quantity=' + encodeURIComponent(filter_quantity);
        }
	
        var filter_status = $('select[name=\'filter_status\']').attr('value');
	
        if (filter_status != '*') {
            url += '&filter_status=' + encodeURIComponent(filter_status);
        }	

        location = url;
    }
</script>
