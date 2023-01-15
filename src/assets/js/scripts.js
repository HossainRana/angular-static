function switch_theme() {
	document.body.classList.toggle('dark');
}

function switch_nav(){
	var nav = document.querySelector('.mob-nav');
	nav.classList.toggle('active');
}
function dropdown() {
	document.querySelector(".top-sec .nav .nav-btn .dropdown").classList.toggle("active");

}
function bid(){
	var bid = document.querySelector(".pop-ups .popup.bidding-popup");
	var overlay = document.querySelector('.pop-ups .overlay');
	if (bid.classList.contains('active')) {
		bid.classList.remove('active');
		overlay.classList.remove('active');
	}else{
		bid.classList.add('active');
		overlay.classList.add('active')
	}
}
function close_popups() {
	var popups = document.querySelectorAll(".popup");
	var overlay = document.querySelector('.pop-ups .overlay');
	
	overlay.classList.remove('active');

	for(var i of popups){
		i.classList.remove("active")
	}

}
document.querySelectorAll('section.avialable .text-sec .item').forEach((e)=>{
	e.addEventListener('click', ()=>{
		e.classList.toggle('active');
	})
});