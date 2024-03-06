const navToggleBtn = document.querySelector("#navToggleBtn");
const nav = document.querySelector("nav.navigation");
const navLinks = document.querySelectorAll("nav .nav-link");

navToggleBtn.addEventListener("click", () => {
	nav.classList.toggle("active");
});

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		nav.classList.remove("active");
	});
});
