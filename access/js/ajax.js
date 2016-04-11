/*
*################################
* ajax.js
* code by Nguyen Quang Hung
* email eureka287@yahoo.com or @gmail.com
*################################
*/
var xmlHttp;
//method return a XMLHttpRequest Object
function getXMLHttpRequest(){
	var xmlHttp=null;
	try{// Firefox, Opera 8.0+, Safari
		xmlHttp = new XMLHttpRequest();
	}catch(e){
		try{ // Internet Explorer
    		xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
   		 }catch(e){
   			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
   		 }
	}
	return xmlHttp;
}
//method show brand's list
function showBrand(){	
	xmlHttp=getXMLHttpRequest();
	if(xmlHttp==null){
		alert("Your browser dose not support Ajax");
		return;
	}
	var url="getBrand.php";
	xmlHttp.onreadystatechange=function(){ 
		if (xmlHttp.readyState==4){ 
			document.getElementById("txtBrand").innerHTML=xmlHttp.responseText;//get id txtBrand to change inner HTML
		}else if(xmlHttp.readyState==3){
			document.getElementById("txtBrand").innerHTML="<img src='loader.gif' />Loading...";
		}
	}
	xmlHttp.open("GET",url,true);	
	xmlHttp.send(null);
}
//method show Phone's list
function showPhone(bid){	
	xmlHttp=getXMLHttpRequest();
	if(xmlHttp==null){
		alert("Your browser dose not support Ajax");
		return;
	}
	var url="module/product/sub/getproduct.php";
			url=url+"?bid="+bid;
	xmlHttp.onreadystatechange=function(){ 
		if (xmlHttp.readyState==4){ 
			document.getElementById("txtPhone").innerHTML=xmlHttp.responseText;
		}else if(xmlHttp.readyState==3){
			document.getElementById("txtPhone").innerHTML="<img src='loader.gif' />Loading...";
		}
	}
	xmlHttp.open("GET",url,true);	
	xmlHttp.send(null);
}
//display phone details
function showDetails(pid){	
	xmlHttp=getXMLHttpRequest();
	if(xmlHttp==null){
		alert("Your browser dose not support Ajax");
		return;
	}
	var url="getDetails.php";
			url=url+"?pid="+pid;
	xmlHttp.onreadystatechange=function(){ 
		if (xmlHttp.readyState==4){ 
			document.getElementById("txtDetails").innerHTML=xmlHttp.responseText;
		}else if(xmlHttp.readyState==3){
			document.getElementById("txtDetails").innerHTML="<img src='loader.gif' />Loading...";
		}
	}
	xmlHttp.open("GET",url,true);	
	xmlHttp.send(null);
}