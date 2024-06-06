import { Animal } from "./modules/Animal";

const submitNewAnimalForm = document.getElementById("submit-new-animal") as HTMLFormElement;
const selectAnimalType = document.getElementById("select-animal-type") as HTMLSelectElement;
let selectAnimalTypeValue = selectAnimalType.value;
const animalNameInput = document.getElementById("animal-name-input") as HTMLInputElement;
const animalYearOfBirthInput = document.getElementById("animal-year-of-birth-input") as HTMLInputElement;
const animalSpecialNeedsInput = document.getElementById("animal-special-needs-input") as HTMLInputElement;

const continentAndEnclosueOutput = document.getElementById("continent-enclosure-output") as HTMLElement;
const enclosureOutputArea = document.getElementById("enclosure-output") as HTMLElement;

submitNewAnimalForm.addEventListener("submit",(event:Event) => {
    event?.preventDefault();
    getAnimalFromInputForm();
});

let allAnimals: Animal[] = [];


function getAnimalFromInputForm(){

    if (selectAnimalTypeValue.includes("Mamal")){
        console.log("Mamal");
    } else {
        console.log("nope");
    }

};

