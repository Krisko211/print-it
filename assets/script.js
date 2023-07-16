const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
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