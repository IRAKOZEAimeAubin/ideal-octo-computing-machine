let age: number | string = 24;

age = "twenty two";

type User = {
    id: number
    name: string
}

type Admin = {
    id: number
    userName: string
}

let user: User | Admin = {
    id: 4444,
    name: ""
}

user = {
    id: 1234,
    userName: "Sengoku"
}

let states: "liquid" | "solid" | "gaseous" | "plasma"

const data: ( string | number )[] = [ "1", 2, "3", 4 ]

const getInfo = ( info: string | number ) => {
    if ( typeof ( info ) === "string" ) return info.toUpperCase
    return info + 4
}

export {}