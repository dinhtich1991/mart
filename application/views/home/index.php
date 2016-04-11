<div id="homeFeature">
  <!--<form id="srchform" action="search" method="get">
    <ul id="searchHome">
      <li class="srch_rowOne">
        <label for="searchKeyword"><?=$this->lang->line('timkiembds');?></label>
        <input type="text" id="searchKeyword" name="key" required class="helpInput" title="từ khóa" value="" style="width: 100%"/>
      </li>
      <li>
        <ul id="locations">
          <li class="region">
            <select name="loai">
            <option value=""><?=$this->lang->line('text_loai');?></option>
            <?php 
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
        <input type="submit" title="Search" class="btn" value="Search" />
      </li>
    </ul>
  </form>-->
  <div id="featured" class="clearfix">
    <div class="featImg">
    <?php 
	foreach($topduan as $row){
		$photo=$this->martrealm->getTopPhoto($row['id']);
		$cate=$this->martrealm->getCategoryByID($row['id_cate']);
	?>
    <a title="<?=$row['title']?>" href="<?=$cate['tag']?>/<?=$row['tag']?>.html">
    <img border="0" alt="<?=$row['title']?>" src="<?=PATH_HINH_THUMB5.'/'.$photo['images']?>" />
    </a> 
    <?php }?>
     </div>
       <script>
     $(document).ready(function() {
        $('.featProperties li:first-child').addClass('selectedFeature');
    });
     </script>
    <ul class="featProperties">
     <?php 
		foreach($topduan as $ro){
		$pho=$this->martrealm->getTopPhoto($ro['id']);
		$cat=$this->martrealm->getCategoryByID($row['id_cate']);
	 ?>
   
      <li class="">
       <a title="<?=$ro['title']?>" href="<?=$cat['tag']?>/<?=$ro['tag']?>.html"> 
       <img alt="<?=$ro['title']?>" src="<?=PATH_HINH_THUMB3.'/'.$pho['images']?>" /></a>
        <h2><a href="<?=$cat['tag']?>/<?=$ro['tag']?>.html">
		<?=$this->function->cut_string($ro['title'],35);?></a></h2>
        <h3><?=$ro['diachi']?></h3>
      </li>
      <?php }?>
    </ul>
    
  </div>
  <script type="text/javascript" language="javascript">
                $(document).ready(function() {
                    homePage.loadFeatures();
                });
                </script> 
  <div id="mb-featured">
    <div id="sync1" class="owl-carousel">
    		<?php 
			foreach($topduan as $row){
				$photo=$this->martrealm->getTopPhoto($row['id']);
				$cate=$this->martrealm->getCategoryByID($row['id_cate']);
			?>
                <div class="item">
                  <img src="<?=PATH_HINH_THUMB4.'/'.$photo['images']?>" alt="<?=$row['title']?>">
                </div>
               <?php }?>
              </div>

              <div id="sync2" class="owl-carousel">
              <?php 
				foreach($topduan as $row){
					$photo=$this->martrealm->getTopPhoto($row['id']);
					$cate=$this->martrealm->getCategoryByID($row['id_cate']);
				?>
                <div class="item" >
                  <a href="<?=$cate['tag']?>/<?=$row['tag']?>.html">
                  <img src="<?=PATH_HINH_THUMB4.'/'.$photo['images']?>" alt="<?=$row['title']?>">
                  </a>
                  <h2><a href="<?=$cate['tag']?>/<?=$row['tag']?>.html">
                  <?=$row['title']?>
                  </a></h2>
                  <p><?=$row['diachi']?></p>
                </div>
                <?PHP }?>
              </div>
  </div>
  <script>
    $(document).ready(function() {

      var sync1 = $("#sync1");
      var sync2 = $("#sync2");

      sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 1000,
        navigation: false,
        pagination:true,
        afterAction : syncPosition,
        responsiveRefreshRate : 200,

      });

      sync2.owlCarousel({
        items : 4,
        itemsDesktop      : [1199,4],
        itemsDesktopSmall     : [979,4],
        itemsTablet       : [768,3],
        itemsMobile       : [479,2],
        pagination:false,
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
      });

      function syncPosition(el){
        var current = this.currentItem;
        $("#sync2")
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
          center(current)
        }

      }

      $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
      });

      function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;

        var num = number;
        var found = false;
        for(var i in sync2visible){
          if(num === sync2visible[i]){
            var found = true;
          }
        }

        if(found===false){
          if(num>sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", num - sync2visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync2.trigger("owl.goTo", num);
          }
        } else if(num === sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
          sync2.trigger("owl.goTo", num-1)
        }
      }

    });
    </script>
                
</div>
<div id="home_BDS">
  <div id="galleryView">
    <ul class="ul-gallery bxslider">
    <?php 
	foreach($duannoibat as $row){
	$ca=$this->martrealm->getCategoryByID($row['id_cate']);
	$pt=$this->martrealm->getPhoto($row['id']);
	$hinh=base_url().PATH_HINH_THUMB2.'/'.$pt[0]['images'];
	?>
    
      <li listingID="<?=$row['id']?>" class="item">
        <section class="image-carousel">
          <div class="listing-image" title="<?=$row['title']?>" style="background-image:url(<?=$hinh?>);"></div>
          <button class="left"> Previous </button>
          <button class="right"> Next </button>
          <div class="view-count"> Photo <strong>1</strong> of <span><?=count($pt)?></span> </div>
        </section>
        <div class="listingContent">
          <h2 class="item-title" title="<?=$row['title']?>">
          <a href="<?=$ca['tag']?>/<?=$row['tag']?>.html">
		  <?=$this->function->cut_string($row['title'],50)?></a>
          </h2>
          <h3 class="item-dist" title="<?=$row['diachi']?>"><?=$row['diachi']?></h3>
          <div class="propFeatures">
            <h3 class="item-price"><?=$row['gia']?></h3>
            <ul>
              <li title="<?=$row['sophongngu']?> <?=$this->lang->line('phongngu');?>" class="bdrm"><?=$row['sophongngu']?> <img src="Images/Icons/bedroom.gif" alt="" /></li>
              <li title="<?=$row['sonhatam']?> <?=$this->lang->line('nhatam');?>" class="bthrm"><?=$row['sonhatam']?> <img src="Images/Icons/bathroom.gif" alt="" /></li>
              <li title="<?=$row['sonhadexe']?> <?=$this->lang->line('nhaxe');?>" class="grge"><?=$row['sonhadexe']?> 
              <img src="Images/Icons/garage.gif" alt="" /></li>
            </ul>
          </div>
        </div>
      </li>
      <?php }?>
    </ul>
  </div>
  <script type="text/javascript">

    $(document).ready(function() {

      var owl = $(".bxslider");

      owl.owlCarousel({
                        items: 4, //10 items above 1000px browser width
                        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
                        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
                        itemsTablet: [600, 2], //2 items between 600 and 0;
                        itemsMobile: [480, 1], // itemsMobile disabled - inherit from itemsTablet option
                        autoPlay: true,
                        navigation: false
                    });


    });
    </script>

</div>
<script type="text/javascript">
                    $(function() {
                        listing_ListingSearchResultsGallery.init();
                    });
                    </script>