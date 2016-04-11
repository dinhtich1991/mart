<div id="browseFilter">
                        <div class="filterNavTop">&nbsp;</div>
                        <ul id="navLocation">
                            <li>
                                <h3><a><?=$this->lang->line('text_quan');?></a></h3>
                                <ul>
                                	<?php 
										$getQuan=$this->martrealm->getQuan($lang);
										foreach($getQuan as $value){
										?>
                                    <li>
                                    <a href="<?=$this->lang->line('link_quan');?>/<?=$value['id'].'-'.$this->function->convertHTML($value['name'])?>.html">
                                    <?=$value['name']?>
                                    </a>
                                    </li>
                                    <?php }?>
                                </ul>
                            </li>
                        </ul>
                        <ul id="navPropType">
                            <li>
                                <h3><a><?=$this->lang->line('text_loai');?></a></h3>
                                <ul>
                                <?php 
									$getLoai=$this->martrealm->getLoai($lang);
									foreach($getLoai as $row){
								?>
                                    <li>
                                    <a href="<?=$this->lang->line('link_loai');?>/<?=$row['tag']?>.html">
                                    <?=$row['title']?>
                                    </a>
                                    </li>
                                    <?php }?>
                                </ul>
                            </li>
                        </ul>
                        <div class="resultTotal">
                            <span><?=$totla_row?> <?=$this->lang->line('ketqua')?></span>
                        </div>
                    </div>
                    <div id="browseFilterBase">
                        <div class="sort-types">
                            <ul>
                            <?php 
							$sort=$this->input->get('sort');
							?>
                                <li class="first"><?=$this->lang->line('timkiemtheo')?>:</li>
                                <li class="<?=$sort=="Latest"?"listType":""?> "><a id="Latest" href="<?=current_url()?>?sort=Latest">
								<?=$this->lang->line('tinmoinhat')?></a></li>
                                <li class="<?=$sort=="LowestPrice"?"listType":""?>"><a id="LowestPrice" href="<?=current_url()?>?sort=LowestPrice">
								<?=$this->lang->line('giathap')?></a></li>
                                <li class="last <?=$sort=="HighestPrice"?"listType":""?>">
                                <a id="HighestPrice" href="<?=current_url()?>?sort=HighestPrice">
                                <?=$this->lang->line('giacao')?></a></li>
                            </ul>
                        </div>
                    </div>