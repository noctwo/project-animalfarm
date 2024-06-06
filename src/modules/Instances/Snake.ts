import { Reptile } from "../Reptile";
import { EnclosureId } from "../Enclosure";

class Snake extends Reptile{

    constructor(emoji:string, name:string, yearOfBirth:string, continents: string[], specialNeeds:string[], enclosureId:EnclosureId){
        super(emoji,name, yearOfBirth, continents, specialNeeds, enclosureId)
    }
}

export{Snake};