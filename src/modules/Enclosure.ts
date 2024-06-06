enum EnclosureId {
    SavannahHabitat,
    JungleHabitat,
    AquaticHabitat,
    ReptileHouse
}

class Enclosure {
	id: EnclosureId;
    name: string;
    builtInYear: string;

    constructor(id:EnclosureId, name:string, buildInYear:string){
        this.id = id;
        this.name = name;
        this.builtInYear = buildInYear;
    }

}

export {EnclosureId, Enclosure};