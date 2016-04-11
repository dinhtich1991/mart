<html><head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Domain | Log in</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.4 -->
    <link href="../access/dist/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <!-- Font Awesome Icons -->
     <link href="../access/dist/css/font-awesome.min.css" rel="stylesheet">
    <!-- Theme style -->
    <link href="../access/dist/css/admin.min.css" rel="stylesheet" type="text/css">

  </head>
  <body class="login-page">
    <div class="login-box">
      <div class="login-logo">
        <h1><b>Admin</b>
      </h1></div><!-- /.login-logo -->
      <div class="login-box-body">
                    <?php echo form_open(''); ?>
          <div class="form-group has-feedback">
            <label for="email">Email: </label>
            <input type="text" class="form-control trasparent" name="username" required>
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback trasparent">
            <label for="password">Password: </label>
            <input type="password" class="form-control trasparent" name="password" required>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">      
            </div><!-- /.col -->
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat trasparent" style="color: #000">Sign In</button>
            </div><!-- /.col -->
          </div>
       <?php echo form_close(); ?>


      </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->

        <p class="text-center">Support: support@saigondomain.com</p>
        <p class="text-center">Design by <a href="http://saigondomain.com" target="_blank" style="color: #099">saigondomain.com</a></p>
    <!-- jQuery 2.1.4 -->
 
   
  
</body></html>