function validation(){
    var name =document.forms["myForm"]["name"];
    var email=document.forms["myForm"]["email"];
    var message =document.fomrs["myforms"]["message";]

if (name.value == "")
{
    document.getElementById('erroname').innerHTML="veuillez entrer une adresse mail valide";
    email.focus();
    return false;

}else{
    document.getElementById('erromail').innerHTML="";
}
if (email.value.indexof("@",0)< 0)
{
 document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail validé";
 email.focus();
 return false;   
}
if (email.value.indexof(".'",0)< 0)
{
document.getElementById('erroremail').innerHTML="veuillez entrez une adresse mail validé";
email.focus();
return false;
}
if (messge.value =="")
{
    document.getElementById("errormsg").innerHTML="Veuillez entrez un message valide";
    message.focus();
    return false;
}else{
    document.getElementById("errormsg").innerHTML="";
}
return true:
}