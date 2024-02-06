let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}


$(document).ready(function () {

	//Owl Carousel
	$('#clients .owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			544: {
				items: 1
			},
			767: {
				items: 1
			}
		}
	});


	// Navbar Fixed

	let nav_offset_top = $('#header').height() + 50;

	function navbarFixed() {
		if ($('#header').length) {
			$(window).scroll(function () {
				let scroll = $(window).scrollTop();

				if (scroll >= nav_offset_top) {
					$('#header  .main').addClass('navbar_fixed');
				} else {
					$('#header .main').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();


	// Click to Scroll Up
	$('footer .move span').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 1500);
	});


	// Wow
	new WOW().init();



});