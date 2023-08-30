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
const tagLine = banner.querySelector("#banner p");
const dots = document.querySelector(".dots");

// create dot element for each slide // Boucle

for (let i = 0; i < slides.length; i++) {

	let dot = document.createElement("div");
   
	dot.setAttribute("class", "dot");
   
	if (i === 0) {
	 dot.classList.add("dot_selected");
	}
   
	// Add event listener to each dot
	dot.addEventListener("click", () => {
	 slideNumber = i;
	 updateBanner();
	});
   
	dots.appendChild(dot);
   }

// function for adding listener on arrow for change image

function initArrowListener() {
	for (const arrow of arrows) {
		arrow.addEventListener("click", (e) => {
			const direction = e.target.dataset.side;
			if (direction === "left") {
				slideNumber--;
				if (slideNumber < 0) {
					slideNumber = slides.length - 1;
				}
			} else if (direction === "right") {
				slideNumber++;
				if (slideNumber > slides.length - 1) {
					slideNumber = 0;
				}
			}
			updateBanner();
		});
	}
}

// function to update banner slide

function updateBanner() {
	bannerImg.src = `./assets/images/slideshow/${slides[slideNumber].image}`;
	tagLine.innerHTML = slides[slideNumber].tagLine;
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	dots.children[slideNumber].classList.add("dot_selected");
}

// add listener on arrows

initArrowListener();
