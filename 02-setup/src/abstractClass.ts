abstract class Nen {
    constructor( affinity: boolean, type: string ) { }
    abstract ability():string
}

class Hunter extends Nen {
    constructor( private affinity: boolean, private type: string, private name: string ) {
        super( affinity, type )
    }
    ability(): string {
        return "bunjee gum"
    }
}