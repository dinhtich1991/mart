<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');
// author:huynhvanduoc
// date:30/05.2012
// Viết xóa xml với php

/*
 <?xml version="1.0" encoding="utf-8"
 ?>
 <cautruc>
 	<thuonghieu id="26" name="Tên thương hiệu">
 		<sanpham id="79" name="Tên sản phẩm">
 			<tieude>
 				Tiêu đề 1
 			<tieude/>
 		</sanpham>
 	</thuonghieu>
 </cautruc>
 */


class CI_lib_xml {
	function writeXML($idthuonghieu, $id, $name, $tieude) {
		$dom = new DOMDocument;
		$dom -> preserveWhiteSpace = false;
		$dom -> formatOutput = true;
		// Xuất định dạng cho đẹp
		$dom -> load("dom.xml");
		$thedocument = $dom -> documentElement;
		$list = $thedocument -> getElementsByTagName('thuonghieu');
		$nodeToRemove = null;
		foreach ($list as $domElement) {
			$attrValue = $domElement -> getAttribute('id');
			if ($attrValue == $idthuonghieu) {
				$new_tag = $domElement -> appendChild($dom -> createElement('sanpham'));
				$new_tag -> setAttributeNode(new DOMAttr('id', $id));
				$new_tag -> setAttributeNode(new DOMAttr('name', $name));
				$new_tag -> appendChild($dom -> createElement('tieude', $tieude));
			}
		}
		//Now remove it.
		if ($nodeToRemove != null)
			$thedocument -> removeChild($nodeToRemove);
		$dom -> save('dom.xml');

		/* Ý tưởng: Thêm một sản phẩm vào trong nút thương hiệu với với tham số truyền vào là id thương hiệu
		 * Thêm 1 nút con vào nút cha với điều kiện là id của nút cha
		 */
	}

	function delXML($idthuonghieu, $idsp) {
		$doc = new DOMDocument;
		$doc -> load("dom.xml");
		$thedocument = $doc -> documentElement;
		//this gives you a list of the messages
		$list = $thedocumen -> getElementsByTagName('thuonghieu');

		$nodeToRemove = null;
		foreach ($list as $domElement) {
			$attrValue = $domElement -> getAttribute('id');
			if ($attrValue == $idthuonghieu) {
				$listSub = $domElement -> getElementsByTagName('sanpham');
				foreach ($listSub as $domElementSub) {
					$attrValueSub = $domElementSub -> getAttribute('id');
					if ($attrValueSub == $idsp) {
						$domElement -> removeChild($domElementSub);
					}
				}
			}
		}
		$doc -> preserveWhiteSpace = false;
		$doc -> formatOutput = true;
		$doc -> save('dom.xml');

		//Ý tưởng: Xóa nút con với điều kiện idCon=A,nằm trong nút cha có idCha=B
	}

	function writeXML_Level1($idthuonghieu, $ten_thuonghieu, $type) {
		$dom = new DOMDocument();
		$dom -> preserveWhiteSpace = false;
		$dom -> formatOutput = true;
		//URL file xml
		$dom -> load("dom.xml");
		// create root nodes
		$resumedata = $dom -> createElement("cautruc");
		//$dom->appendChild($resumedata);
		$new_tag = $dom -> createElement('thuonghieu');
		$new_tag -> setAttributeNode(new DOMAttr('id', $idthuonghieu));
		$new_tag -> setAttributeNode(new DOMAttr('name', $ten_thuonghieu));
		$new_tag -> appendChild($dom -> createElement('type', $type));
		//Het chinh sua
		$dom -> documentElement -> appendChild($new_tag);
		$dom -> save('dom.xml');
		
		// Ý tưởng: Thêm 1 nút nằm trong nút gốc <cautruc>, nút được thêm có các thuộc tính như: id,name
	}
	function delXML_Level_1($id) 
	{
	    $doc = new DOMDocument;
	    $doc->load("dom.xml");
	    $thedocument = $doc->documentElement;
	    //this gives you a list of the messages
	    $list = $thedocument->getElementsByTagName('thuonghieu');
	    //figure out which ones you want -- assign it to a variable (ie: $nodeToRemove )
	    $nodeToRemove = null;
	    foreach ($list as $domElement) {
	        $attrValue = $domElement->getAttribute('id');
	        if ($attrValue == $id) {
	            $nodeToRemove = $domElement; //will only remember last one- but this is just an example :)
	        }
	    }
	    //Now remove it.
	    if ($nodeToRemove != null)
	        $thedocument->removeChild($nodeToRemove);
	    $doc->save('dom.xml'); 
		
		// Ý tưởng: Xóa nút với điều kiện id(thuộc tính) được truyền vào
	}

}

// Class lib-xml
// Location:application/libraries/lib-xml.php
?>