function getFormvalue() {
    //Write your code here
	let form1 = document.getElementById('form1');
	let childrens = form1.children;

	let firstname = childrens[0].value;
	let secondname = childrens[0].value;
	alert(firstname+" "+secondname);

}
