import getDataFetch from "../helpers/getData.js";
import { printCardsPropertiesOnDetails } from "../modules/printPropertiesOnDetails.js";
const urlProperties = "http://localhost:3000/properties";

const stringProperty = sessionStorage.getItem("property")
    ? JSON.parse(sessionStorage.getItem("property"))
    : null;
console.log(stringProperty)
const idProperty = stringProperty ? parseInt(stringProperty) : null;
console.log(idProperty)

const urlPropertiesDetails = `http://localhost:3000/properties/${idProperty}`;

const properties = sessionStorage.getItem("properties")
    ? JSON.parse(sessionStorage.getItem("properties"))
    : [];

console.log(properties)


    ? properties.find((property) => property.id === idProperty)
    : {};
console.log(idProperty)
const contenedor = document.querySelector(".PropertyData");


document.addEventListener("DOMContentLoaded", async () => {
    try {
        const urlCasas = await getDataFetch(urlPropertiesDetails);
        contenedor.innerHTML = `
<article class="allPropertyData">
                <article class="propertyImagesCont">

                    <article><img src="${urlCasas.propertyimage}" alt="mainhouse"></article>
                    <article><img src="${urlCasas.innerone}" alt="inner1"></article>
                    <article><img src="${urlCasas.innertwo}" alt="inner2"></article>
                    <article><img src="${urlCasas.innerthree}" alt="inner3"></article>

                </article>
                <article class="propertyDetails">

                    <article class="locationCont">
                        <p class="location">${urlCasas.ubication}</p>
                    </article>

                    <article class="ubicationCont">
                        <h1 class="ubication">${urlCasas.location}</h1>
                    </article>

                    <article class="typeAndStatusCont">
                        <article class="typeCont">
                            <p class="typePropertTyext">${urlCasas.type}</p>
                        </article>
                        <article class="statusCont">
                            <p class="statusPropertyText">${urlCasas.status}</p>
                        </article>
                    </article>

                    <article class="priceCont">
                    <p class="price">$${urlCasas.price}</p>
                </article>

                    <article class="areaAndRoomsCont">
                        <article class="area">
                            <p><img src="/images/AreaIcon.png" alt="areaicon">${urlCasas.area} Mts²</p>
                        </article>
                        <article class="rooms">
                            <p><img src="/images/GarageIcon.png" alt="garageicon">${urlCasas.garages}</p>
                            <p><img src="/images/BathroomIcon.png" alt="bathroomicon">${urlCasas.bathrooms}</p>
                            <p><img src="/images/BedroomIcon.png" alt="bedroomicon">${urlCasas.bedrooms}</p>
                        </article>
                    </article>
                    <article class="agentDateCont">
                        <article class="agent">
                            <p><img src="/images/PosterIcon.png" alt="poster" class="agentIcon"> ${urlCasas.agent}</p>
                        <p>Contact: 123(456) 789</p>
                            </article>
                        <article class="date">
                            <p>${urlCasas.date} moths</p>
                        </article>
                    </article>
                    <article class="descriptionCont">
                        <p>${urlCasas.description}</p>
                    </article>
                </article>
            </article>
            </article>
            </article>
`;
    } catch (error) {
        alert("error")
    }
})



//more properties

const contenedorProperties = document.querySelector(".moreProperties")

document.addEventListener('DOMContentLoaded', async () => {
    const properties = await getDataFetch(urlProperties);
    console.log(properties);
    printCardsPropertiesOnDetails(contenedorProperties, properties)
});



// Seccion de enlaces del nav bar
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

    if (target.classList.contains("Properties")) {

        window.location.href = "/pages/properties.html";
    }



});
document.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains("contFavorite")) {
        window.location.href = "/pages/favorites.html";
    }
})
