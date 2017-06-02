var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1; i <= 5; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic'+i+'.jpg');
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', function(e){
  	var newPic = e.target;
  	var attr = newPic.getAttribute('src');
  	displayedImage.setAttribute('src', attr);
  });
}
/* Wiring up the Darken/Lighten button */
var contious = false;
btn.addEventListener('click', function(e){
	if(!contious){
		overlay.style.background = overLay();
		contious = true;
		e.target.textContent = 'Lighter';
	}
	else{
		overlay.style.background = 'none';
		contious = false;
		e.target.textContent = 'Darken';
	}

});

function random(){
	var color = Math.floor(Math.random()*255);
	return color;
}

function overLay(){
	var colorBg = 'rgba('+random()+','+random()+','+random()+','+ 0.3+')';
	return colorBg;
}