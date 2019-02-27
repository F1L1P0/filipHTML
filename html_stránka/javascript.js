function slider_event(index)
{
	var children = document.getElementById('slider-images').children;
	for (var i = 0; i < children.length; i++) {
		children[i].classList.add('hide');
	}

	document.getElementById("png"+index).classList.remove('hide');

}

// 
window.onload = function ()
{
	

	var slider_pag = document.getElementById("Pag");

	var children = document.getElementById('slider-images').children;

	for (var i = 0; i < children.length; i++) {
		children[i].id = "png" + (i+1);
		slider_pag.innerHTML += "<span onclick='slider_event("  + (i+1) +  ");'>"  + (i+1) +  "</span>"
	}
	slider_event(1);

}

function check()
{
	var answer1 = document.getElementById("jmeno").value;
	var answer2 = document.getElementById("puvod").value;
	var answer3 = document.getElementById("answer3").value;

	var i = 0

	if (answer1 == "Filip") {
		i++;
	}

	if (answer2 == "CZ") {
		i++;
	}

	if (answer3 == "Rakvice") {
		i++;
	}

	alert("Odpověděl jsi na " +i+ " správně");
}
