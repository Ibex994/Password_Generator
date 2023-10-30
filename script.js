let characters="!@#$%^&*12345678910ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let length=document.getElementById("select").value;
let randomString ='';
document.getElementById("passgeneretor").onclick=function()
{ 
    
for(let i=0;i<length;i+=1){
   let rnum= Math.random()*characters.length;
    randomString+=characters.substring(rnum,rnum+1);
    document.getElementById("tetx").value=randomString;
}
}
characters.foreach(print);

function capitalize(element,index,array){
    array[index]=element[0].toUpperCase();
}

function print (element){
    console.log(element)
}