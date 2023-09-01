/*
let texto = "hola soy francine";

const hablar = (texto) =>
speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);
*/
// ELEMENTOS DEL DOCUMENTO
/*
console.log("ELEMENTOS DEL DOCUMENTO")
console.log(document);
console.log(document.head);
console.log(document.documentElement); // representa la etiqueta html
console.log(document.title);
console.log(document.links)


*/

/*
// ELEMENTOS DEL JAVA SCRIPT ETIQUETAS HTML

//metodo antiguos
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));


console.log(document.getElementById("menu"));

// el reemplazo de los tres anteirores 
console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu")) // selecciona un sellector , un id , un nombre ,un li
console.log(document.querySelector("a")) // solo me trae el primer slector , en este caso el primer link
console.log(document.querySelectorAll("a")) // con el ALL puedo traer todos los enlaces en este caso
console.log(document.querySelectorAll("a").length)// devuelve el tamano

document.querySelectorAll("a").forEach(el => console.log(el))

console.log(document.querySelectorAll(".card"))// devuelve el tamano
console.log(document.querySelectorAll(".card")[2])// devuelve el tamano
console.log(document.querySelectorAll("#menu li"))// devuelve el tamano
*/

/*

// interactuar con los atributos html

console.log(document.documentElement.lang); // aqui llamamos al atributo lang
console.log(document.documentElement.getAttribute("lang")); // lo mismo que arriba ., que parece el mismo resultado pero NO
console.log(document.querySelector(".link-dom").href); // lo mismo que arriba ., que parece el mismo resultado pero NO, aqui me tare todo el dominio
console.log(document.querySelector(".link-dom").getAttribute("href")); // solo me trae el valor escrito en ese enlace

//establecer nuevos valores a los atributos

document.documentElement.lang = "en"
console.log(document.documentElement.lang); // aqui llamamos al atributo lang
document.documentElement.setAttribute("lang","eS-MX");
console.log(document.documentElement.lang);

// guardar en varibles elemetnos del dom

const $linkDom = document.querySelector(".link-dom");  // el $ sirve para poder identificar que esa variable guarda  elementos del dom 

// modificacion atributos
$linkDom.setAttribute("target","_blank");
$linkDom.setAttribute("rel","noopener");// evitar hackeo NOOPENER , que no hay dependencia de la ventana que se abre y la ventana origen
$linkDom.setAttribute("href", "https://www.facebook.com/franccine.guerrero");

// quitar elementos

console.log($linkDom.hasAttribute("rel")); // devuele TRUE

$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel")); // ahora devolvera FALSE , porque ya lo quitamos en la anterior linea

//Data-Attributes

console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset)
console.log($linkDom.dataset.description)

// modificar el Data-Attributes

$linkDom.setAttribute("data-description","Modelo de Objeto del Documento")// se  amodificado
console.log($linkDom.getAttribute("data-description"));
$linkDom.dataset.description="Ingresa a mi perfil";  //para hacerlo con el punto . se usa el Dataset
console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.hasAttribute("data-description"))

*/


// ------- INTERACTUAR ESTILOS Y VARIABLES CSS

/*
const $linkDom = document.querySelector(".link-dom"); 

console.log($linkDom.style)// puedo observar todo el mapa , propiedades validas para css
console.log($linkDom.getAttribute("style")) // solo me devulve el valor , en este caso los colores

console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);
console.log(window.getComputedStyle($linkDom));
console.log(getComputedStyle($linkDom).getPropertyValue("color"));


// establcer atributos
$linkDom.style.setProperty("text-decoration","none"); // como si fuera con attribute establcemos el nombre del atributo y  a lo que queremos cambiar
$linkDom.style.setProperty("display","block"); // cambiamos el lugar que ocupa en la pantalla
$linkDom.style.width="50%"; // lo mismo que la anterior linea pero aqui con notacion del punto
$linkDom.style.textAlign="center";
$linkDom.style.marginRight="auto";
$linkDom.style.marginLeft="auto";
$linkDom.style.padding="1rem";
$linkDom.style.borderRadius="5rem";

//  varibles CCS (CUSTOM PROPERTIES)

// como acceder a esa svariables css

const $html = document.documentElement,
$body=document.body;

let  varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varWhiteColor = getComputedStyle($html).getPropertyValue("--white-color");

console.log(varDarkColor,varWhiteColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color=varWhiteColor;

// ahora modificamos esas propiedades



$html.style.setProperty("--dark-color","red");// aunque cambio en el codigo , no se aplica cambios en si en la presentacion



varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.backgroundColor=varDarkColor;
//$body.style.setProperty("background-Color",varDarkColor) // lo mismo que la linea anterior pero con property

*/



// Clase 65. 

