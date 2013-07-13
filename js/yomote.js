function writeFile() {
	$.ajax({
		type: "GET",
		url: "./server/writeFile.php",
		success: function(data) {
			console.log(data);
		}

	});
}