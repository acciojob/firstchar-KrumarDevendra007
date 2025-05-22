function firstChar(text) {
  // your code here
	const result = text.trim();
	if(result.length > 0){
		console.log(result.substring(0, 1))
	}
	else{
		console.log('')
	}
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
