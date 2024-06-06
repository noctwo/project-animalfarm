
import { Lion } from "./modules/Instances/Lion"
import { Shark } from "./modules/Instances/Shark";
import { Animal } from "./modules/Animal";
import { Elephant } from "./modules/Instances/Elephant";
import { Snake } from "./modules/Instances/Snake";
import { Parrot } from "./modules/Instances/Parrot";
import { Turtle } from "./modules/Instances/Turtle";
import { Eagle } from "./modules/Instances/Eagle";
import { Fishes } from "./modules/Instances/Fish";


const submitNewAnimalForm = document.getElementById("submit-new-animal") as HTMLFormElement;
const selectAnimalType = document.getElementById("select-animal-type") as HTMLSelectElement;
const animalNameInput = document.getElementById("animal-name-input") as HTMLInputElement;
const animalYearOfBirthInput = document.getElementById("animal-year-of-birth-input") as HTMLInputElement;
const animalSpecialNeedsInput = document.getElementById("animal-special-needs-input") as any;

const continentAndEnclosueOutput = document.getElementById("continent-enclosure-output") as HTMLElement;
const enclosureOutputArea = document.getElementById("enclosure-output") as HTMLElement;

submitNewAnimalForm.addEventListener("submit",(event:Event) => {
    event.preventDefault();
    getAnimalFromInputForm();
});

let allAnimals: Animal[] = [];
let aquaticHabitat: Animal[] = [
    {emoji: "🤡", name: "Nemo", yearOfBirth: "1872", continents: ["Africa", "Asia"], specialNeeds: ["freedom", "his friends"], enclosureId: 2},
    {emoji: "🐡", name: "Puffer", yearOfBirth: "1999", continents: ["Africa", "South-America"], specialNeeds: ["silence", "water"], enclosureId: 2}
];

let jungleHabitat: Animal [] = [
    {emoji: "🐒", name: "Charly", yearOfBirth: "1992", continents: ["Africa", "South-America"], specialNeeds: ["entertainment", "bananas"], enclosureId: 1},
    {emoji: "🐅", name: "Tigger", yearOfBirth: "2001", continents: ["Africa", "Asia"], specialNeeds: ["meat", "prey"], enclosureId: 1}
];

let savannahHabitat: Animal[] = [
    {emoji: "🦏", name: "Rhino", yearOfBirth: "2002", continents: ["Africa", "Asia"], specialNeeds: ["protection", "food"], enclosureId: 0},
    {emoji: "🐫", name: "Camel", yearOfBirth: "2003", continents: ["Africa", "Asia"], specialNeeds: ["no-water", "food"], enclosureId: 0}
];

let reptileHouse: Animal[] = [
    {emoji: "🐊", name: "Gator", yearOfBirth: "2004", continents: ["Africa", "Asia", "South-America"], specialNeeds: ["water", "swamps"], enclosureId: 3},
    {emoji: "🦎", name: "Gecko", yearOfBirth: "2005", continents: ["Africa", "Asia", "South-America"], specialNeeds: ["water", "swamps"], enclosureId: 3}
];

function outputAllAnimalsInEnclosures(enclosureArray:Animal[]){
    let aquaticOutput = enclosureOutputArea.appendChild(document.createElement("div"))
    enclosureArray.forEach(animal  => {
        let animalOutput = document.createElement("p");
        animalOutput.textContent = `${animal.emoji} ${animal.name} (Geburtsjahr: ${animal.yearOfBirth}), Kontinente: ${animal.continents.join(", ")}, Besondere Bedürfnisse: ${animal.specialNeeds.join(", ")}, Gehege-ID: ${animal.enclosureId}`;
        aquaticOutput.appendChild(animalOutput);
    });
}

outputAllAnimalsInEnclosures(aquaticHabitat);
outputAllAnimalsInEnclosures(jungleHabitat);
outputAllAnimalsInEnclosures(savannahHabitat);
outputAllAnimalsInEnclosures(reptileHouse);


function getAnimalFromInputForm(){

    let selectAnimalTypeValue = selectAnimalType.value;
    if (selectAnimalTypeValue.includes("Lion")){
            let newLion = new Lion("🦁", animalNameInput.value,  animalYearOfBirthInput.value, ["Africa", "Asia"], animalSpecialNeedsInput.value, 0);
            allAnimals.push(newLion);

    } else if (selectAnimalTypeValue.includes("Elephant")){
        let newElephant = new Elephant("🐘", animalNameInput.value,  animalYearOfBirthInput.value, ["Africa", "Asia"], animalSpecialNeedsInput.value, 0);
        allAnimals.push(newElephant);

    } else if (selectAnimalTypeValue.includes("Snake")){
        let newSnake = new Snake("🐍", animalNameInput.value,  animalYearOfBirthInput.value, ["Africa", "Everywhere"], animalSpecialNeedsInput.value, 1);
        allAnimals.push(newSnake);

    } else if (selectAnimalTypeValue.includes("Turtle")){
        let newTurtle = new Turtle("🐢", animalNameInput.value,  animalYearOfBirthInput.value, ["South-America", "Asia"], animalSpecialNeedsInput.value, 3);
        allAnimals.push(newTurtle);

    } else if (selectAnimalTypeValue.includes("Parrot")){
        let newParrot = new Parrot("🐦", animalNameInput.value,  animalYearOfBirthInput.value, ["Sri-Lanka", "Asia"], animalSpecialNeedsInput.value, 1);
        allAnimals.push(newParrot);

    } else if (selectAnimalTypeValue.includes("Eagle")){
        let newEagle = new Eagle("🦅", animalNameInput.value,  animalYearOfBirthInput.value, ["North-America", "Europe"], animalSpecialNeedsInput.value, 1);
        allAnimals.push(newEagle);

    } else if (selectAnimalTypeValue.includes("Fish")){
        let newFishes = new Fishes("🐠", animalNameInput.value,  animalYearOfBirthInput.value, ["Africa", "Everywhere"], animalSpecialNeedsInput.value, 2);
        allAnimals.push(newFishes);

    } else if (selectAnimalTypeValue.includes("Shark")){
        let newShark = new Shark("🦈", animalNameInput.value,  animalYearOfBirthInput.value, ["Africa", "Asia", "Australia"], animalSpecialNeedsInput.value, 2);
        allAnimals.push(newShark);
    } else{
        console.log("invalid Animal");
    }
    submitNewAnimalForm.reset();
    console.log(allAnimals);
};
