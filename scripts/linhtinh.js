// JavaScript Document
var martreal= {
	add_yeucau:function(){
		var params = $("form#add-yeucau").serialize();
        jQuery.ajax({
            type: "post",
            url: "add-yeu-cau",
            cache: false,
            data: params,
            dataType: 'json',
            beforeSend: function() {
                jQuery("#ajax-add").html('<img src=/"img/loading.gif/"/> Please wait...');
            },
            success: function(data) {
                if (data.error_require) {
                    jQuery("#ajax-add").html(data.error_require);
                }else if (data.email_valid) {
                    jQuery("#ajax-add").html(data.email_valid);

                }else if (data.success) {
                    alert(data.success);
                    location.reload();

                } else {
                    alert("Xãu ra lổi !");
                    location.reload();
                }
            }
        });
	},
	add_lienhe:function(){
		var params = $("form#form-contact").serialize();
        jQuery.ajax({
            type: "post",
            url: "add-contact",
            cache: false,
            data: params,
            dataType: 'json',
            beforeSend: function() {
                jQuery("#ajax-contact").html('<img src=/"img/loading.gif/"/> Please wait...');
            },
            success: function(data) {
                if (data.error_require) {
                    jQuery("#ajax-contact").html(data.error_require);
                }else if (data.email_valid) {
                    jQuery("#ajax-contact").html(data.email_valid);

                }else if (data.success) {
                    alert(data.success);
                    location.reload();

                } else {
                    alert("Xãu ra lổi !");
                    location.reload();
                }
            }
        });
	},
	addPhoto: function(url) {
        $.ajax({
            type: "GET",
            url: "add-photo",
            cache: false,
            beforeSend: function() {
                jQuery("#addPhoto").html('<img src="access/image/loading.gif"/>')
            },
            success: function(b) {
                $('#addPhoto').before(b);
                jQuery("#addPhoto").html("");
            }
        });
    },
	uploadPhoto: function(cache) {
        /**
         *@description: Sử dụng cho nút upload
        
         **/
        var btnUpload = $('#upload_' + cache);
        var status = $('#status_' + cache);
        new AjaxUpload(btnUpload, {
            action: 'up-photo',
            name: 'uploadfile',
            onSubmit: function(file, ext) {
                if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                    // extension is not allowed 
                    //status.text('Only JPG, PNG or GIF files are allowed');
                    alert("Only JPG, PNG or GIF files are allowed");
                    return false;
                }
                status.html('<img src="' + IMG_LOADING + '"/>');
            },
            onComplete: function(file, response) {
                //On completion clear the status
                status.text('');
				
                //Add uploaded file to list
                if (response != "error") {
					
                    //alert(response);            
                    $("#upload_" + cache + " img").attr("src", response);
                    $("#imageHidden_" + cache).val(response);
                    $("#avatar_" + cache).val(response);
                } else {
                    //$('<li></li>').appendTo('#list_files').text(file).addClass('error');
                    alert("Fail Upload !");
                }
            }

        });
    },
	
	}