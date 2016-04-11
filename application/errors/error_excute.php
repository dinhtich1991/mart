<style>
    .box_error{
        padding:10px 0px 0 10px;
    }
    .box_error .title{
        color: red;
        font-style:italic;
        font-size: 16px;
        font-weight: bold;
    }
    .box_error .msg{
        color: #333;
        font-size: 14px;
    }
    .box_error a{
        color: blue;
        font-size: 14px;
    }
    .box_error a:hover{
        color: orange;
}
</style>
<div id="sh_content">
    <div class="main-box-title"><?php echo $name; ?></div>
    <div class="clear"></div>
    <div class="box_error">
        <div class="title"><?php echo $title;?></div>
        <div class="clear_10"></div>
        <div class="msg"><?php echo $msg; ?></div>
    </div>
</div>
