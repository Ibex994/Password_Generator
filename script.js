document.getElementById("passgeneretor").onclick=function()
{ 
    let characters="!@#$%^&*()_+-123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let length=document.getElementById("select").value;
    let randomString ="";
    for(let i=1;i<=length;i++)
{
   let rnum= Math.floor(Math.random() * characters.length);
    randomString+=characters.substring(rnum,rnum+1);
}  
  document.getElementById("tetx").value=randomString;
}
document.getElementById("clearbutton").onclick=function(){
    document.getElementById("tetx").value='';
}

