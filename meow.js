function send(event) {
	console.log("Running send()...");
	var input_text = document.getElementById("meow-input").value;
	document.getElementById("meow-output").value = meow(50,input_text);
	event.preventDefault();
};

function meow(times, input_text){
	var output = new Array(times);
	for (i=0; i< times; i++){
		output[i] = " meow " + input_text; 
	}
	return output;
};