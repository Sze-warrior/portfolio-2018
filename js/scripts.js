var BtnmobileMenu = document.querySelector(".header-mobile-menu");
var navItems = document.querySelector(".header-nav-items-container");
var lastX = window.innerWidth;
var lastY = window.innerHeight;


function toggleMobileNav(e){
	if(navItems.classList.contains("header-nav-items-container")){
		navItems.classList.toggle("active");
	}
}

BtnmobileMenu.addEventListener("click", toggleMobileNav, false);

function OnResize() {

   if (window.innerWidth <= 768) {
		navItems.classList.remove("active");
   }
}

window.addEventListener("resize", OnResize, false);