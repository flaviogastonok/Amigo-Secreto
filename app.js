// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const agregarAmigo = () => {
    let nombre = document.getElementById('amigo');
    nombre.value != '' ? amigos.push(nombre.value) : alert('Ingrese un nombre valido');
    console.log(nombre.value);
    nombre.value = '';

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.innerText = amigos[i];
        lista.appendChild(li);
    }
}

const sortearAmigo = () => {
    if(amigos.length){
        let numRandom = Math.floor(Math.random() * (amigos.length));
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigos[numRandom];
    }
}
