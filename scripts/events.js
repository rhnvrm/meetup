function format_date(text_date) {
	var date_time = new Date(text_date);
	var string_dt = "";
	string_dt += date_time.toDateString();
	string_dt += ", ";
	string_dt += date_time.toTimeString();
	return string_dt;
}


if(localStorage.getItem('title')){
	var event = {
		title: localStorage.getItem('title'),
		type: localStorage.getItem('type'),
		host: localStorage.getItem('host'),
		dateStart: localStorage.getItem('dateStart'),
		dateEnd: localStorage.getItem('dateEnd'),
		guests: localStorage.getItem('guests'),
		address: localStorage.getItem('address'),
		message: localStorage.getItem('message') || "No special message",
	};

	$("#heading").text("Open Events");

	$('#title').text(event.title);
	$('#type').text(event.type);
	$('#host').text(event.host);
	$('#start').text(format_date(event.dateStart));
	$('#end').text(format_date(event.dateEnd));
	$('#address').text(event.address);
	$('#message').text(event.message);
	$('#guests').text(event.guests);
}
else{
	$("#title").text("No Open Events");
}


