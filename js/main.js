"use-strict"

customSelect(".form__select");


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
};

if (isMobile.any()) {
	document.body.classList.add("_touch");
	
	let menuArrows = document.querySelectorAll(".menu__sub-arrow");
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle("_active");
			});
		};
	};

} else {
	document.body.classList.add("_PC");
};


const menuLinks = document.querySelectorAll(".menu__list-link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick (e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			
			if (iconMenu.classList.contains("_active")) {
				document.body.classList.remove("_lock");
				menuBody.classList.remove("_active");
				iconMenu.classList.remove("_active");
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}
	}

}


const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".menu"); 
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock");
		menuBody.classList.toggle("_active");
		iconMenu.classList.toggle("_active");
	});
}



