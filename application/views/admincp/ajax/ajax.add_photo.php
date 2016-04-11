<div class="col-md-3" id="<?= $cache['_']; ?>">
<input name="images[]" value="" type="hidden" id="imageHidden_<?= $cache['_']; ?>"/>
<div class="col-md-12">
<div style="float:left; width:100px">
    <div id="upload_<?= $cache['_']; ?>" >
    <img style="max-height: 100px;" src="<?= ICON_UPLOAD_PHOTO; ?>"/>
    </div><span id="status_<?= $cache['_']; ?>"></span>
    <a href="javascript:void(0);" onclick="admin.removePhoto('<?= $cache['_']; ?>');">
        <img src="<?= ICON_DEL; ?>"/>
    </a>
 </div>  
</div>
</div>
<script>
    admin.uploadPhoto('<?= $cache['_']; ?>');
</script>