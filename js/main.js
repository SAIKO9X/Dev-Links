function toggleMode() {
	const body = document.body;

	body.classList.toggle("light");
	// A função toggle ira fazer a mesma coisa que o código abaixo, ela verifica se dentro da tag body existe uma classe chamada "light"

	// pegar a  tag img
	const profile = document.querySelector("#profile-section img");

	//substituir a imagem através do setAtribute
	if (body.classList.contains("light")) {
		profile.setAttribute("src", "./assets/profile.jpg");
	} else {
		profile.setAttribute("src", "./assets/profile-dark.jpg");
	}
}
