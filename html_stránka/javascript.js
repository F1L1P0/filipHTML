function slider_event(index)
{
	var children = document.getElementById('slider-images').children;
	for (var i = 0; i < children.length; i++) {
		children[i].classList.add('hide');
	}
	document.getElementById("png"+index).classList.remove('hide');

}

function removeChildren(id){
	var list = document.getElementById(id);
	while (list.hasChildNodes()) {   
  		list.removeChild(list.childNodes[0]);
	}
}

function del(id) {
	var el = document.getElementById(id);
	el.parentNode.removeChild(el);
}


function add(id, name,cl, value ){
	//var parrent = document.getElementById(id);
	//parrent.innerHTML += "<"+name+"> "+value+" </"+name+">"

	var new_el = document.createElement(name);
	new_el.innerText = value ;
	document.getElementById(id).appendChild(new_el);
	new_el.classList.add(cl);

}

function redirect(kam){

}

function show_answers(){
		del("jmeno");
		del("puvod");
		del("answer3");
		add("p1", "span", 'ans', "Filip");
		add("p2", "span", 'ans', "CZ");
		add("p3", "span", 'ans', "Rakvice");
}


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

