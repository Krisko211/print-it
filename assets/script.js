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

// initialise for global scope //
let shiftDirection = null;

// copy slides for work on copy //
let slidesToShow = Array.from(slides);

// initialize slideNumber //
let slideNumber = 1;

//-------  Generate DOM elements  -------//
const divBanner = document.querySelector("#banner");

//-------  banner arrows  -------//
const divArrow = document.createElement("div");

divArrow.setAttribute("class", "arrow");

//--------  left arrow  -------//
const leftArrow = document.createElement("img");
leftArrow.setAttribute("class", "arrow_left");
leftArrow.src = "./assets/images/arrow_left.png";

//--------  right arrow  -------//
const rightArrow = document.createElement("img");
rightArrow.setAttribute("class", "arrow_right");
rightArrow.src = "./assets/images/arrow_right.png";

//----------- banner img ------------//

const bannerImg = document.createElement("img");

bannerImg.src = `./assets/images/slideshow/${slidesToShow[0].image}`;

bannerImg.setAttribute("class", "banner-img");
bannerImg.setAttribute("alt", `slide-picture-${slideNumber}`);

//--------  banner-tagline  ----------//

const bannerTagLine = document.createElement("p");

bannerTagLine.innerHTML = slidesToShow[0].tagLine;

//---------  banner-dots  ------------//

const divDots = document.createElement("div");
divDots.setAttribute("class", "dots");

divBanner.innerHTML = "";

divBanner.appendChild(divArrow);
divArrow.appendChild(leftArrow);
divArrow.appendChild(rightArrow);
divBanner.appendChild(bannerImg);
divBanner.appendChild(bannerTagLine);
divBanner.appendChild(divDots);



for (let i = 0; i < slidesToShow.length; i++) {

	let divDot = document.createElement("div");

	divDots.appendChild(divDot);

	divDot.setAttribute("class", "dot");

	if (i === 0) {
		divDot.classList.add("dot_active");
	}
}
//-------  function "shift and show"  -------//

/**
  @param {string} shiftDirection 
  @param {array} arrayToShift 
 */

function shiftAndShow(shiftDirection, arrayToShift) {

	if (shiftDirection === "left") {
		arrayToShift.unshift(arrayToShift.pop());
	}
	if (shiftDirection === "right") {

		arrayToShift.push(arrayToShift.shift());
	}

	bannerImg.src = `./assets/images/slideshow/${arrayToShift[0].image}`;
	//change alt img attribute according to slide number
	bannerImg.setAttribute("alt", `slide-picture-${slideNumber}`);
	//change banner tagline according to list
	bannerTagLine.innerHTML = arrayToShift[0].tagLine;
}
//----- function "active Dot" -----//

