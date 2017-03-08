+function() {
	// Elementos
	var caracteres = document.getElementById("caracteres");
	// Manejador de Evento
	caracteres.addEventListener("click", function (e) {
        e.preventDefault();
		var nombre = document.getElementById("nombre").value;
		var resultado = document.getElementById("resultado");
		resultado.textContent = caracteresDistintos(nombre);
	});
}();