<?php
foreach ($thumb as $row):
    $id = $row['id'];
    $img = PATH_HINH_THUMB."/" . $row['images'];
    ?>
    <div class="col-md-2" id="<?= $id; ?>">
    <input name="images[]" 
    value="<?= $img; ?>" type="hidden" id="imageHidden_<?= $id; ?>"/>
    <div class="col-md-12">
        <div id="upload_<?= $id; ?>"><img height="100" src="<?= $img; ?>" /></div><span id="status_<?= $id; ?>"></span>
        <a href="javascript:void(0);" onclick="admin.removePhoto('<?= $id; ?>');">
            <img src="<?= ICON_DEL; ?>"/>
        </a>
    </div>
    </div>
    <script>
        admin.uploadPhoto('<?= $id; ?>');
    </script>
<?php endforeach; ?>