function openmenu(){
	$('.nav').show();
}
function closemenu(){
	$('.nav').hide();
}
function opensub(){
	$('.dropdown-list').toggle();
}
var swiper = new Swiper('.brand-slider', {
	slidesPerView: 1.5,
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2.5,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	},
});

var swiper = new Swiper('.products-slider', {
	slidesPerView: 1.5,
	centeredSlides: false,
	spaceBetween: 30,
	loop: true
});


var swiper = new Swiper('.contact-slider', {
	slidesPerView: 1.5,
	centeredSlides: false,
	spaceBetween: 30,
	loop: true,
	breakpoints: {
		640: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	},
});

const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
	addAnimation();
}

function addAnimation() {
	scrollers.forEach(scroller => {
		scroller.setAttribute("data-animated", true);

		const scrollerInner = scroller.querySelector(".scroller_inner");
		const scrollerContent = Array.from(scrollerInner.children);

		scrollerContent.forEach(item => {
			const duplicatedItem = item.cloneNode(true);
			duplicatedItem.setAttribute("aria-hidden", true);
			scrollerInner.appendChild(duplicatedItem);
		} )
	} );
}