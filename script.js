const panel = document.getElementById("panel");
let colorPicker = document.getElementsByClassName("color-pick");
let colorpickers = Array.from(colorPicker);

colorpickers.forEach((element, number) => {
	let bg = colorPicker[number].className.split(" ")[1];
	element.addEventListener("mouseenter", () => {
		panel.className = bg;
	});

	element.addEventListener("mouseleave", () => {
		panel.classList.remove(bg);
	});
});
