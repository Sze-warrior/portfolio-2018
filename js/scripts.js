var mobileMenu = document.querySelector(".header-mobile-menu");
var navItems = document.querySelector(".header-nav-items-container");

var lastX = window.innerWidth;
var lastY = window.innerHeight;

var mobileArrow = document.querySelector(".arrow");

//Function to hide and show the navbar on mobile and rotate the arrow 
function toggleMobileNav(e){
	if(mobileMenu){
		navItems.classList.toggle("active");
		mobileArrow.classList.toggle("rotated");
	}
}

mobileMenu.addEventListener("click", toggleMobileNav, false);


//Function to show navbar if user is resizing browser and toggled off the navbar
function OnResize(e) {
   if (window.innerWidth <= 768) {
		navItems.classList.remove("active");
   }
}

window.addEventListener("resize", OnResize, false);

