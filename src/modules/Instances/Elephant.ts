import { Mamal } from "../Mamal";
import { EnclosureId } from "../Enclosure";

class Elephant extends Mamal{

    constructor(emoji:string, name:string, yearOfBirth:string, continents: string[], specialNeeds:string[], enclosureId:EnclosureId){
        super(emoji,name, yearOfBirth, continents, specialNeeds, enclosureId)
    }
}

export{Elephant};