
/*
function sumar(a,b){
    return a + b;
}

function restar (a,b){
    return a - b;
}

export const operaciones = {
sumar,
restar
};

*/

const $whatIsDOM = document.getElementById("que-es");

let tex = `
<p>
Qué es el DOM, la estructura de objetos que genera el navegador 
en memoria para cada uno de los elementos de la página.
 Cómo ha evolucionado el DOM a lo largo del tiempo y 
 cómo trabajar con el DOM en Javascript.
 </p>

 <p>
 DOM es una abreviatura de Document Object Model. 
   existen varios objetos y unos dependen de otros.
 </p>

 <p>
 <mark> Los objetos del DOM modelizan tanto la ventana del navegador como el historial, el documento o página web, y todos los elementos que pueda tener dentro la propia página</mark>
 </p>

`;

$whatIsDOM.innerText = tex;