<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <?php
        $config = $this->configm->getConfig();
        ?>
        <base href="<?= base_url(); ?>"/>
        <meta http-equiv="content-type" content="text/html" charset="utf-8"/>
        <title>
            <?= isset($title_header) ? $title_header : $config['title_web']; ?>
        </title>
        <meta content="index, follow" name="robots"/>
        <meta name="description" content="<?= isset($metaDescription) ? $metaDescription : $config['meta_description']; ?>" />
        <meta name="keywords" content="<?= (isset($metaKeyword) && $metaKeyword != "") ? $metaKeyword : $config['meta_keywords']; ?>" />
        <link rel="canonical" href="<?= current_url(); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
                <link href="css/jquery.bxslider.css" type="text/css" rel="Stylesheet" media="screen" />
                <link href="css/bootstrap.min.css" type="text/css" rel="Stylesheet" media="screen" />
                <link href="css/owl.carousel.css" type="text/css" rel="Stylesheet" media="screen" />
                <link href="css/owl.theme.css" type="text/css" rel="Stylesheet" media="screen" />
                <link href="css/owl.transitions.css" type="text/css" rel="Stylesheet" media="screen" />
                <link href="css/harcourts.css" type="text/css" rel="Stylesheet" media="screen" />
                <link rel="stylesheet" type="text/css" href="css/custom.css"/>
                <script src="scripts/jquery.bxslider.js" type="text/javascript"></script>
                <script src="scripts/owl.carousel.js" type="text/javascript"></script>
                <script src="scripts/script.js" type="text/javascript"></script>
                <script src="scripts/harcourts.js" type="text/javascript"></script>
                <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
                <script src='access/js/admin.js' type="text/javascript" language="javascript"></script>
                <script type="text/javascript" src="scripts/linhtinh.js"></script>
                <script>
                    var PATH_FOLDER_ADMIN = '<?= PATH_FOLDER_ADMIN; ?>';
                    var IMG_LOADING = '<?= IMG_LOADING; ?>';
                </script>
                </head>
                <body class="<?= $style ?>">
                    <div class="pageWrap">
                        <div id="page">
                            <div id="header" class="clearfix"> 
                                <a id="logo" class="btn" title="<?= $config['name_company'] ?>" href="<?= base_url(); ?>"> 
                                    <img src="Images/logo.png"></a>
                                <a class="btn-dt" href="dang-tin.html"><?= $this->lang->line('dangtin') ?> <p><?= $this->lang->line('text_36') ?></p></a>

                                <ul class="language">

                                    <li>
                                        <a href="<?= base_url('en'); ?>" class="<?= $lang == "en" ? "active" : "" ?>"><img src="Images/en.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="<?= base_url('vi'); ?>" class="<?= $lang == "vi" ? "active" : "" ?>"><img src="Images/vn.png" alt="" /></a>
                                    </li>
                                </ul>
                                <div class="headerNavWrap clearfix">
                                    <a id="nav-toggle" href="#"><span></span></a>
                                    <ul id="catnav" class="clearfix">
                                        <li class="home"><a title="<?= $this->lang->line('menu_home'); ?>" class="btn <?= $active == "" || $active == "home" ? 'active' : '' ?>" href="<?= base_url(); ?>"><?= $this->lang->line('menu_home'); ?></a></li>
                                        <li>
                                            <a class="btn <?= $active == "about" ? 'active' : '' ?>" href="<?= $this->lang->line('link_aboutus'); ?>.html" title="<?= $this->lang->line('menu_aboutus'); ?>">
                                                <?= $this->lang->line('menu_aboutus'); ?>
                                            </a>
                                        </li>
                                        <?php
                                        $danhmuc = $this->martrealm->getCategory($lang);
                                        foreach ($danhmuc as $row) {
                                            ?>
                                            <li><a class="btn <?= $active == $row['tag'] ? 'active' : '' ?>" href="<?= base_url($row['tag']) ?>.html" title="<?= $row['title'] ?>"><?= $row['title'] ?></a></li>
                                        <?php } ?>
                                        <li><a class="btn <?= $active == "tuvan" ? 'active' : '' ?>" href="<?= $this->lang->line('link_tuvan'); ?>.html" title="<?= $this->lang->line('menu_tuvan'); ?>">
                                                <?= $this->lang->line('menu_tuvan'); ?></a></li>
                                        <li><a class="btn <?= $active == "lienhe" ? 'active' : '' ?>" href="<?= $this->lang->line('link_contact'); ?>.html" title="<?= $this->lang->line('menu_contact'); ?>">
                                                <?= $this->lang->line('menu_contact'); ?></a></li>
                                    </ul>
                                </div>
                            </div>
