class User {
    email: string
    name: string
    role: string = ""
    constructor( email: string, name: string ) {
        this.email = email;
        this.name = name
    }
}

class Ninja {
    readonly isHokage: boolean = false
    constructor( private name: string, private age: number, private rank: string, private status: string ) { }
    get getName (): string{
        return this.name
    }
    set setRank ( rank: string ) {
        this.rank = rank
    }
}

interface CursedEnergy {
    level: string
    isPresent (): boolean
}

class Sorcerer implements CursedEnergy{
    constructor( public level: string ) { }
    isPresent(): boolean {
        return true
    }
}

const jd = new User( "jd@jd.com", "john doe" );