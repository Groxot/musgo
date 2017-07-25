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
                document.querySelector("audio > source").src = item.getAsFile().path;
               document.querySelector("audio").load();
			}
		}
    }	
    else{
		// Other browser users have to upload files directly
        
		var files = e.dataTransfer.files;

		for(var j=0; j<files.length; j++){
			if(files[j].type.match(/audio\/(mp3|mpeg)/)){

                document.querySelector("audio > source").src = files[j].getAsFile().path;
               document.querySelector("audio").load();
			}
		}
	}
})