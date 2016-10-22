// Removing Default Bubble
// https://www.html5rocks.com/en/tutorials/forms/constraintvalidation/

var forms = document.getElementsByTagName('form');
	for (var i = 0; i < forms.length; i++) {
	    forms[i].addEventListener('invalid', function(e) {
	        e.preventDefault();
	    }, true);
	}


var $name = $('#name');
var $email = $('#email');
var $password = $('#password');
var $role = $('#role');
var error = true;

function show_error(el, text){
	el.next().text(text).show();
	error = true;
}

function hide_error(el){
	el.next().hide();
	error = false;
}

$name.on('blur',function() {
	if($name.val().length === 0){
		show_error($name, 'Please enter your name');
	}
	else {
		hide_error($name);
	}
});

$email.on('blur', function() {
	//http://emailregex.com/
	var emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

	if($email.val().length === 0){
		show_error($email,'Please enter your Email');
	}
	else if(!emailPattern.test($email.val())){
		show_error($email, 'Please enter a valid email address');
	}
	else {
		hide_error($email);
	}
});

$password.on('keyup blur', function() {
	var message = [];
	var ucasePattern = /[A-Z]/;
	var lcasePattern = /[a-z]/;
	var specialPattern = /[^a-zA-Z0-9\-\/]/;

	if($password.val().length < 8){
		message[0] = "Less than 8 charachters";
	}else {
		message[0] = "";
	}

	if(!ucasePattern.test($password.val())) {
		message[1] = "1 uppercase charachter";
	}else {
		message[1] = "";
	}

	if(!lcasePattern.test($password.val())) {
		message[2] = "1 lowercase charachter";
	}else {
		message[2] = "";
	}

	if(!specialPattern.test($password.val())) {
		message[2] = "1 special charachter";
	}else {
		message[2] = "";
	}

	if(message[0].length > 0 || message[1].length > 0 || message[2].length > 0){
		show_error($password, message.join(' '));
	}else{
		hide_error($password);
	}
});

$('#reg-form').submit(function(e) {
	if(!error) {
		localStorage.setItem('name', $name.val());
		localStorage.setItem('email', $email.val());
		localStorage.setItem('role', $role.val());
	}
});