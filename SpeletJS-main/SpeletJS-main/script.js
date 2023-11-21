/* för G:
1. Lägg till javascript så när man klickar på en bild med ? 
ska bilden bakom visas
(ps det är tillåtet att skapa CSS/html attribut etc etc)
2. Gör så att Tid blir en dropdown. Man ska kunna välja på
"15s", "30s", "60s"
Använd biblioteket
https://bluzky.github.io/nice-select2/
för att göra så att dropdownen blir snyggare
för VG:
1. Gör så spelet funkar! Tid, antal och Starta om ska funka
2. Gör så att alla bilder initieras från en array 
3. Denna ska shufflas (random ordning) */



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


/* 
onclick="document.getElementsByClassName('view back-view')[1].src= 'img/blomma1marip.webp'"

 */
/* function changePic() {
    let changeImages = document.getElementsByClassName("img-front");

    for (let i = 0; i < changeImages.length; i++) {
        let currentImage = changeImages[i];

        if (currentImage.src.match("img/qmark.png")) {
            currentImage.src = "img/mario-6005703_640.png";
        } else {
            currentImage.src = "img/qmark.png";
        }
    }
} */

/* function changePic(clickedElement) {
    if (clickedElement.src.match("img/qmark.png")) {
        clickedElement.src = "img/mario-6005703_640.png";
    } else {
        clickedElement.src = "img/qmark.png";
    }
;
} */


//document.getElementByClassName("img-front") .src="img/img6.jpg";
/* function changePic(){
	var changeImage = document.getElementById("image");
	if (changeImage.src.match("bilder/klockan.png")){
		changeImage.src = "bilder/klockanTva.PNG";
	}
	else {
		changeImage.src = "bilder/klockan.png";
	}
} */