<div id="footer">
    <div class="footerLogos">
        <div>
            <?php
            $doitac = $this->martrealm->getDoiTac();
            foreach ($doitac as $row) {
                ?>
                <a href="<?= $row['link'] ?>" title="<?= $row['title'] ?>" target="_blank">
                    <img src="<?= PATH_HINH_THUMB . '/' . $row['images'] ?>" alt="<?= $row['title'] ?>"></a>
            <?php } ?>
        </div>
    </div>
    <p class="copyrightInfo">
        &copy; 2015 Công ty TNHH MARTREAL
    </p>
</div>
<?php
$config = $this->configm->getConfig();
?>
<div class="m-contact">
    <a id="callnowbutton" href="tel:<?=$config['phone']?>"></a>
    <a id="dangkydi" href="<?=$this->lang->line('link_contact');?>.html" title="<?= $this->lang->line('menu_contact'); ?>"></a>
</div>
</div>
</div>
<!-- Global Footer AU -->

</body>

</html>
