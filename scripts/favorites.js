import getDataFetch from "../helpers/getData.js";
import deleteDataFetch from "../helpers/deleteData.js";

import { printCardsProperties } from "../modules/printProperties.js";

const urlFavorites = "http://localhost:3000/favorites";
const contenedor = document.getElementById('propertiesFavoriteLoaded');

document.addEventListener('DOMContentLoaded', async () => {
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
    // seccion  para borrar propiedad

    if (target.classList.contains("undoFavorite")) {
        // console.log(target.id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then ( async(result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your property has been deleted.',
                    'success');
                const propertyIdToDelete = parseInt(target.id);
                const urlDelete = `${urlFavorites}/${propertyIdToDelete}`;

                try {
                    await deleteDataFetch(urlDelete);
                } catch (error) {
                    console.log("Cannot delete this property: " + error)
                }
            }
        })

    }

});