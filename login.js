var text;
var password;
var passed = false;
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
        password = prompt('please enter your password', '.....');
        if (password == data[0]){
        passed = true;
        }
            if (!passed){
    document.getElementById("datascript").remove();
    delete this.data;
    text = 0;
    delete this.text;
    }
        LocalFunction(passed);
    }
    var newtext;
function download() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/javascript;charset=utf-8,' + encodeURIComponent(newtext));
  element.setAttribute('download', 'account.txt');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
