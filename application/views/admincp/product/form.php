<script type="text/javascript" src="<?= base_url('access/js/ajaxupload.3.5.js'); ?>"></script>
<?php
$id = isset($detail['id']) ? $detail['id'] : 0;
$title = isset($detail['title']) ? stripslashes($detail['title']) : "";
$lang = isset($detail['lang']) ? stripslashes($detail['lang']) : "";
$id_cate = isset($detail['id_cate']) ? stripslashes($detail['id_cate']) : "";
$id_loai = isset($detail['id_loai']) ? stripslashes($detail['id_loai']) : "";
$sonhatam = isset($detail['sonhatam']) ? stripslashes($detail['sonhatam']) : "";
$donvi = isset($detail['donvi']) ? stripslashes($detail['donvi']) : "";
$sophongngu = isset($detail['sophongngu']) ? stripslashes($detail['sophongngu']) : "";
$sonhadexe = isset($detail['sonhadexe']) ? stripslashes($detail['sonhadexe']) : "";
$kichthuoc = isset($detail['kichthuoc']) ? stripslashes($detail['kichthuoc']) : "";
$diachi = isset($detail['diachi']) ? stripslashes($detail['diachi']) : "";
$sumary = isset($detail['sumary']) ? stripslashes($detail['sumary']) : "";
$hoten = isset($detail['hoten']) ? stripslashes($detail['hoten']) : "";
$email = isset($detail['email']) ? stripslashes($detail['email']) : "";
$phone = isset($detail['phone']) ? stripslashes($detail['phone']) : "";
$address = isset($detail['address']) ? stripslashes($detail['address']) : "";
$avatar = isset($detail['avatar']) ? $detail['avatar'] : "";
$gia = isset($detail['gia']) ? stripslashes($detail['gia']) : 0;
$id_gia = isset($detail['id_gia']) ? stripslashes($detail['id_gia']) : 0;
$quan = isset($detail['quan']) ? stripslashes($detail['quan']) : 0;
$ordering = isset($detail['ordering']) ? $detail['ordering'] : $orderingMax;
$status = isset($detail['status']) ? $detail['status'] : 1;
$keyword = isset($detail['keyword']) ? $detail['keyword'] : "";
$chitiet = isset($detail['chitiet']) ? $detail['chitiet'] : "";
$description = isset($detail['description']) ? $detail['description'] : "";
?>

