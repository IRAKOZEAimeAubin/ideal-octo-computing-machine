type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    cardDetails?: number
};

const createUser = (user: User) => {}