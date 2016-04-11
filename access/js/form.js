var the_form	= window.document.LISTFORM;
var filter_form	= window.document.FILTERFORM;
setTimeout('disableMessage()',1500);	 // Tắt thông báo	


function showme(the_url) {
    width	= 800;
    height	= 600;
    left_val	= (screen.width - width)/2;
    top_val	= (screen.height - height)/2 - 30;
    if (top_val < 0){
        top_val	= 0;
    }
		
    window.open(the_url, "Nội dung", "menubar=no, toolbar=no, scrollbars=yes, resizable=yes, width="+ width +", height="+ height +", top="+ top_val +", left="+ left_val);
}
		
function submit_list(flag) {
    if (selected_item()){
        the_form.factive.value = flag;
        the_form.submit();
    }
}

function updateForm(the_url) {
    if (selected_item()){	
        the_form.action = the_url;
        the_form.submit();
    }
}
	
function updateForm2(the_url) {
    the_form.action = the_url;
    the_form.submit();
}

function delete_list(the_url) {
    if (selected_item()){
        question = confirm("{L_DEL_CONFIRM}");
        if (question != "0"){
            the_form.action = the_url;
            the_form.submit();
        }
    }
}   
function select_list(the_value,the_list){
    var option_count = the_list.options.length;	
    for (i=0;i<option_count;i++){
        if (the_value==the_list.options[i].value){
            the_list.options[i].selected=true;
            break;
        }
    }
}

function selected_item(){
    var name_count = the_form.length;
		
    for (i=0;i<name_count;i++){
        if (the_form.elements[i].checked){
            //window.location.href = '';\
            updateForm2('module/sanbds/action/update.php?mode=update_status');
            return true;
        }
    }
			
    alert('Chọn bài viết');
    return false;
}
/**
 * Chọn tất cả
 */
function selectAll(status) {
    for (i = 0; i < document.LISTFORM.length; i++) {
        document.LISTFORM.elements[i].checked = status;
    }
} 
/**
 * Hỏi cập nhật hay không
 */
function Question_Update(){
    var r =confirm('Bạn có muốn cập nhật không ?');
    if(r){
        $('#LISTFORM').submit();
    }
    return false;
}

function _apply(action){
    $("#form").attr("action",action);
    $('#form').submit();
}
function check_input(){
    return true;
}

/**
 * Hỏi xóa hay không
 */
function Question_Delete(url){
    var r =confirm('Bạn có muốn xóa không ?');
    if(r){
        window.location=url;
    }
    return false;
}

function Question_Delete_All(){
    
    var id = $('[name="del[]"]:checked');
    if(id.length==0) {
        alert('Vui lòng chọn dữ liệu cần xóa !');
        return false;
    }else{
        var r =confirm('Bạn có muốn xóa không ?');
        if(r){        
            $('#LISTFORM').submit();
        }else return false;
    }
    return false;
}
function Question_Cancel(url){
    var r =confirm('Bạn có muốn hủy bỏ không ?');
    if(r) {
        window.location=url;
    }    
    return false;
}
function disableMessage(){
    $("#messages").fadeOut(100);
}

$('input[name=\'filter_name\']').keypress(function(event) {
    if ( event.which == 13 ) {
        filter();
    }
});

/*giá*/
function changePriceText(this_,id, value, format){
   
    if(format){    
        if (!value.match(/[^0-9 ]/g)) {
           //this.value = this.value.replace(/[^a-zA-Z0-9 ]/g, '');
           formatCurrency(id, value);
        }else{
            alert("Chỉ chấp nhận kiểu số từ 0-9");
            $(this_).val("");
            formatCurrency(id, "");
        }
    }else{
        formatCurrency(id, value);
    }
   
    
    //jQuery('.plan_eff').keyup(function () {     
    
//});
    //if(parseInt(value) > 0) $("#" + id).css("display", "block");
    //else $("#" + id).css("display", "none");
}
function formatCurrency(div_id, str_number){
    $("#"+div_id).html(addCommas(str_number));
} 
function addCommas(nStr){
    nStr += '';
    x = nStr.split(',');
    x1 = x[0];
    x2 = "";
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
} 
