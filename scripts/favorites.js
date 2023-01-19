import getDataFetch from "../helpers/getData.js";
import { printCardsProperties } from "../modules/printProperties.js";

const urlFavorites = "http://localhost:3000/favorites";
const contenedor = document.getElementById('propertiesFavoriteLoaded');

document.addEventListener('DOMContentLoaded', async()=>{
    const favorites = await getDataFetch(urlFavorites);
    printCardsProperties(contenedor, favorites)


})

// seccion de funcionalidades nav bar
document.addEventListener('click', (event) => {

    const { target } = event;

    if (target.classList.contains("Properties")) {

        window.location.href = "/pages/properties.html";
    }



});
document.addEventListener('click', (event) => {

    const { target } = event;

    if (target.classList.contains("logo")) {

        window.location.href = "/index.html";
    }
    else if (target.classList.contains("Homepage")) {

        window.location.href = "/index.html";
    }


});
document.addEventListener('click', (event) => {

    const { target } = event;

    if (target.classList.contains("onClickImage")) {

        sessionStorage.setItem("property", JSON.stringify(target.id));
        window.location.href = "/pages/detalles.html";
    }

    
});