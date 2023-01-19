export const printCardsPropertiesOnDetails = (contenedor, arrayProperties) => {
    contenedor.innerHTML = "";

    arrayProperties.forEach(property => {
        const article = document.createElement("article");
        article.classList.add("propertyCard")
        article.innerHTML = `
        <article class="propertyCard">
                <figure class="propertyImg">
                    <img src="${property.propertyimage}" alt="property" class="onClickImage" id=${property.id}>
                    <h5 class="typeText">${property.type}</h5>
                    <h5 class="statusText">${property.status}</h5>
                    <h5 class="favoriteText" id=${property.id}>❤</h5>
                    <h5 class="priceText">$${property.price}</h5>
                </figure>
                <article class="allPropertyData">
                    <article class="ubicationTextCont">
                        <p class="ubicationText">${property.ubication}</p>
                    </article>
                    <article class="infoTextCont">
                        <h3 class="infoText">${property.location}</h3>
                    </article>
                    <article class="posterAndDateCont">
                        <article>
                            <h5 class="posterText"><img src="/images/PosterIcon.png" alt="poster" class="agentIcon"> ${property.agent}</h5>
                        </article>
                        <article>
                            <p class="postDateText">${property.date} months ago</p>
                        </article>
                    </article>
                    <article class="distanceAndHouseInfoCont">
                        <article>
                            <h5><img src="/images/AreaIcon.png" alt="areaicon">${property.area} Mts².</h5>
                        </article>
                        <article class="infoIcons">
                            <h5><img src="/images/GarageIcon.png" alt="garageicon">${property.garages}</h5>
                            <h5><img src="/images/BathroomIcon.png" alt="bathroomicon">${property.bathrooms}</h5>
                            <h5><img src="/images/BedroomIcon.png" alt="bedroomicon">${property.bedrooms}</h5>
                        </article>
                    </article>
                </article>
            </article>
        `;
        contenedor.appendChild(article)
    })
}


document.addEventListener('click', (event) => {

    const { target } = event;

    if (target.classList.contains("onClickImage")) {

        sessionStorage.setItem("property", JSON.stringify(target.id));
        window.location.href = "/pages/detalles.html";
    }

    
});