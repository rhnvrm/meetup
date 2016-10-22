var forms = document.getElementsByTagName('form');
	for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('invalid', function(e) {
        e.preventDefault();
  }, true);
}

function show_error(el, text){
	el.next().text(text).show();
	error = true;
}

function hide_error(el){
	el.next().hide();
	error = false;
}

var local_name = localStorage.getItem('name');
var local_address = localStorage.getItem('address');

var $title = $('#title');
var $type = $('#type');
var $host = $('#host');
var $dateStart = $('#date-start');
var $dateEnd = $('#date-end');
var $guests = $('#guest');
var $address = $('#address');
var $message = $('#message');
var error = true;

if(local_name !== null){
	$host.val(local_name);
}

if(local_address !== null) {
	$address.val(local_address);
}

$title.on('blur keyup', function() {
	if($title.val().length === 0) {
		show_error($title,'Please enter the title of your event');
	} else {
		hide_error($title);
	}
});

$type.on('blur keyup', function() {
	if($type.val().length === 0) {
		show_error($type,'Please enter the type of event');
	} else {
		hide_error($type);
	}
});

$host.on('blur keyup', function() {
	if($host.val().length === 0) {
		show_error($host,'Please enter the name of the event\'s host');
	} else {
		hide_error($host);
	}
});

$dateStart.on('blur keyup', function() {
	if($dateStart.val().length === 0) {
		show_error($dateStart,'Please enter the start time for the event');
	} else if(new Date($dateEnd.val()) > new Date($dateStart.val()) == false){
		show_error($dateEnd,'The start time for the event must be before the end time');
	} else {
		hide_error($dateStart);
	}
});

$dateEnd.on('blur keyup', function() {
	if($dateEnd.val().length === 0) {
		show_error($dateEnd,'Please enter the end time for the event');
	} else if(new Date($dateEnd.val()) > new Date($dateStart.val()) == false){
		show_error($dateEnd,'The end time for the event must be after the start time');
	} else {
		hide_error($dateEnd);
	}
});

$guests.on('blur keyup', function() {
	if($guests.val().length === 0) {
		show_error($guests,'Please enter the guest list');
	} else {
		hide_error($guests);
	}
});

$address.on('blur keyup', function() {
	if($address.val().length === 0) {
		show_error($address,'Please enter the address for the event');
	} else {
		hide_error($address);
	}
});

$('#create_event').submit(function() {
	if(!error) {
		localStorage.setItem('title', $title.val());
		localStorage.setItem('type', $type.val());
		localStorage.setItem('host', $host.val());
		localStorage.setItem('dateStart', $dateStart.val());
		localStorage.setItem('dateEnd', $dateEnd.val());
		localStorage.setItem('guests', $guests.val());
		localStorage.setItem('address', $address.val());
		localStorage.setItem('message', $message.val());
	}
	else{
		console.log(error);
	}
});
