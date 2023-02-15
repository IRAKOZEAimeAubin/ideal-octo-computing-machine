function genericOne<T> ( val: T ): T {
    return val
}

interface Shinobi {
    name: string,
    rank: string
}

genericOne<Shinobi>({
    name: "",
    rank: ""
} );

function getJinchuuriki<T> ( jinchuurikis: T[] ): T {
    let jinchuuriki: number = 4
    return jinchuurikis[ jinchuuriki ]
}

const getVessels = <T> ( vessels: T[] ): T => {
    return vessels[ 2 ]
}