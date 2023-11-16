
function changePic(){
	let changeImage = document.getElementsByClassName("img-front")[0];
	if (changeImage.src.match("img/qmark.png")){
		changeImage.src = "img/blomma2mario.webp";
	}
	else {
		changeImage.src = "img/qmark.png";
	}
}



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