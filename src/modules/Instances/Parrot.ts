import { Bird } from "../Bird";
import { EnclosureId } from "../Enclosure";

class Parrot extends Bird{

    constructor(emoji:string, name:string, yearOfBirth:string, continents: string[], specialNeeds:string[], enclosureId:EnclosureId){
        super(emoji,name, yearOfBirth, continents, specialNeeds, enclosureId)
    }
}

export{Parrot};