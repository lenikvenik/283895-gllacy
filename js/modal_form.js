var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-form");
var close = document.querySelector(".modal-form-close");
var overlay = document.querySelector(".modal-overlay");
var username = popup.querySelector(".user-name-field");
var form = popup.querySelector(".modal-form-contact");
var usermail = popup.querySelector(".user-mail-field");
var usertext = popup.querySelector(".user-text-field");
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-form-show");
	overlay.classList.add("modal-overlay-show");
	username.focus();
});
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-form-show");
	overlay.classList.remove("modal-overlay-show");
});
overlay.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-form-show");
	overlay.classList.remove("modal-overlay-show");
});
form.addEventListener("submit", function(event) {
	if (!username.value || !usermail.value || !usertext.value) { 
		event.preventDefault();
		console.log("Нужно что-то написать");
	} 
});
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-form-show")) {
			popup.classList.remove("modal-form-show");
			overlay.classList.remove("modal-overlay-show");

		}
	}
});
