// Function to open the lightbox
function openLightbox(imgSrc) {
	document.getElementById("lightbox-img").src = imgSrc;
	document.getElementById("lightbox").style.display = "block";

	// Add event listener to close lightbox when clicking outside of the photo
	document.body.addEventListener("click", closeLightboxOnClickOutside);

	// Prevent propagation of click event on images within the gallery
	var galleryImages = document.querySelectorAll(".photos img");
	galleryImages.forEach(function (img) {
		img.addEventListener("click", function (event) {
			event.stopPropagation();
		});
	});
}

// Function to close the lightbox
function closeLightbox() {
	document.getElementById("lightbox").style.display = "none";

	// Remove the event listener when the lightbox is closed
	document.body.removeEventListener("click", closeLightboxOnClickOutside);
}

// Function to close lightbox when clicking outside of the photo
function closeLightboxOnClickOutside(event) {
	// Check if the click target is not within the lightbox or the photo itself
	if (
		!event.target.closest("#lightbox") &&
		!event.target.closest(".lightbox-img")
	) {
		closeLightbox();
	}
}
