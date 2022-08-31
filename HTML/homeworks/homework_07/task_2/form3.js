

function checkForm(){
	let p=document.getElementsByTagName('p');
    let c=document.forms[0].cl.value;
    let s=document.forms[0].sz.value;
  
for(let i=0; i<p.length; i++){
p[i].style.color=c;
p[i].style.fontSize=s;
}
}
let t=setInterval(checkForm,50);
