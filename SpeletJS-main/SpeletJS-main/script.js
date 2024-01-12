NiceSelect.bind(document.getElementById('a-select'))
function changePic(){
	let changeImage = document.getElementsByClassName("img-front")[0];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/blomma2mario.webp";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element = document.getElementsByClassName("card")[0];
element.addEventListener("click", changePic);

function changePicTwo(){
	let changeImage = document.getElementsByClassName("img-front")[1];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/blomma1marip.webp";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element2 = document.getElementsByClassName("card")[1];
element2.addEventListener("click", changePicTwo);

function changePicTree(){
	let changeImage = document.getElementsByClassName("img-front")[2];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/mynt.webp";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element3 = document.getElementsByClassName("card")[2];
element3.addEventListener("click", changePicTree);

function changePicFour(){
	let changeImage = document.getElementsByClassName("img-front")[3];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/rodsvamp.webp";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element4 = document.getElementsByClassName("card")[3];
element4.addEventListener("click", changePicFour);

function changePicFive(){
	let changeImage = document.getElementsByClassName("img-front")[4];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/blomma2mario.webp";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element5 = document.getElementsByClassName("card")[4];
element5.addEventListener("click", changePicFive);

function changePicSix(){
	let changeImage = document.getElementsByClassName("img-front")[5];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/rodsvamp.webp";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element6 = document.getElementsByClassName("card")[5];
element6.addEventListener("click", changePicSix);

function changePicSeven(){
	let changeImage = document.getElementsByClassName("img-front")[6];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/mario.jpg";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element7 = document.getElementsByClassName("card")[6];
element7.addEventListener("click", changePicSeven);

function changePicEight(){
	let changeImage = document.getElementsByClassName("img-front")[7];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/yoshi.webp";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element8 = document.getElementsByClassName("card")[7];
element8.addEventListener("click", changePicEight);

function changePicNine(){
	let changeImage = document.getElementsByClassName("img-front")[8];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/mynt.webp";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element9 = document.getElementsByClassName("card")[8];
element9.addEventListener("click", changePicNine);

function changePicTen(){
	let changeImage = document.getElementsByClassName("img-front")[9];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/blomma1marip.webp";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element10 = document.getElementsByClassName("card")[9];
element10.addEventListener("click", changePicTen);

function changePicEleven(){
	let changeImage = document.getElementsByClassName("img-front")[10];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/mario.jpg";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}
let element11 = document.getElementsByClassName("card")[10];
element11.addEventListener("click", changePicEleven);

function changePicTwelve(){
	let changeImage = document.getElementsByClassName("img-front")[11];
	if (changeImage.src.match("img/questionmark.webp")){
		changeImage.src = "img/yoshi.webp";
	}
	else {
		changeImage.src = "img/questionmark.webp";
	}
}

let element12 = document.getElementsByClassName("card")[11];
element12.addEventListener("click", changePicTwelve);

new NiceSelect(document.getElementById("a-select"), {searchable: true});

try{
	var countDownTime = 16;
	var x = setInterval(function() {
	  countDownTime--;
	  document.getElementsByClassName("option null selected").innerHTML = countDownTime + "s ";
	  if (countDownTime <= 0) {
		clearInterval(x); 
		document.getElementsByClassName("option null selected").innerHTML = "Tiden är slut!";
	  }
	}, 1000);
	
	var countDownTime2 = 31;
	var x2 = setInterval(function() {
	  countDownTime2--;
	  document.getElementById("time2").innerHTML = countDownTime2 + "s ";
	  if (countDownTime2 <= 0) {
		clearInterval(x2); 
		document.getElementById("time2").innerHTML = "Tiden är slut!";
	  }
	}, 1000);
	
	var countDownTime3 = 61;
	var x3 = setInterval(function() {
	  countDownTime3--;
	  document.getElementById("time3").innerHTML = countDownTime3 + "s ";
	  if (countDownTime3 <= 0) {
		clearInterval(x3); 
		document.getElementById("time3").innerHTML = "Tiden är slut!";
	  }
	}, 1000);
} catch (error) {
	console.log('Ett fel har inträffat:', error)
}
