import getDataFetch from "../helpers/getData.js";
import { printCardsProperties } from "../modules/printProperties.js";
import postDataFetch from "../helpers/postData.js";
const urlProperties = "http://localhost:3000/properties";

const contenedorProperties = document.getElementById("propertiesSearchLoaded");
let properties = [];
const urlFavorites = "http://localhost:3000/favorites";



document.addEventListener('DOMContentLoaded', async () => {
    try {
        properties = await getDataFetch(urlProperties);

        printCardsProperties(contenedorProperties, properties)
    } catch (error) {
        console.log(error);
    }

});


// search input

const search = document.getElementById('search')


search.addEventListener('search', async () => {

    const searchTerm = search.value;
    try {
        if (searchTerm) {
            const datosProperties = await getDataFetch(urlProperties);
            const resultadoBusqueda = datosProperties.filter((property) => property.ubication.toLowerCase().includes(searchTerm.toLowerCase())
            );
            printCardsProperties(contenedorProperties, resultadoBusqueda)
        } else {
            const datosProperties = await getDataFetch(urlProperties);
            printCardsProperties(contenedorProperties, datosProperties)
        }
    } catch (error) {
        console.log(error)
    }

})




document.addEventListener("click", async ({ target }) => {
    //Agregar a favoritos
    if (target.classList.contains("favoriteText")) {
        const idFavorite = target.id
        
        const urlFavoriteProperties = `${urlFavorites}?id=${idFavorite}`
        const favorites = await getDataFetch(urlFavoriteProperties)
        const favoriteProperty = await getDataFetch(`${urlProperties}/${idFavorite}`);
        if (favorites.length === 0 && Object.entries(favoriteProperty).length) {

            await postDataFetch(urlFavorites, favoriteProperty)
            const data = await getDataFetch(urlFavorites);
           
        }

    }


})

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

//Botones por filtrado

const bTodo = document.getElementById("All")
const bHouse = document.getElementById("HOUSE")
const bMansion = document.getElementById("MANSION")
const containerFiltered = document.getElementById("propertiesSearchLoaded")
const bFiltered = [bTodo, bHouse, bMansion];

bFiltered.forEach(button => {
    button.addEventListener("click", (event) => {

        let filteredProperties = [];

        if (button.id==="All"){
            filteredProperties=properties
        }
        else{
            filteredProperties=properties.filter((properties)=>properties.type===button.id)
        }
        printCardsProperties(containerFiltered, filteredProperties);


    });

});

const bForSale = document.getElementById("FOR SALE")
const bRent = document.getElementById("RENT")
const bFilteredStatus=[bForSale, bRent]
bFilteredStatus.forEach(button => {
    button.addEventListener("click", (event) => {

        let filteredProperties = [];

        if (button.id!=="All" && "HOUSE" && "MANSION"){
            filteredProperties=properties.filter((properties)=>properties.status===button.id)
        }
            printCardsProperties(containerFiltered, filteredProperties);



    });
});