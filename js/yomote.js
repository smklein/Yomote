function writeFile() {
	var boolState = toggleState();
	$.ajax({
		type: "POST",
		data: {
			play: boolState
		},
		url: "./server/writeFile.php",
		success: function(data) {
			console.log(data);
		}

	});
}

function toggleState() {
	var pauseplay = $('#pauseplay');
	var state = pauseplay.val();
	var bool;
	if (state=="pause") {
		pauseplay.val('play');
		pauseplay.text('Play');
		pauseplay.attr('onclick',"writeFile('play');")
		bool = false;
	} else if (state=="play") {
		pauseplay.val('pause');
		pauseplay.text('Pause');
		pauseplay.attr('onclick',"writeFile('pause');")
		bool = true;
	} else {
		alert('invalid state');
	}
	return bool;
}