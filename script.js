function getFormvalue() {
    //Write your code here
	let form1 = document.getElementById('form1');
	let firstName = document.getElementsByName("fname")[0].value;
	let lastName = document.getElementsByName("lname")[0].value;

	alert(firstName+" "+lastName);
}
