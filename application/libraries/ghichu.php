<?php
$string = "Here is a nice text string consisting of eleven words.";
$string = word_limiter($string, 4);
// Returns: Here is a nice… 

$string = highlight_code($string);// Tô đậm chuỗi

// LINK THAM KHẢO : http://codeigniter.com/user_guide/helpers/text_helper.html;
// 

/* Giới hạn kí tự trong chuỗi */
function cut_string($string, $max_length){
	if($string && $max_length){
	   if (strlen($string) > $max_length){
       		$string = substr($string, 0, $max_length);
       		$pos = strrpos($string, " ");
		    if($pos === false) {
               return substr($string, 0, $max_length)."...";
           	}
       		return substr($string, 0, $pos)."...";
   		}else{
       		return $string;
   		}
	}
}

//--------
?>
