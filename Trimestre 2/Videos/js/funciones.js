let audio = document.getElementById('sonido');
let divDuraacion = document.getElementById('duracion');

let duracion = audio.duration;

console.log(duracion);

divDuraacion.innerHTML = parseInt(duracion);

function volumenInicial(audio) {
    audio.volume = 0.4;
}

function duracionAuio(audio) {
   
}


volumenInicial(audio);
