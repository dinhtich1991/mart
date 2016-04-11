
<ul id="breadcrumb">
  <li><?=$this->lang->line('bandango')?>:</li>
  <li><a href="<?=base_url();?>"><?=$this->lang->line('menu_home');?></a></li>
  <li><a href="<?=$cate['tag']?>.html"><?=$cate['title']?></a></li>
  <li><a href="<?=$this->lang->line('link_loai');?>/<?=$loai['tag']?>.html"><?=$loai['title']?></a></li>
  <li><a><?=$detail['title']?></a></li>
</ul>
<div class="contentGroup">
  <?=$this->load->view('form.search.php')?>
  <div id="content">
    <div id="listingDetail" data-listingid="638592">
      <h1><?=$detail['title']?></h1>
      <h2 class="detailAddress"><?=$detail['diachi']?></h2>
      <div class="propFeatures">
        <h3 id="listingViewDisplayPrice"><?=$detail['gia']?></h3>
        <ul id="detailFeatures">
        </ul>
      </div>
      <div id="detailMedia">
        <div id="mediaContainer">
          <section class="listing-images"> <span class="swipe-icon"></span>
            <div class="listing-images-carousel">
            <?php 
				$i=0;
				$photo=$this->martrealm->getPhoto($detail['id']);
				foreach($photo as $row){
				$i++;
				$hinh=base_url().PATH_HINH_THUMB.'/'.$row['images'];
				$hinh_lager=base_url().PATH_HINH.'/'.$row['images'];
				
			?>
              <div> <a class="listing-image" style="background-image: url(<?=$hinh?>)" href="<?=$hinh_lager?>" rel="photos"></a>
               <span class="photo-enlarge"></span> <span class="photo-count"><?=$i?> of <?=count($photo)?></span> </div>
             <?php }?>
            </div>
            <div class="listing-images-carousel-thumbs">
              <?php 
			  	foreach($photo as $row){
				$small=base_url().PATH_HINH_THUMB3.'/'.$row['images'];
			  ?>
              <div>
                <div class="thumb-image" style="background-image: url(<?=$small?>)"></div>
              </div>
              <?php }?>
            </div>
          </section>
          <section class="listing-images-modal"> <span class="swipe-icon"></span>
            <div class="listing-images-modal-carousel" tabindex="-1" autofocus="true">
            <?php 
				$i=0;
				foreach($photo as $row){
				$i++;
				$hinh=base_url().PATH_HINH_THUMB.'/'.$row['images'];
				$hinh_lager=base_url().PATH_HINH.'/'.$row['images'];
				$class= $i==1 ?"":"carousel-pictures";
				?>
              <div class="<?=$class?>">
              <img src="<?=$hinh_lager?>" alt="" /> 
              <span class="photo-count"><?=$i?> of <?=count($photo)?></span> </div>
			  <?php }?>
              </div>
            <div class="listing-images-modal-carousel-button" tabindex="-1">
              <button type="button" data-role="none" class="slick-prev">Previous</button>
              <button type="button" data-role="none" class="slick-next">Next</button>
              <button type="button" data-role="none" class="slick-play">Play</button>
            </div>
          </section>
        </div>
      </div>
      <div class="listDetailWrapper">
        <div class="left-column">
          <div id="propFeatures">
            <table summary="Property Information" class="tableFeat">
              <thead>
                <tr>
                  <th><?=$this->lang->line('text_31')?></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="internetBody">
                  <div> 
                  	<?=$detail['chitiet']?>
                  </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="featuresOuter">
            <table class="features">
              <tr>
                <td class="name"><?=$this->lang->line('text_32')?></td>
                <td class="value"><?=$detail['kichthuoc']?> m<sup>2</sup></td>
              </tr>
              <tr class="alt">
                <td class="name"><?=$this->lang->line('text_33')?></td>
                <td class="value"><?=$loai['title']?></td>
              </tr>
            </table>
          </div>
          <br />
        </div>
        <div class="right-column">
          <div id="14_pnlRightSidePanelMerged" class="agentInfo">
            <h2><?=$this->lang->line('text_29')?></h2>
            <div class="agentinfoContent">
              <ul class="agentDetail">
              <?php 
			  		$hinh=is_file($detail['avatar'])?$detail['avatar']:"Images/img.png";
			  ?>
                <li class="agentPhoto"> <a href=""> <img src="<?=$hinh?>" alt="" /> </a> </li>
                <li class="agentContent">
                  <h3> <a href="javascript:void(0);"><?=$detail['hoten']?></a> </h3>
                  <dl>
                    <dt class="dLarge"><?=$this->lang->line('text_23')?>:</dt>
                    <dd class="dLarge"><a href="tel:<?=$detail['phone']?>"><?=$detail['phone']?></a></dd>
                  </dl>
                  <div class="agentpages">
                  <a href="mailto:<?=$detail['email']?>"><?=$detail['email']?></a>
                  </div>
                </li>
              </ul>
              <div class="officeDetailInternal">
                <div class="officeName">
                  <h2> <a href="">MARTREAL</a> </h2>
                </div>
                <address>
                <?=$detail['address']?>
                </address>
              </div>
              <form id="add-yeucau">
                <h3><?=$this->lang->line('text_30')?></h3>
                <ul id="askAgent">
                  <li class="frmName">
                    <label for="name"><?=$this->lang->line('text_21')?></label>
                    <input type="text" name="name" />
                  </li>
                  <li class="frmEmail">
                    <label for="email"><?=$this->lang->line('text_24')?></label>
                    <input type="text" name="emailAddress" />
                  </li>
                  <li class="frmPhone">
                    <label for="phone"><?=$this->lang->line('text_23')?></label>
                    <input type="text" name="contactNumber" />
                  </li>
                  <li class="frmEnquiry">
                    <label for="enq"><?=$this->lang->line('text_26')?></label>
                    <textarea name="enquiryText" ></textarea>
                  </li>
                  <li class="frmEnqSend">
                    <button class="btn" type="button" onClick="martreal.add_yeucau();"><?=$this->lang->line('text_28')?></button><br>
                   <span id="ajax-add"></span>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript">
                    $(function() {
                        listing_View.init();
                    });
                    </script> 
  </div>
</div>
