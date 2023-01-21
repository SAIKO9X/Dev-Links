function toggleMode() {
	const body = document.body;

	// if (body.classList.contains("light")) {
	// 	body.classList.remove("light");
	// } else {
	// 	body.classList.add("light");
	// }

	// A função toggle ira fazer a mesma coisa que o código acima, ela verifica se dentro da tag body existe uma classe chamada "light"

	body.classList.toggle("light");
}
