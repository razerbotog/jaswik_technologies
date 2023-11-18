// scroll back to top
// function scrollTopBack(){
// 	let scrollTopButton = document.querySelector("#scrollUp");
// 	window.onscroll = function(){
// 		var scroll = document.documentElement.scrollTop;
// 		if(scroll >= 250){
// 			scrollTopButton.classList.add("scrollActive");
// 		} else{
// 			scrollTopButton.classList.remove("scrollActive");
// 		}
// 	}
// }
// scrollTopBack();

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
	a.addEventListener("click", function(){
		navCollapse.classList.remove("show");
	})
})

// scrollToTopBtn
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.body;
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);

/*hide scrollbar while scrolling*/
const nav = document.querySelector("#navigation");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
	if (lastScrollY < window.scrollY) {
		nav.classList.add("nav--hidden");
	} else {
		nav.classList.add("nav--hidden");
	}
	lastScrollY = window.scrollY;
})




