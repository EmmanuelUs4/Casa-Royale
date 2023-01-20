import getDataFetch from "../helpers/getData.js";
import putDataFetch from "../helpers/putData.js";
const urlProperties = "http://localhost:3000/properties"
const form = document.querySelector(".form");

const valuesForm = Object.values(form);
console.log(valuesForm);

const editFormStr = sessionStorage.getItem("editingProperty")
    ? JSON.parse(sessionStorage.getItem("editingProperty"))
    : "";

const editForm = editFormStr ? parseInt(editFormStr) : null;


document.addEventListener("DOMContentLoaded", async () => {
    let editProperty = {}
    const url = editForm ? `${urlProperties}/${editForm}` : urlProperties
    try {
        if (editForm) {


            editProperty = await getDataFetch(url)
            console.log(editProperty)

            valuesForm.forEach((valueInput) => {
                if (valueInput.id) {
                    valueInput.value = editProperty[valueInput.id];
                }
            })


        }
        await submitForm(form, url)
    } catch (error) {
        alert(error)
    }
});

const submitForm = async (form, url) => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const propertyInfo = {};

        valuesForm.forEach(valueInput => {
            if (valueInput.id) {
                propertyInfo[valueInput.id] = valueInput.value;
            }
        })
        console.log(propertyInfo)
        const labelsNodeList = document.querySelectorAll('label');


        const arrayLabels = [...labelsNodeList];
        console.log(arrayLabels)
        const noHayCamposVacios = !formValidation(arrayLabels, propertyInfo) ? true : false;

        if (noHayCamposVacios && editForm){
            await putDataFetch(url, propertyInfo)
        }
        
    })



}


const formValidation = (arrayLabels, propertyInfo) => {


    const keyLabels = arrayLabels.map((key) => ({
        labelName: key.innerHTMLM,
        keyName: key.getAttribute("for"),
    }))
    console.log(keyLabels)
    let keyStr
    for (const key in propertyInfo) {
        const propiedadProperty = propertyInfo[key];

        if (!propiedadProperty) {
            const labelFound = keyLabels.find((label) => label.keyName === key);
            keyStr += labelFound.labelName + ", ";
        }
    }
    console.log(keyStr)
}




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