<div class="content-wrapper">
<section class="content-header">
  <h1> <span class="glyphicon glyphicon-list-alt"></span>
    <?= $title_header; ?>
  </h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
  <div class="message" id="message"></div>
  <section class="col-md-12">
    <div class="box box-primary">
    <form id="form" action="" class="form-horizontal" onsubmit="return check_input();" method="post" enctype="multipart/form-data" name="LISTFORM">
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
      <div class="box-body">
        <div class="form-group">
          <label class="col-sm-2 control-label">Chọn ngôn ngữ: </label>
          <div class="col-sm-8"> <span style="max-width: 200px;overflow: hidden;float: left;">
            <select class="form-control" name="lang" >
              <option value="0">--Chọn ngôn ngữ--</option>
              <?php $cate = $this->langg->display(100,0);
                                                    foreach($cate as $row){
                                             ?>
              <option <?php if ($lang == $row['lang']) echo "selected='selected'"; ?> value="<?=$row['lang']?>">
              <?=$row['title']?>
              </option>
              <?php } ?>
            </select>
            </span> </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Họ tên: </label>
          <div class="col-md-6">
            <input type="text" class="form-control" name="hoten"  value="<?= $hoten; ?>" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Email: </label>
          <div class="col-md-6">
            <input type="text" class="form-control" name="email"  value="<?= $email; ?>" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Số điện thoại: </label>
          <div class="col-md-6">
            <input type="text" class="form-control" name="phone"  value="<?= $phone; ?>" />
          </div>
        </div>
        <div class="form-group">
                            <label class="col-sm-2 control-label">Ảnh đại diện <br><i>Kích thước: 80 X 100px</i></label>
                            <div class="col-sm-10">
                                <?php
                                    if (is_file($avatar)) {
                                        ?>
                                        <img src="<?= $avatar; ?>" width="100"/><br/>
                                    <?php } ?>
                                    <input type="file" name="userfile" size="20" />                                    
                                    <input name="temp_img" type="hidden" value="<?= $avatar; ?>"/>
                            </div>
                          </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Địa chỉ người đăng: </label>
          <div class="col-md-6">
            <input type="text" class="form-control" name="address"  value="<?= $address; ?>" />
          </div>
        </div>
        
        <div class="form-group">
          <label class="col-sm-2 control-label">Chọn category: </label>
          <div class="col-md-8"> <span style="max-width: 200px;overflow: hidden;float: left;">
            <select class="form-control" name="id_cate">
            <option value="">Chọn danh mục</option>
            <optgroup label="Danh mục tiếng việt">
              <?php $category_vn= $this->category->displaylang('vi');
                                                    foreach($category_vn as $row){
                                             ?>
              <option <?php if ($id_cate == $row['id']) echo "selected='selected'"; ?> value="<?=$row['id']?>">
              <?=$row['title']?>
              </option>
              <?php } ?>
             </optgroup>
             <optgroup label="Danh mục tiếng anh">
              <?php $category_en= $this->category->displaylang('en');
                                                    foreach($category_en as $row){
                                             ?>
              <option <?php if ($id_cate == $row['id']) echo "selected='selected'"; ?> value="<?=$row['id']?>">
              <?=$row['title']?>
              </option>
              <?php } ?>
             </optgroup>
            </select>
            </span> </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Chọn loại: </label>
          <div class="col-md-8"> <span style="max-width: 200px;overflow: hidden;float: left;">
            <select class="form-control" name="id_loai">
              <option value="0">Chọn loại</option>
             <optgroup label="Loại tiếng việt">
              <?php $loai_vn= $this->loai->displaylang('vi');
                                                    foreach($loai_vn as $row){
                                             ?>
              <option <?php if ($id_loai == $row['id']) echo "selected='selected'"; ?> value="<?=$row['id']?>">
              <?=$row['title']?>
              </option>
              <?php } ?>
             </optgroup>
             <optgroup label="Loại tiếng anh">
              <?php $loai_en= $this->loai->displaylang('en');
                                                    foreach($loai_en as $row){
                                             ?>
              <option <?php if ($id_loai == $row['id']) echo "selected='selected'"; ?> value="<?=$row['id']?>">
              <?=$row['title']?>
              </option>
              <?php } ?>
             </optgroup>
            </select>
            </span> </div>
        </div>
         <div class="form-group">
          <label class="col-sm-2 control-label">Chọn quận: </label>
          <div class="col-md-8"> <span style="max-width: 200px;overflow: hidden;float: left;">
            <select class="form-control" name="quan">
              <option value="0">Chọn quận</option>
              <?php $quan_1 = $this->quan->display(100,0);
											foreach($quan_1 as $row){
									 ?>
              <option <?php if ($quan == $row['id']) echo "selected='selected'"; ?> value="<?=$row['id']?>">
              <?=$row['name']?>
              </option>
              <?php } ?>
            </select>
            </span> </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Chọn khoảng giá: </label>
          <div class="col-sm-8"> <span style="max-width: 200px;overflow: hidden;float: left;">
            <select class="form-control" name="id_gia" >
			<option value="0">--Chọn khoảng giá--</option>
            <optgroup label="Giá tiếng việt">
              <?php $gia_vn= $this->gia->displaylang('vi');
                                                    foreach($gia_vn as $row){
                                             ?>
              <option <?php if ($id_gia == $row['id']) echo "selected='selected'"; ?> value="<?=$row['id']?>">
              <?=$row['gia']?>
              </option>
              <?php } ?>
             </optgroup>
             <optgroup label="Giá tiếng anh">
              <?php $gia_en= $this->gia->displaylang('en');
                                                    foreach($gia_en as $row){
                                             ?>
              <option <?php if ($id_gia == $row['id']) echo "selected='selected'"; ?> value="<?=$row['id']?>">
              <?=$row['gia']?>
              </option>
              <?php } ?>
             </optgroup>
            </select>
            </span> </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Tên dự án: </label>
          <div class="col-md-6">
            <input type="text" class="form-control" name="title"  value="<?= $title; ?>" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Giá: </label>
          <div class="col-md-3">
            <input type="text" class="form-control" name="gia"  value="<?= $gia; ?>" /> 
            <span>Đơn vị :</span><input type="text" class="form-control" name="donvi"  value="<?= $donvi; ?>" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Mô tả ngắn: </label>
          <div class="col-md-6">
          	<textarea name="sumary" class="form-control" rows="4"><?= $sumary; ?></textarea>
           
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Số nhà tắm: </label>
          <div class="col-md-3">
            <input type="text" class="form-control" name="sonhatam"  value="<?= $sonhatam; ?>" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Số phòng ngủ: </label>
          <div class="col-md-3">
            <input type="text" class="form-control" name="sophongngu"  value="<?= $sophongngu; ?>" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Nhà để xe: </label>
          <div class="col-md-3">
            <input type="text" class="form-control" name="sonhadexe"  value="<?= $sonhadexe; ?>" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Diện tích: </label>
          <div class="col-md-3">
            <input type="text" class="form-control" name="kichthuoc"  value="<?= $kichthuoc; ?>" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Địa chỉ: </label>
          <div class="col-md-8">
            <input type="text" class="form-control" name="diachi"  value="<?= $diachi; ?>" />
          </div>
        </div>
        <div class="form-group">
         <label class="col-sm-2 control-label">Chi tiết: </label>
          <div class="col-md-10">
            <?=$this->function->display_CK('chitiet',$chitiet);?>
          </div>
        </div>
        <div class="form-group">
                <label class="col-sm-2 control-label">Banner: </label>
                <div class="col-md-10">
                  <div id="addPhoto"></div>
                  <div class="clearfix"></div>
                  <div class="col-md-12">
                    <td>Hình dự án <br>
                      (Size: 1000x750px)</td>
                    <td><a href="javascript:void(0);" onclick="admin.addPhoto('<?= PATH_FOLDER_ADMIN; ?>');"> <img src="<?= ICON_ADD_NEWS; ?>"/> Add Photo </a></td>
                  </div>
                </div>
              </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Description: </label>
          <div class="col-md-8">
            <textarea name="description" class="form-control" rows="4"><?=$description;?>
</textarea>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Keyword: </label>
          <div class="col-md-8">
            <textarea name="keyword" class="form-control" rows="4"><?=$keyword;?>
</textarea>
          </div>
        </div>
        <div class="form-group">         
            <label class="col-sm-2 control-label">Tình trạng</label>
          <div class="col-md-8">
            <label>
              <input type="radio" value="1" name="status" <?=$status==1?"checked='checked'":""?> />
              Hiển thị </label>
            <label>
              <input type="radio" value="0" name="status" <?=$status==0?"checked='checked'":""?>/>
              Ẩn </label>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group">
		<label class="col-sm-2 control-label">Thứ tự</label>	
          <div class="col-md-8">
            <label>
              <input type="text" value="<?=$ordering?>" name="ordering"/>
            </label>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group text-center">
          <button type="submit" class="btn btn-primary"><i class="fa fa-upload"></i> Lưu lại</button>
        </div>
      </div>
      </div>
      <!-- /.box-body -->
    </form>
    </div>
  </section>
  </div>
  <!-- /.row (main row) --> 
  
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper --> 

<script type="text/javascript" src="access/js/form.js"></script> 
<script type="text/javascript">
                        $(document).ready(function () {
							admin.getImgThumb(<?=$id?>);
                        });
		</script>