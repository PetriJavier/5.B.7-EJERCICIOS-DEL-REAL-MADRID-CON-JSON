fetch("jugadores.json")
  .then(response => response.json())
  .then(jugadores => {

    let contenedor = document.getElementById("contenedor");

    for (let jugador of jugadores) {

        let nuevaTarjeta = document.createElement("div");

        let tituloJugador = document.createElement("h2");
        tituloJugador.style.textAlign = "center";
        tituloJugador.style.fontFamily = "Arial";
        tituloJugador.textContent = jugador.nombre;
        nuevaTarjeta.appendChild(tituloJugador);

        let tituloEdad = document.createElement("p");
        tituloEdad.textContent = "Edad: " + jugador.edad;
        nuevaTarjeta.appendChild(tituloEdad);

        let tituloFicha = document.createElement("p");
        tituloFicha.textContent = "Ficha: " + jugador.ficha;
        nuevaTarjeta.appendChild(tituloFicha);

        let nuevaFoto = document.createElement("img");
        nuevaFoto.src = jugador.foto;
        nuevaTarjeta.appendChild(nuevaFoto);

        contenedor.appendChild(nuevaTarjeta);
    }

  })
  .catch(error => console.log("Error:", error));