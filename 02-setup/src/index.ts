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

const jd = new User( "jd@jd.com", "john doe" );