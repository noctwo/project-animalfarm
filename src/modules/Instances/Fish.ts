import { Fish } from "../Fish";
import { EnclosureId } from "../Enclosure";

class Fishes extends Fish{

    constructor(emoji:string, name:string, yearOfBirth:string, continents: string[], specialNeeds:string[], enclosureId:EnclosureId){
        super(emoji,name, yearOfBirth, continents, specialNeeds, enclosureId)
    }
}

export{Fishes};