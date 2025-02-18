let amigosArray = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Obtener y limpiar el valor del input

    // Validación para asegurarse de que el nombre no esté vacío
    if (nombreAmigo) {
        amigosArray.push(nombreAmigo);  // Agregar el nombre al array
        inputAmigo.value = '';         // Limpiar el campo de entrada
        mostrarListaAmigos();          // Actualizar la lista visible
    }
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigosArray.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigosArray.length > 1) {
        const indiceAleatorio = Math.floor(Math.random() * amigosArray.length);
        const amigoSorteado = amigosArray[indiceAleatorio];
        mostrarResultado(amigoSorteado);
    } else {
        alert('¡No hay amigos para sortear o son muy pocos!');
    }
}

function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';  // Limpiar resultado anterior

    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}
