import { EnclosureId } from "../Enclosure";
import { Reptile } from "../Reptile";

class Turtle extends Reptile{

    constructor(emoji:string, name:string, yearOfBirth:string, continents: string[], specialNeeds:string[], enclosureId:EnclosureId){
        super(emoji,name, yearOfBirth, continents, specialNeeds, enclosureId)
    }
}

export{Turtle};