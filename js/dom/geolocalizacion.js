

const d = document;
n = navigator;

export default function getGeolocation(id){
const $id = d.getElementById(id);
options = {
    enableHightAccuracy:true,
    timeout:5000,
    maximumAge:0
};

const success = position =>{
    let coords = position.coords;
    console.log(position);

    $id.innerHTML=`
    <p>Tu posición actual es:</p>
    <ul>

    <li> latitud:<b>${coords.latitude}</b></li>
    <li> longitud:<b>${coords.longitude}</b></li>
    <li> Precisión:<b>${coords.accuracy}</b> metros </li>
   </ul>
   <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},
   15z"target="_blank rel="noopener">Ver en Google Maps</a>
    `
};

const error = err => {
    $id.innerHTML= `<p><mark>Error${err.code}:${err.message} </mark></p>`
    console.log(`Error ${err.code}: ${err.message}`);
};

n.getGeolocation.getCurrentPosition(success,error,options);
};
