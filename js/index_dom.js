import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import {moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
//import webCam from "./dom/deteccion_webcam.js";
//import getGeolocation from "./dom/geolocalizacion.js";
import searchFilter from "./dom/filtro_busqueda.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrucel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidation from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";


const d= document;
d.addEventListener("DOMContentLoaded", (e)=> {
    hamburgerMenu(".panel-btn",".panel",".menu a");
digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
alarm("assets/alarm-clock.mp3","#activar-alarma","#desactivar-alarma");

countdown("countdown","Jul 20,2023 03:23:19","Feliz Cumpleaños");

scrollTopButton(".scroll-top-btn");

responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=A4t47LowHyc" target="_blank" ref = "nooper"> Ver Video </a>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/10B5FTuihk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);

responsiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/ja2DKN518WysRYcL8" target="_blank" ref = "nooper"> Ver Mapa </a>`,
`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.5724414066235!2d-78.51855714999999!3d-0.22983250000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5999d3acf3359%3A0xc69149e6b03accc5!2sPanecillo%2C%20Quito!5e0!3m2!1ses!2sec!4v1688345257119!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);


responsiveTester("responsive-Tester");

userDeviceInfo("user-device");

//webCam("webcam");

//getGeolocation("geolocation");

searchFilter(".card-filter",".card");
draw("#winner-btn",".player");
slider();
scrollSpy();
smartVideo();
contactFormValidation();

});


d.addEventListener("keydown" , e => {
    shortcuts(e); 
    moveBall(e,".ball",".stage");
}) ;

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();