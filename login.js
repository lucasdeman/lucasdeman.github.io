var text;
//var echo = document.getElementById("echo");
document.getElementById("filetoRead").addEventListener("change",function(){
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (evt) {
            var textarea = document.createElement('textarea');
        	textarea.id = 'editor';
        	document.body.appendChild(textarea);
                
                document.getElementById("editor").value = evt.target.result;
                save();
            };

            reader.onerror = function (evt) {
                console.error("An error ocurred reading the file",evt);
            };

            reader.readAsText(file, "UTF-8");
        }
    },false);
    
    function save(){
    	text = document.getElementById("editor").value;
        //echo.innerHTML = text;
        var script = document.createElement('script');
        script.innerHTML = text;
        document.body.appendChild(script);
        document.getElementById('editor').remove();
        setTimeout(doRest, 50);
    }
    
    function doRest(){
    	//echo.innerHTML = data[0];
        LocalFunction();
    }
