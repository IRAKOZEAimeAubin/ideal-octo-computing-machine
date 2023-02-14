interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: number,
    startTrial: () => string,
    getCoupon(couponName: string): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta"
}

const user: Admin = {
    dbId: 22,
    role: "admin",
    email: "a@aai.com",
    userId: 4488,
    githubToken: "github",
    startTrial: () => "trial started",
    getCoupon: (name: "hello") => 88
}