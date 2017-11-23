
$('#formContainer').html(document.cookie);

console.log(document.cookie+" AVANT DELETE");
document.cookie="";	
console.log(document.cookie+" APRES DELETE");