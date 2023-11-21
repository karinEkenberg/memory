/* för G:
1. Lägg till javascript så när man klickar på en bild med ? ska bilden bakom visas
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