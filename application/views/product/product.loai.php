<ul id="breadcrumb">
                <li><?=$this->lang->line('bandango')?>:</li>
                <li><a href="<?=base_url();?>"><?=$this->lang->line('menu_home');?></a></li>
                <li><a href="<?=$this->lang->line('link_loai');?>/<?=$loai['tag']?>.html"><?=$loai['title']?></a></li>
            </ul>
            <div class="contentGroup">
                <?=$this->load->view('form.search.php')?>
                <div id="content">
                    <?=$this->load->view('noibat.php')?>
                    <?=$this->load->view('sort.php')?>
                    <div id="searchResults">
                        <div id="searchResultsMapView" class="hidden">
                            <div id="searchResultsMap"></div>
                        </div>
                        <div id="galleryView">
                            <ul>
                            <?php 
							if(count($list)>0){
								$i=0;
							foreach($list as $row){
								$i++;
								$ca=$this->martrealm->getCategoryByID($row['id_cate']);
								$pt=$this->martrealm->getPhoto($row['id']);
								$hinh=base_url().PATH_HINH_THUMB2.'/'.$pt[0]['images'];
							?>
                                <li class="<?=$i%2==0?'alt':''?>" listingID="<?=$row['id']?>">
                                    <section class="image-carousel">
                                        <div class="listing-image" title="<?=$row['title']?>" style="background-image:url(<?=$hinh?>);"></div>
                                        <button class="left">
                                            Previous
                                        </button>
                                        <button class="right">
                                            Next
                                        </button>
                                        <div class="view-count">
                                            Photo <strong>1</strong> of <span><?=count($pt)?></span>
                                        </div>
                                    </section>
                                    <div class="listingContent">
                                        <h2 title="<?=$row['title']?>">
                                        <a href="<?=$ca['tag']?>/<?=$row['tag']?>.html"><?=$row['title']?></a></h2>
                                        <h3 title="<?=$row['diachi']?>"><?=$row['diachi']?></h3>
                                        <div class="propFeatures">
                                            <h3><?=$row['gia']?></h3>
                                            <ul>
                                              <li title="<?=$row['sophongngu']?> <?=$this->lang->line('phongngu');?>" class="bdrm"><?=$row['sophongngu']?> <img src="Images/Icons/bedroom.gif" alt="" /></li>
                                              <li title="<?=$row['sonhatam']?> <?=$this->lang->line('nhatam');?>" class="bthrm"><?=$row['sonhatam']?> <img src="Images/Icons/bathroom.gif" alt="" /></li>
                                              <li title="<?=$row['sonhadexe']?> <?=$this->lang->line('nhaxe');?>" class="grge"><?=$row['sonhadexe']?> 
                                              <img src="Images/Icons/garage.gif" alt="" /></li>
                                            </ul>
                                          </div>
                                    </div>
                                </li>
                                <?php }} else {?>
                                <h2><?=$this->lang->line('updating');?></h2>
                                <?php }?>
                            </ul>
                        </div>
                        <div id="pager">
                            <ul>
                            <?=$this->pagination->create_links();?>
                            </ul>
                        </div>
                    </div>
                    <script type="text/javascript">
                    listing_ListingSearchResultsGallery.init();
                    </script>
                    <!-- Listing Information Provided By -->
                    <link rel="Stylesheet" media="print" href="Css/print.css" />
                    <script type="text/javascript">
                    $(function() {
                        listing_ListingSearchResults.init();
                    });
                    </script>
                </div>
            </div>
           
           