const menuBtn = document.querySelector('.menu-btn'),
	hamBurger = document.querySelector('.menu-btn__burger'),
	nav = document.querySelector('.nav'),
	menuNav = document.querySelector('.menu-nav'),
	navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		hamBurger.classList.add('open');
		nav.classList.add('open');
		menuNav.classList.add('open');
		navItems.forEach((item) => item.classList.add('open'));

		showMenu = true;
	} else {
		hamBurger.classList.remove('open');
		nav.classList.remove('open');
		menuNav.classList.remove('open');
		navItems.forEach((item) => item.classList.remove('open'));

		showMenu = false;
	}
}
