
window.onscroll = function() {myFuntion()} ; 

var navbar = document.getElementById("navbar"); 
var sticky = navbar.offsetTop ; 

function myFuntion() { 
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky") 
	} else { 
		navbar.classList.remove("sticky") ; 
		}
} 
function topFunction() { 
	document.body.scrollTop = 0 ;
	document.documentElement.scrollTop = 0 ; 
}
