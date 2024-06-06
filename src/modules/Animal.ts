import { EnclosureId } from "./Enclosure";
class Animal {
    emoji: string = "";
    name: string = "";
    yearOfBirth: string = "";
    continents: string[] = [];
    specialNeeds: string[] = [];
    enclosureId: EnclosureId | undefined = undefined;

    constructor(emoji:string, name:string, yearOfBirth:string, continents: string[], specialNeeds:string[], enclosureId:EnclosureId){

        this.emoji = emoji;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.continents = continents;
        this.specialNeeds = specialNeeds;
        this.enclosureId = enclosureId;
    }

}

export {Animal};