import getDataFetch from "../helpers/getData.js";
import { printCardsPropertiesOnProperties } from "../modules/printPropertiesOnProperties.js";

const urlProperties = "http://localhost:3000/properties";

const contenedorProperties = document.getElementById("allProperties")

document.addEventListener('DOMContentLoaded', async()=>{
    const properties = await getDataFetch(urlProperties);
    console.log(properties);
    printCardsPropertiesOnProperties(contenedorProperties, properties)
});



// nav bar
document.addEventListener('click', (event) => {

    const { target } = event;

    if (target.classList.contains("logo")) {

        window.location.href = "/index.html";
    }
    else if (target.classList.contains("Homepage")) {

        window.location.href = "/index.html";
    }


});
document.addEventListener('click', (event)=>{
    const { target } = event;
    if (target.classList.contains("contFavorite")) {
        window.location.href= "/pages/favorites.html";
    }
})