/*

const $card= document.querySelector(".card");
console.log($card.classList);
console.log($card.className);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45"); //anadir una clase
console.log($card.classList.contains("rotate-45"));
console.log($card.classList);
console.log($card.className);
$card.classList.remove("rotate-45"); // quitar una clase
$card.classList.toggle("rotate-45"); // toogle es como una palanca. si no tiene la clase la agrega ,si la tiene la quita
console.log($card.classList.contains("rotate-45"));

$card.classList.replace("rotate-45", "rotate -135"); // el primer parametro es que se va reemplazar y el segundo es el valor que se va reemplazar

$card.classList.add("pacity-80","sepia");
*/



//clase 66 DOM TEXTO Y HTML

/*
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

//$whatIsDOM.innerText = tex; 
$whatIsDOM.textContent = tex;  // para agregar contenido textual . pero no reenderiza o ejecuta las etiquetas html

$whatIsDOM.innerHTML = tex; // insertra contenifo html .. aqui las  etiqutas si reenderizan como si fuera codigo html

$whatIsDOM.outerHTML = tex;

 */



// ** 67. DOM Traversing: Recorriendo el DOM -

/*
 serie de prpiedad de api del dom que da para [pder rcorrer]
 diferentes elementos
*/

/*
 const $cards = document.querySelector(".card");

 console.log($cards);
 //console.log($cards.childNodes);
 console.log($cards.children); // me devuelve cada una de la coleecion
 console.log($cards.children[2]);

 
 console.log($cards.parentElement); // retorna el elemento padre
 console.log($cards.firstChild);//el primer nodo  es un espacio
 console.log($cards.lastElementChild); // ultimo elemento
 console.log($cards.previousElementSibling);
 console.log($cards.nextElementSibling);
console.log($cards.closest("body")); // encuntra el mas proximo de la referencia
*/





// Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos -
// crrando elementos de forma dinamica

/*
const $figure= document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("heroes"), // crea un nodo de texto
$cards = document.querySelector(".card");

 const $figure2 = document.createElement("figure");


$img.setAttribute("src","https://picsum.photos/id/20/200");
$img.setAttribute("alt","heroes");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);

$cards.appendChild($figure); // appenChild crea un hijo
// otra forma pero que no se crea un nodo html

$figure2.innerHTML = `<img src = "https://picsum.photos/id/22/200" alt = "cosas">
<figcaption> cosas </figcaption>`;

$figure2.classList.add(".card");
$cards.appendChild($figure2);

// para crear dinamicamente varios elementos

 const estaciones = ["primavera","verano","otoño","invierno"],
 $ul = document.createElement("ul");

  document.write("<h4> Estaciones del Año </h4>")
  document.body.appendChild($ul);

  estaciones.forEach((el)=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
  });

  const paises = ["Ecuador","Brasil","Argentina","Chile"],
  $ul2 = document.createElement("ul");

  document.write("<h4> Paises de America del Sur </h4>")
  document.body.appendChild($ul2);

$ul2.innerHTML = "";
 paises.forEach((el) => ($ul2.innerHTML += `<li> ${el} </li>`));


// usando frgamento , que sirve para anadir  varios elementos

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto"
],

$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(el => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h4> Meses del año</h4>")
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

*/


/*
// Curso JavaScript: 69. DOM: Templates HTML 


const $cards = document.querySelector(".card"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardsContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },

    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },

    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },

    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    }
  
  ];
cardsContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});
$cards.appendChild($fragment);
*/


// 70. DOM: Modificando Elementos (Old Style) 

// como agregar elementos dinamicos en ves de appendChild

/*
const $cards = document.querySelector(".card"),
$newCard = document.createElement ("figure");

 $newCard.innerHTML = `
<img src = "https://placeimg.com/200/200/any" alt="Any">
<figcaption> Any </figcaption>
`;

$newCard.classList("card");

// vamos a reemplazar un elemento

//$cards.replaceChild($newCard,$cards.children[0]);

// insertar antes de un nodo de referencia

//$cards.insertBefore($newCard,$cards.firstElementChild);

// para eliminar

$cards.removeChild($cards.lastElementChild);
$cloneCards = $cards.cloneNode(true); // si solo le dejo sin parametros solo clono la estructura , si quiero que clone todo el contenido le paso true
document.body.appendChild($cloneCards);

*/


// Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) 

