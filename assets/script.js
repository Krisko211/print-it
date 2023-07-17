const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//--------- variables ----------//

// initialize slideNumber //
let slideNumber = 0;

//-------  Get DOM elements  -------//
const banner = document.querySelector("#banner");
const arrows = document.querySelectorAll(".arrow");
const bannerImg = document.querySelector(".banner-img");
const dots = document.querySelector(".dots");

// create dot element for each slide
for (let i = 0; i < slides.length; i++) {

	let dot = document.createElement("div");

	dot.setAttribute("class", "dot");

	if (i === 0) {
		dot.classList.add("dot_selected");
	}

	dots.appendChild(dot);
}

// function for adding listener on arrow for change image
function initArrowListener() {
	/*addEventListener("", (e) =>{
		const declencheur = e.target
		const side = declencheur.dataset.side
	})*/

	for (const arrow of arrows) {
		
	}
}
//initArrowListener()
//----- function "active Dot" -----//

