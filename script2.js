 $(document).ready(function() {
	 
		
		
		
		$("button").click(function(){
		var color = $("#color").val(); console.log(color);
		var genre = $("#genre").val(); console.log(genre);
		var noun = $("#noun").val(); console.log(noun);
		var bandname = $("#bandname").val(); console.log(bandname);
		var releasedate = $("#releasedate").val(); console.log(releasedate);
		var albumtitle = $("#albumtitle").val(); console.log(albumtitle);
		var recordlabel = $("#recordlabel").val(); console.log(recordlabel);
		var format = $("#format").val(); console.log(format);
		
		var finalsentence = color + " " + genre + " " + noun + ", " + bandname + ", have announced a " + releasedate + " release of their highly anticipated album, " + albumtitle + ", which will come out via " + recordlabel + " on " + format;
		
		$("#result").html(finalsentence);
				});
		
		
		
		 });