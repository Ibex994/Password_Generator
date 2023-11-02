document.getElementById("passgeneretor").onclick=function()
{ 
    let characters="!@#$%^&*()_+-123456789abcdefghijklmnopqrstuvwxyz";
    let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length=document.getElementById("select").value;
    let randomString ="";
    let firstCharIndex=Math.floor(Math.random()*capital.length)
    randomString+=capital.charAt(firstCharIndex)
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

document.getElementById("copybtn").onclick=function(){
    let copyText=document.getElementById("tetx");
    copyText.select();
     document.execCommand("copy");
    alert("Password Copied")
}