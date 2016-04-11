            function docheck(status,from_)
		   {
		   		var alen=document.frmList.elements.length;
				alen=(alen>5)?document.frmList.chkid.length:0;
				if (alen>0)
				{
			   		for(var i=0;i<alen;i++)
						document.frmList.chkid[i].checked=status;
				}else
				{
						document.frmList.chkid.checked=status;
				}
				if(from_>0)
					document.frmList.chkall.checked=status;
		   }
		   function docheckone()
		   {
		   		var alen=document.frmList.elements.length;
				var isChecked=true;
				alen=(alen>5)?document.frmList.chkid.length:0;
				if (alen>0)
				{
			   		for(var i=0;i<alen;i++)
						if(document.frmList.chkid[i].checked==false)
							isChecked=false;
				}else
				{
					if(document.frmList.chkid.checked==false)
						isChecked=false;
				}
				document.frmList.chkall.checked=isChecked;
		   }
		   function calculatechon()
			{
				var strchon="";
				var alen=document.frmList.elements.length;
				alen=(alen>5)?document.frmList.chkid.length:0;
				if (alen>0)
				{
			   		for(var i=0;i<alen;i++)
						if(document.frmList.chkid[i].checked==true)
							strchon+=document.frmList.chkid[i].value+",";
				}else
				{
					if(document.frmList.chkid.checked==true)
						strchon=document.frmList.chkid.value;
				}
				document.frmList.chon.value=strchon;

			}
		   function checkInput()
		   {
				var alen=document.frmList.elements.length;
				var isChecked=false;
				alen=(alen>5)?document.frmList.chkid.length:0;
				if (alen>0)
				{
			   		for(var i=0;i<alen;i++)
						if(document.frmList.chkid[i].checked==true)
							isChecked=true;
				}else
				{
					if(document.frmList.chkid.checked==true)
						isChecked=true;
				}
				if (!isChecked)
					alert("Vui lòng chọn mẫu tin.");
				else
					calculatechon();

			return isChecked;
            }
       
       function check()
        {
            if(document.frmThem.name.value=="")
            {
                alert("Name is required.");
                document.frmThem.name.focus();
                return false;
            }
            if(document.frmThem.category.value=="0")
            {
              alert("Category is required.");
              //document.frmThem.choise.focus();
             return false;
            }
            if(document.frmThem.category.value=="")
            {
              alert("Category is not value.");
              //document.frmThem.choise.focus();
             return false;
            }
            if(document.frmThem.price.value=="")
            {
                alert("Price is required.");
                document.frmThem.price.focus();
                return false;
            }  
            
            if(document.frmThem.price.value=="0")
            {
                alert("Price must be greater 0");
                document.frmThem.price.focus();
                return false;
            }
        return true;
        }
        
        
        
        /*
         function check_input()
                 {
                     if(document.frmThem.t_v.value=="")
                     {
                         alert("Nh?p tiêu d? Ti?ng Vi?t.");
                         document.frmThem.t_v.focus();
                         return false;
                     }
                     if(document.frmThem.t_e.value=="")
                     {
                         alert("Nh?p tiêu d? Ti?ng Anh.");
                         document.frmThem.t_e.focus();
                         return false;
                     }
                 
                 return true;
                 }
         */
 /////////////////////////////////////////////////////////////////////////////////////////
 