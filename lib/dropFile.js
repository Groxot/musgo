var dropZone = document.querySelector("body");


document.addEventListener('dragover', function(event) {
	event.stopPropagation();
	event.preventDefault();

	//dropZone.removeClass('hidden');
});

dropZone.addEventListener('dragleave', function(event) {
	event.stopPropagation();
	event.preventDefault();

	//dropZone.addClass('hidden');
});

dropZone.addEventListener('dragover', function(e) {
	e.stopPropagation();
    e.preventDefault();

	e.dataTransfer.dropEffect = 'copy';
});

dropZone.addEventListener('drop', function(e) {
	e.stopPropagation();
	e.preventDefault();


	if(e && e.dataTransfer.items ){
		// For chrome users folder upload is supported

		var items = e.dataTransfer.items;
		for(var j=0; j<items.length; j++){
			var item = items[j];
			if(item){
				console.log();
				var track =  document.createElement('div');
				track.innerHTML = item.getAsFile().name;
				track.data = item.getAsFile().path;
				track.addEventListener("click", function(e){
					
					document.querySelector("audio > source").src = e.target.data;
					document.querySelector("audio").load();
					document.querySelector("audio").play();
				})
				
				document.querySelector("#track-list").appendChild(track);

			}
		}
    }	

})