function load()
	  {
	   var a1=(document.getElementById('a1').value);
	   var a2=(document.getElementById('a2').value);
	   var op=document.getElementById('operators').value;
       var randomT=Math.floor((1 + Math.random()) * 0x10000).toString(15,2).toString(2,35);
       var randomth
	   if(op==='b')
	   {
	     document.getElementById('a3').value=a1+a2+Math.floor((1 + Math.random()) * 0x10000)
	  .toString(16)
      .substring(1)+randomT;
	   }
       }
function load2()
{
  var del1=document.getElementById('a1').value='';
  var del1=document.getElementById('a2').value='';
var del1=document.getElementById('a3').value='';
  
}
