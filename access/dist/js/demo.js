$(document).ready(function(){
	
	var h=$('html').innerHeight();
	h=h+275;
	$('.skin-blue .main-sidebar').css('height',h);
	//alert($('.skin-blue .main-sidebar').height());
	
	$( "[data-toggle='modal']" ).click(function(){
	     var d_tar = $(this).attr('data-target'); 
	     $(d_tar).show();   
	     var modal_he = $(d_tar).find('.modal-dialog .modal-content').height(); 
	     var win_height = $(window).height();
	     var marr = win_height - modal_he;
	     $('.modal-dialog').css('margin-top',marr/4);
     });
    //
    // fix number
    $('#number').keypress(function(e){
		 if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				   return false;
		}
    });
    // show modal
    $('#modal').modal('show');
    $(document).on('click','#load-page', function(){
       window.location.href = ''; 
    });
    // change active
    $('#change-active').change(function(){
        if($(this).val() == 1){
            $('#note-active').html('<span class="cl-blu">Hiển thị danh mục này</span>');
        }else{
             $('#note-active').html('<span class="cl-red">Không hiển thị danh mục này</span>');
        }
    })
    if($('#change-active').val() == 1){
        $('#note-active').html('<span class="cl-blu">Hiển thị danh mục này</span>');
    }else{
         $('#note-active').html('<span class="cl-red">Không hiển thị danh mục này</span>');
    }
    // read image
    
    // add keyword
    $('#btn-addkeyword').click(function(){
       var input_addkeyword = $('#input-addkeyword').val();
       if(input_addkeyword.length < 3){
            alert('Keyword bạn nhập không hợp lệ!');
       }else{
            var keywords = $('#keywords').val();
            // set input keywords
            $('#keywords').val(keywords + input_addkeyword + ',');
            console.log( $('#keywords').val());
            // set val null for input keyword
            $('#input-addkeyword').val('');
            $('#show-keywords').append('<i id="item-keyword" class="pd-l10 cl-blu cur-p">'+input_addkeyword+',</i>');
       }
     });// END add keyword
    // delete keyword
    $(document).on('click', '#item-keyword', function(){
        $(this).fadeOut(200, function(){
           $(this).remove();
           var show_keywords = $('#show-keywords').text();
           $('#keywords').val(show_keywords); 
        });
    }); // END delete keyword
    // fix auto enter in form 
    $('input').on('keypress', function(e){
        return e.keyCode != 13;
    });
    // read image
    $('#input-img').change(function(){
		var file = this.files[0];
		var imagefile = file.type;
		console.log('File: ' + file);
		console.log('imagefile: ' + imagefile);
		var validate = ['image/png', 'image/jpg', 'image/jpeg'];
        var size = Math.round(file.size/1024);
		if(imagefile == validate[0] || imagefile == validate[1] || imagefile==validate[2] && size < 512){
			var reader = new FileReader();
			reader.onload = imageLoaded;
			reader.readAsDataURL(this.files[0]);
            $('#img-size').html('<i class="cl-blu">'+size+'Kb - Ảnh hợp lệ</i>');
			return false;
		}else{
			//$('#img_preview_3d').attr('src', 'css/images/no_image.png');
			$('#img-size').html('<i class="cl-red">File không phù hợp hoặc kích thước quá lớn</i>');
		}
		
	});
    function imageLoaded(e){
		$('#img-upload').attr('src', e.target.result);
	}// end read image
    
    // return message
    function message(key, content, style){
        var alert = '';    
        if(key==1){
            alert = 'info';
        }else if(key==2){
            alert = 'warning';
        }else{
            alert = 'danger';
        }
        return '<div class="alert alert-' + alert + ' alert-dismissible' + style + ' bg-n" role="alert">' +
                  '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                  + content +'</div>';
    }
    
}) // END MAIN