/*
const $cards = document.querySelector(".card"),
$newCard = document.createElement("figure");

 let $contenCard = `
<img src = "https://placeimg.com/200/200/any" alt="Any">
<figcaption> </figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
$cards.insertAdjacentElement("aftergegin",$newCard);  // la tarjeta se ingresa antes del nodo referencia
//$cards.insertAdjacentElement("aftergegin",$newCard);  // la tarjeta se ingresa primero hijo
//$cards.insertAdjacentElement("beforeend",$newCard);// ultima de esa seccion
//$cards.insertAdjacentElement("afterend",$newCard);// como nodo posterior del nodo referencia

//COMO JQUERY
//$cards.prepend($newCard); // como primer hijo
//$cards.append($newCard);  // como ultimo hijo
//$cards.before($newCard);  // como hermano anterior
//$cards.after($newCard); // como hermano siguiente
*/



/*

//Curso JavaScript: 72. DOM: Manejadores de Eventos 

function holaMundo(){
  alert("HolaMundo");
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");


$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e){
  alert("Hola mundo manejador de Eventos semantico");
  console.log(e);
  console.log(event);
};

//evento  multiple 
$eventoMultiple.addEventListener("click",holaMundo); // solo s enombra la funcion , sin parentesis para que no ejecute inmediatamente
$eventoMultiple.addEventListener("click",(e)=>
{
  alert("manejador de eventos multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);

});
 
*/
/*

//Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos 



function holaMundo(){
  alert("HolaMundo");
  console.log(event);
}

function saludar (nombre = "dosconocida"){
  alert(`Hola ${nombre}`)
};



const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");



$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e){
  alert("Hola mundo manejador de Eventos semantico");
  console.log(e);
  console.log(event);
};

//evento  multiple 
$eventoMultiple.addEventListener("click",holaMundo); // solo s enombra la funcion , sin parentesis para que no ejecute inmediatamente
$eventoMultiple.addEventListener("click",(e)=>
{
  alert("manejador de eventos multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);

});

$eventoMultiple.addEventListener("click",()=> {
  saludar("francine")
  saludar();
} );// aqui si pasamos con () porque la arroy fuction va ejecutarse , arro f ejecuta la funcion  saludar.


function sumar (a , b){
  let resul = a+b;
  alert(resul);
}

$eventoMultiple.addEventListener("click",()=> {
sumar(5,6)}
 );

 // eliminar eventos

 const removerDobleClick =(e) => {
  alert(`removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick",removerDobleClick);
  $eventoRemover.ariaDisabled= true;
 };

 $eventoRemover.addEventListener("dblclick",removerDobleClick);
*/



//Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) 
//Curso JavaScript: 75. DOM: stopPropagation & preventDefault

/*

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
 console.log($divsEventos);
  
 const $linkEventos = document.querySelector(".eventos-flujo a");

 function flujoEventos(e){
console.log(`hola te saluda ${this.className},el clic lo origino ${e.target.className}`);
e.stopPropagation(); // con stop podemos detener la propagacion
}
*/

/*
 $divsEventos.forEach(div => {
 

  div.addEventListener("click",flujoEventos);
  div.addEventListener("click",flujoEventos,{
    capture:false,
    once:true // se ejecute una sola vez 
  
  })
  
 });

 $linkEventos.addEventListener("click",e=>{
  alert("hola soy francine");
  e.preventDefault(); // cancela la accion que tenga por defecto que tenga el elemento. en este caso abrir el link
//e.stopPropagation(); 
});
*/




//Curso JavaScript: 76. DOM: Delegación de Eventos


  /*
 

 function flujoEventos(e){
console.log(`hola te saluda ${this.className},el clic lo origino ${e.target.className}`);
}

document.addEventListener("click",(e)=> {
console.log("click en",e.target);


if(e.target.matches(".eventos-flujo div")){
  flujoEventos(e);
}



if(e.target.matches(".eventos-flujo a")){
  alert("hola soy francine");
  e.preventDefault(); // cancela la accion que tenga por defecto que tenga el elemento. en este caso abrir el link

}
});
*/




// Curso JavaScript: 77. BOM: Propiedades y Eventos 

//propiedades de las ventanas
/*
window.addEventListener("resize" ,e=>{
  console.log("---------- EVENTO RESIZE")
  console.log(window.innerWidth); // representa la parte visible 
  console.log(window.innerHeight);
  console.log(window.outerHeight);
  console.log(window.outerHeight);
  console.log(e);
})

window.addEventListener("scroll", e=>{
  console.log();


})
*/




//Curso JavaScript: 78. BOM: Métodos 


/*
window.alert("alerta");
confirm("confirmacion");
window.prompt("aviso")
*/
/*

const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar= document.getElementById("cerrar-ventana"),
$btnImprimir= document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click",(e)=>{
ventana = window.open("https://www.facebook.com/franccine.guerrero")});


$btnCerrar.addEventListener("click",(e)=>{
  ventana.close();

});

$btnImprimir.addEventListener("click",(e)=>{
window.print();

});
*/


//Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador

console.log("********** OBJETO URL (LOCATION)");
