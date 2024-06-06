import { Mamal } from "../Mamal";
import { EnclosureId } from "../Enclosure";

class Lion extends Mamal{

    constructor(emoji:string, name:string, yearOfBirth:string, continents: string[], specialNeeds:string[], enclosureId:EnclosureId){
        super(emoji,name, yearOfBirth, continents, specialNeeds, enclosureId)
    }
}

export{Lion};