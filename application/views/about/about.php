
<ul id="breadcrumb">
  <li><?=$this->lang->line('bandango')?>:</li>
  <li><a href="<?=base_url();?>"><?=$this->lang->line('menu_home');?></a></li>
  <li><a><?=$this->lang->line('menu_aboutus');?></a></li>
</ul>
<div class="contentGroup">
  <?=$this->load->view('form.search.php')?>
  <div id="content">
    <div id="listingDetail" class="listingDetail">
      <h1><?=$about['title']?></h1>
      <div id="detailMedia">
        <div id="mediaContainer">
          <p><?=$about['detail']?></p>
        </div>
      </div>
    </div>
  </div>
</div>
