const gridbutton = document.querySelector("#direct-grid");
const listbutton = document.querySelector("#direct-list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("direct-grid");
	display.classList.remove("direct-list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("direct-list");
	display.classList.remove("direct-grid");
}