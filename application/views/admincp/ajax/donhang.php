<script>
 $(window).load(function(){
      $('.bs-example-modal-lg').modal('show');
	  		 var d_tar = $(this).attr('data-target'); 
			 var modal_he = $(d_tar).find('.modal-dialog .modal-content').height(); 
			 var win_height = $(window).height();
			 var marr = win_height - modal_he;
			 $('#modal-dialog').css('margin-top',marr/5);
    });
</script>
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel">Đơn hàng của
          <?=$user['name']?>
        </h4>
      </div>
      <div class="modal-body">
        <div id="nguoidat" class="inside">
          <p>
          <h2 style="color: red;">Mã đơn hàng:
            <?= $user['code']; ?>
            <span>(Ngày đặt:
            <?=date("d/m/Y H:i A",strtotime($user['add_date']));?>
            )</span></h2>
          <form action="<?= PATH_FOLDER_ADMIN."/"."dathang/edit"?>/<?=$user['id']?>" method="POST">
            <input name="code" type="hidden" value="<?= $user['code']; ?>"/>
            <input name="name" type="hidden" value="<?= $user['name']; ?>"/>
            <input name="email" type="hidden" value="<?= $user['email']; ?>"/>
            Tình trạng:
            <select name="status" style="border: 1px solid #ccc;padding: 2px;border-radius: 3px;">
              <option value="0" <?= $user['status']==0?"selected":"";?>>Chưa phân loại</option>
              <option value="1" <?= $user['status']==1?"selected":"";?>>Đang giao hàng</option>
              <option value="2" <?= $user['status']==2?"selected":"";?>>Hoàn tất</option>
            </select>
            <label>
              <input type="checkbox" value="1" name="send_email"/>
              Gửi email thông báo</label>
            <button type="submit">Cập nhật</button>
          </form>
          </p>
          <p><span class="color_red">Người đặt hàng:</span>
            <?=  $user['name'] ?>
          </p>
          <p><span class="color_red">Địa chỉ: </span><strong>
            <?=  $user['address'] ?>
            </strong></p>
          <p><span class="color_red">Email: </span><strong>
            <?=  $user['email'] ?>
            </strong> - Số điện thoại: <strong>
            <?=  $user['phone'] ?>
            </strong></p>
        </div>
       <div id="donhang">
          <table width="100%" border="0">
            <tr>
              <td colspan="5"><span class="color_red">Hình thức thanh toán:</span><strong>
                <?php
                                                                            switch ($user['httt']) {
                                                                                case 1:echo "Thanh toán khi nhận hàng";
                                                                                    break;
                                                                                case 2:echo "Chuyển khoản ngân hàng";
                                                                                    break;
                                                                                
                                                          default: echo "Chưa xác định";
                                                          }
                                                      ?>
                </strong></td>
              <td align="right"></td>
            </tr>
            <tr>
              <td height="15" colspan="5"><hr /></td>
            </tr>
            <?php
                                            foreach ($donhang as $row) {
                                                $product    = $this->product->getList($row['id_product']);
                                    
                                                $img        = PATH_HINH_THUMB."/".$product['avatar'];
                                               
                                                ?>
            <tr>
              <td width="20%"><img style="border: 1px solid #ccc; padding: 3px;" width="100" src="<?=base_url($img);?>" align="top"/> &nbsp;
               
               </td>
               <td width="20%"> <?= $product['title']; ?></td>
              <td class="bold" width="10%">
              (SL:
                <?= $row['sl'] ?>
                )</td>
              <td align="right" width="20%" class="bold"><?= number_format($product['gia'], 0, '.', '.'); ?>
                VND </td>
            </tr>
            <?php } ?>
            <tr>
              <td height="15" colspan="2">Ghi chú: <?php echo $user['note'];?></td>
              <td colspan="2" align="right" class="bold">Số tiền phải thanh toán:</td>
              <td colspan="1" align="right" class="color_red"><?php echo number_format(($user['total']), 0, '.', '.'); ?> VND </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
      </div>