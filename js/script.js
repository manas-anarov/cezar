var alphabet = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я']
var alphabet_eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


function shifr_programm(message, position){
	var new_text = ""
	message = message.toString();

	if (message === "") {
		alert('Empty String');
	}else{

		for (var char_item = 0; char_item < message.length; char_item++) {
			var new_char =  convert_postion(message.charAt(char_item), position);
			new_text = new_text + new_char.toString();
		}

		alert("Before: " + message);
		alert("After: " + new_text);

	}
}



function convert_postion(item_search, position){

	var new_position;
	var new_array;

	var old_position;



	if (isNumeric(item_search)){


		item_search = parseInt(item_search);
		new_position = item_search + position;
		new_array = 10 - item_search;

		if (new_array < position) {
			old_position = position - new_array;
			return old_position;
			
		}

		if (new_array == position){
			return 0;
			
		}
			

		if (new_array > position){

			return item_search + position;
		}

	}

	


	else{


		var upper_char = false;

		if (isUpperCase(item_search)){
			upper_char = true;
		}


		item_search = item_search.toLowerCase()
		

		var alphabet_final;
		if (alphabet.includes(item_search)){
			alphabet_final  = alphabet;
		}else if (alphabet_eng.includes(item_search)) {
			alphabet_final  = alphabet_eng;
		}else{
			return item_search;
		}

		new_position = alphabet_final.indexOf(item_search) + position;

		new_array = alphabet_final.length - (alphabet_final.indexOf(item_search) + 1)

		if (new_array < position){
			old_position = position - new_array - 1;
			return alphabet_final[old_position];
		}


		if (item_search == alphabet_final[alphabet_final.length - 1]){
			new_position = alphabet_final.indexOf(item_search);
		}


		if (upper_char){
			return alphabet_final[new_position].toUpperCase();
		}
		else{
			return alphabet_final[new_position];
		}

		
	}


}




function isNumeric(n){
	return !!n.trim() && n > -1;
}


function isUpperCase(myString) { 
	return (myString == myString.toUpperCase()); 
} 
	


function clickFunction(){

	if( document.getElementById('input-text').value === '' ){
      alert('empty string');
    }
    else{

		var inputVal = document.getElementById("input-text").value;

		var e = document.getElementById("encrypt-step");
		var value = e.options[e.selectedIndex].value;

		value = parseInt(value);
		shifr_programm(inputVal, value);
    }
}

