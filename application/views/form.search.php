<div id="leftCol" class="clearfix">
  <!--<form id="srchform" class="residential clearfix" action="search" method="get">
    <ul class="leftColSearch">
      <li>
        <input type="text" id="searchKeyword" name="key" class="helpInput" required title="từ khóa" value="" />
      </li>
      <li>
        <ul id="locations">
          <li class="region">
            <select name="loai">
            <option value=""><?=$this->lang->line('text_loai');?></option>
            <?php 
			$adv =$this->martrealm->getADV($lang);
				$getLoai=$this->martrealm->getLoai($lang);
				foreach($getLoai as $row){
			?>
              <option value="<?=$row['id']?>"><?=$row['title']?></option>
             <?php }?>
            </select>
          </li>
          <li class="town">
            <select name="quan">
            <option value=""><?=$this->lang->line('text_quan');?></option>
            	<?php 
				$getQuan=$this->martrealm->getQuan($lang);
				foreach($getQuan as $value){
				?>
              <option value="<?=$value['id']?>"><?=$value['name']?></option>
              <?php } ?>
            </select>
          </li>
          <li class="suburb">
            <select name="danhmuc">
            <option value=""><?=$this->lang->line('text_danhmuc');?></option>
            <?php 
				$getCategory=$this->martrealm->getCategory($lang);
				foreach($getCategory as $cate){
			?>
              <option value="<?=$cate['id']?>"><?=$cate['title']?></option>
              <?php }?>
            </select>
          </li>
        </ul>
      </li>
      <li id="priceDropDowns" minMaxDropDowns="true" class="searchFilter">
      <?php 
	  $getGia=$this->martrealm->getGia($lang);
	  ?>
        <label for="selectPriceMin"><?=$this->lang->line('text_gia');?>:</label>
        <select id="selectPriceMin" name="gia">
          <option value=""><?=$this->lang->line('text_gia');?></option>
          <?php 
		  	foreach($getGia as $gia){
		  ?>
          <option value="<?=$gia['id']?>"><?=$gia['gia']?></option>
          <?php }?>
          
        </select>
      </li>
      <li minMaxDropDowns="true" class="searchFilter">
        <label for="selectBedMin"><?=$this->lang->line('text_phong');?>:</label>
        <select id="selectBedMin" name="minbed">
          <option value=""><?=$this->lang->line('text_chon');?></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <span>-</span>
        <select class="filterMax" id="selectBedMax" name="maxbed">
          <option value=""><?=$this->lang->line('text_chon');?></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </li>
      <li class="searchButton">
        <input type="submit" title="Search" class="btn" value="<?=$this->lang->line('text_33')?>" />
      </li>
    </ul>
  </form>-->
  <?php 
  	if(count($adv)>0){
  ?>
  <div id="leftSideBanner" class="clearfix">
    <ul id="banners">
      <?php 
							
							foreach($adv as $row){
						?>
      <li> <a target="_blank" href="<?=$row['link']?>"> <img alt="<?=$row['title']?>" src="<?=$row['images']?>" /> </a> </li>
      <?php }?>
    </ul>
  </div>
  <?php }?>
</div>
