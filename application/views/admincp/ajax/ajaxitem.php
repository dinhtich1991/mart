<select class="form-control" name="id_item">
                                    <option value="0">Chọn Item</option>
                                    <?php
											foreach($item as $row){
									 ?>
                                      <option value="<?=$row['id']?>"><?=$row['title']?></option>
                                      <?php } ?>
                                  
                                    </select>