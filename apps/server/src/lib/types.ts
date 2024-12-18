declare module 'express' {
    interface Request {
        user?: {
            id: string;
            email: string;
        }
    }
}

export { }