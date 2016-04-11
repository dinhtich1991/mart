<script type="text/javascript" src="access/js/ajaxupload.3.5.js"></script>

<div class="contentGroup">
  <div id="dangtin" class="dangtin container">
    <form id="form" action="dang-tin.html" class="form-horizontal" method="post" enctype="multipart/form-data" name="LISTFORM">
      <div class="box-body">
      <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_21');?>: </label>
            <div class="col-md-8">
              <input class="form-control" name="hoten" value="" type="text">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_24');?>: </label>
            <div class="col-md-8">
              <input class="form-control" name="email" value="" type="text">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_23');?>: </label>
            <div class="col-md-8">
              <input class="form-control" name="phone" value="" type="text">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_37');?>: </label>
            <div class="col-md-8">
              <input class="form-control" name="address" value="" type="text">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_danhmuc');?>: </label>
            <div class="col-md-8">
              <select name="id_cate" class="form-control" required>
            <option value=""><?=$this->lang->line('text_danhmuc');?></option>
            <?php 
				$getCategory=$this->martrealm->getCategory($lang);
				foreach($getCategory as $cate){
			?>
              <option value="<?=$cate['id']?>"><?=$cate['title']?></option>
              <?php }?>
            </select>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label">
              <?=$this->lang->line('text_loai');?>: </label>
            <div class="col-md-8">
              <select name="id_loai" class="form-control" required>
                <option value="">
                <?=$this->lang->line('text_loai');?>
                </option>
                <?php 
			$adv =$this->martrealm->getADV($lang);
				$getLoai=$this->martrealm->getLoai($lang);
				foreach($getLoai as $row){
			?>
                <option value="<?=$row['id']?>">
                <?=$row['title']?>
                </option>
                <?php }?>
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label">
              <?=$this->lang->line('text_quan');?>
              : </label>
            <div class="col-md-8">
              <select name="quan" class="form-control" required>
                <option value="">
                <?=$this->lang->line('text_quan');?>
                </option>
                <?php 
				$getQuan=$this->martrealm->getQuan($lang);
				foreach($getQuan as $value){
				?>
                <option value="<?=$value['id']?>">
                <?=$value['name']?>
                </option>
                <?php } ?>
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_gia');?>: </label>
            <div class="col-sm-8">
              <?php 
			  $getGia=$this->martrealm->getGia($lang);
			  ?>
				<select name="id_gia" class="form-control" required>
				  <option value=""><?=$this->lang->line('text_gia');?></option>
				  <?php 
					foreach($getGia as $gia){
				  ?>
				  <option value="<?=$gia['id']?>"><?=$gia['gia']?></option>
				  <?php }?>
				  
				</select>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_gia');?>: </label>
            <div class="col-md-8">
              <input class="form-control" name="gia" value="" type="text" required>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="col-sm-2 control-label"><?=$this->lang->line('text_43');?>: </label>
            <div class="col-md-10">
              <input class="form-control" name="title" value="" type="text" required>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="col-sm-2 control-label"><?=$this->lang->line('text_42');?>: </label>
            <div class="col-md-10">
              <textarea name="sumary" class="form-control" rows="4" required></textarea>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_41');?>: </label>
            <div class="col-md-8">
              <input class="form-control" name="sonhatam" value="" type="text">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_40');?>: </label>
            <div class="col-md-8">
              <input class="form-control" name="sophongngu" value="" type="text">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_39');?>: </label>
            <div class="col-md-8">
              <input class="form-control" name="sonhadexe" value="" type="text">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-sm-4 control-label"><?=$this->lang->line('text_32');?>: </label>
            <div class="col-md-8">
              <input class="form-control" name="kichthuoc" value="" type="text">
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="col-sm-2 control-label"><?=$this->lang->line('text_38');?>: </label>
            <div class="col-md-10">
              <input class="form-control" name="diachi" value="" type="text" required >
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label"><?=$this->lang->line('text_31');?>: </label>
          <div class="col-md-10">
            <?=$this->function->display_CK('chitiet')?>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Banner: </label>
          <div class="col-md-10">
            <div id="addPhoto"></div>
            <div class="clearfix"></div>
            <div class="col-md-12"> Hình dự án <br>
              (Size: 1000x750px) <a href="javascript:void(0);" onclick="martreal.addPhoto('<?=base_url();?>');"> <img src="access/image/filemanager/list_add.png"> Add Photo </a> </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="form-group text-center">
          <button type="submit" class="btn-dangtin">ĐĂNG TIN</button>
        </div>
      </div>
    </form>
  </div>
</div>
