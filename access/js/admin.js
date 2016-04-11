var admin = {
    addPhoto: function(url) {
        $.ajax({
            type: "GET",
            url: url + "/common/addPhoto",
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
   addHinh: function(url) {
        $.ajax({
            type: "GET",
            url: url + "/common/addHinh",
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
    getImgThumb: function(id_product) {
        $.ajax({
            type: "GET",
            url: PATH_FOLDER_ADMIN + "/product/getImgThumb/" + id_product,
            cache: false,
            beforeSend: function() {
                jQuery("#addPhoto").html('<img src="access/image/loading.gif"/>');
            },
            success: function(b) {
                $('#addPhoto').before(b);
                jQuery("#addPhoto").html("");
            }, error: function() {
                alert("Có lỗi xảy ra. Không load được dữ liệu !");
            }
        });
    },
  	getImgThumb2: function(id_product) {
        $.ajax({
            type: "GET",
            url: PATH_FOLDER_ADMIN + "/trangthietbi/getImgThumb/" + id_product,
            cache: false,
            beforeSend: function() {
                jQuery("#addPhoto").html('<img src="access/image/loading.gif"/>');
            },
            success: function(b) {
                $('#addPhoto').before(b);
                jQuery("#addPhoto").html("");
            }, error: function() {
                alert("Có lỗi xảy ra. Không load được dữ liệu !");
            }
        });
    },
	getImgHinh: function(id_product) {
        $.ajax({
            type: "GET",
            url: PATH_FOLDER_ADMIN + "/photo/getImgThumb/" + id_product,
            cache: false,
            beforeSend: function() {
                jQuery("#addPhoto").html('<img src="access/image/loading.gif"/>');
            },
            success: function(b) {
                $('#addPhoto').before(b);
                jQuery("#addPhoto").html("");
            }, error: function() {
                alert("Có lỗi xảy ra. Không load được dữ liệu !");
            }
        });
    },
    removePhoto: function(id) {
        var img = $("#imageHidden_" + id).val();
        $.ajax({
            type: "POST",
            url: PATH_FOLDER_ADMIN + "/common/delPhoto",
            data: {img: img},
            cache: false,
            beforeSend: function() {
                //jQuery("#addPhoto").html('<b style="color:#fff;">Loading...<img src="access/image/ajax-loader.gif" alt="Đang tải dữ liệu ..." /></b>')
            },
            success: function(b) {
                jQuery("#" + id).hide("600");
                jQuery("#" + id).remove();
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
            action: PATH_FOLDER_ADMIN + '/common/uploadPhoto',
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
	 uploadMulHinh: function(cache) {
        /**
         *@description: Sử dụng cho nút upload
        
         **/
        var btnUpload = $('#upload_' + cache);
        var status = $('#status_' + cache);
        new AjaxUpload(btnUpload, {
            action: PATH_FOLDER_ADMIN + '/common/uploadHinh',
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
    uploadHinh: function() {
        var btnUpload = $('#uploadProduct');
        var status = $('#loadAjax');
        new AjaxUpload(btnUpload, {
            action: PATH_FOLDER_ADMIN+'/common/uploadHinh',
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
                    $("#uploadProduct img").attr("src", response);
                    $("#hiddenProduct").val(response);
                } else {
                    alert("Fail Upload !");
                }
            }

        });
    },
    uploadAdmin: function() {
        var btnUpload = $('#uploadAdmin');
        var status = $('#loadAjax');
        new AjaxUpload(btnUpload, {
            action: PATH_FOLDER_ADMIN+'/common/uploadAdmin',
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
                    $("#uploadAdmin img").attr("src", response);
                    $("#hiddenAdmin").val(response);
                } else {
                    alert("Fail Upload !");
                }
            }

        });
    },
	 uploadIcon: function() {
        var btnUpload = $('#uploadProduct');
        var status = $('#loadAjax');
        new AjaxUpload(btnUpload, {
            action: PATH_FOLDER_ADMIN+'/common/uploadIcon',
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
                    $("#uploadProduct img").attr("src", response);
                    $("#hiddenProduct").val(response);
                } else {
                    alert("Fail Upload !");
                }
            }

        });
    },
	uploadAvatar: function() {
        var btnUpload = $('#uploadProduct');
        var status = $('#loadAjax');
        new AjaxUpload(btnUpload, {
            action: PATH_FOLDER_ADMIN+'/common/uploadAvatar',
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
                    $("#uploadProduct img").attr("src", response);
                    $("#hiddenProduct").val(response);
                } else {
                    alert("Fail Upload !");
                }
            }

        });
    },
   uploadFile: function() {
        /**
         *@description: Sử dụng cho nút upload
         **/
        var btnUpload = $('#uploadFile');
        var status = $('#loadAjax');
        new AjaxUpload(btnUpload, {
            action: PATH_FOLDER_ADMIN + '/common/uploadFile',
            name: 'uploadfile',
            onSubmit: function(file, ext) {
                if (!(ext && /^(mp3)$/.test(ext))) {
                    // extension is not allowed 
                    //status.text('Only JPG, PNG or GIF files are allowed');
                    alert("Only pdf|doc|docx|xlsx files are allowed");
                    return false;
                }
                status.html('<img src="' + IMG_LOADING + '"/>');
            },
            onComplete: function(file, response) {
                //On completion clear the status
                status.text('');
                //Add uploaded file to list
                if (response != "error") {
                    $("#uploadFile").html(response);
                    $("#file").val(response);
                } else {
                    alert("Fail Upload !");
                }
            }

        });
    },
    fillter:function(key){
        window.location=key;
    },
	changeGroup: function(id_city) {
        $.ajax({
            type: "POST",
            url:  PATH_FOLDER_ADMIN + "/item/changeGroup/" + id_city,
            beforeSend: function() {
                $("#ajax-cate").html('<img src="' + IMG_LOADING + '"/>');
            },
            success: function(b) {
                $("#ajax-cate").html(b);
            }
        });
    },
	changeitem: function(id_city) {
		
        $.ajax({
            type: "POST",
            url:  PATH_FOLDER_ADMIN + "/product/changeitem/" + id_city,
            beforeSend: function() {
                $("#item").html('<img src="' + IMG_LOADING + '"/>');
            },
            success: function(b) {
                $("#item").html(b);
            }
        });
    },

};