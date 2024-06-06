enum EnclosureId {
    SavannahHabitat,
    JungleHabitat,
    AquaticHabitat,
    ReptileHouse
}

class Enclosure {
	id: EnclosureId;

    constructor(id:EnclosureId){
        this.id = id;
    }

}

export {EnclosureId, Enclosure};