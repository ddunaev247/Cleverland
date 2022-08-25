function checkForm(){
	let s="";
	let empty=0;
  let sx=[0,'Пол: мужской ','Пол: женский '];
  let exprer=[0,'менее года' ,'1-3 года','3-5 лет ','5-15 лет', 'Свыше 15 лет']
  let educ=[0,'основное общее среднее профессиональное', 'среднее (полное) общее высшее профессиональное','начальное профессиональное','иное'];
let sn=document.forms[0].surname.value;
if(sn){s=sn+' '} else {empty++}	
let nm=document.forms[0].name.value;
if(nm){s+=(nm+' ')} else {empty++}
let mn=document.forms[0].middle_name.value;
if(mn){s+=(mn+' \n')} else {empty++} 
let sex=document.forms[0].sex.value;
if(sex){s+=(sx[sex]+' \n')} else {empty++}  
let db=document.forms[0].date_of_birth.value;
if(db){s+=("Дата рождения: "+db+' \n')} else {empty++} 
let ag=document.forms[0].age.value;
if(ag){s+=("Количество полных лет: "+ag+' \n')} else {empty++} 
let adr=document.forms[0].address.value;
if(adr){s+=("Адрес: "+adr+' \n')} else {empty++} 
let tn=document.forms[0].phone_number.value;
if(tn){s+=("Телефон: +375 "+tn+' \n')} else {empty++};
let em=document.forms[0].email.value;
if(em){s+=("Электронная почта: "+em+' \n')} else {empty++};
let ed=document.forms[0].education.value;
if(ed){s+=("Образование: "+educ[ed]+' \n')} else {empty++};
let prof=document.forms[0].profession.value;
if(prof){s+=("Специальность:"+prof+' \n')} else {empty++}; 
let exp=document.forms[0].experience.value;
if(exp){s+=("Стаж работы по специальности: "+exprer[exp]+' \n')} else {empty++}; 
let prw=document.forms[0].prior_work.value;
if(prw){s+=("Предыдущее место работы: "+prw+' \n')} else {empty++}; 
let tim1=document.forms[0].data1.value;
let tim2=document.forms[0].data2.value;
if(tim1 && tim2){s+=(' c '+ tim1+' по '+ tim2)}else {empty++}; 
if(empty){alert('Вы заполнили не все поля')}else {alert(s)};

}