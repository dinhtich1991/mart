<?php 
$duannoibat=$this->martrealm->getDuAnNoiBat($lang);
?>
<?php 
if(count($duannoibat)>0){
	$anh=$this->martrealm->getTopPhoto($duannoibat[0]['id']);
$cates=$this->martrealm->getCategoryByID($duannoibat[0]['id']);
?>
<div id="landing">
                        <div class="landingInto">
                            <div class="introBanner">
                        <img src="<?=PATH_HINH_THUMB4.'/'.$anh['images']?>" alt="<?=$duannoibat[0]['title']?>" />
                            </div>
                        </div>
                        <div class="mediaFeatures">
                            <ul>
                                <li class="last">
                                    <h2><?=$this->lang->line('duannoibat')?></h2>
                                    <h3><a href="<?=$cates['tag']?>/<?=$duannoibat[0]['tag']?>.html" target="hctnewsroom"><?=$duannoibat[0]['title']?></a>
                                    </h3>
                                    <p><?=$this->function->cut_string($duannoibat[0]['sumary'],200)?> </p>
                                    <a href="<?=$cates['tag']?>/<?=$duannoibat[0]['tag']?>.html" class="medialink" target="hctnewsroom"><?=$this->lang->line('xemthem');?></a>
                                </li>
                            </ul>
                        </div>
                    </div>
<?php }?>