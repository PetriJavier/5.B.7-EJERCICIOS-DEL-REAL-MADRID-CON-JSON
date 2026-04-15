document.getElementById("boton").addEventListener("click", cargarListaJugadores);

function cargarListaJugadores() {
    let lista = document.getElementById("lista-jugadores");
    lista.innerHTML = "";

    fetch("jugadores.json")
        .then(response => response.json())
        .then(jugadores => {
            for (let jugador of jugadores) {
                let nuevoLi = document.createElement("li");
                nuevoLi.textContent = jugador;
                nuevoLi.style.color = "purple";
                lista.appendChild(nuevoLi);
            }
        })
        .catch(error => console.log("Error:", error));
}