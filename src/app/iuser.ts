// Interface contains user fields only
export interface Iuser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

// Interface contains description data
export interface Idescription {
    user_id: number;
    description: string;
}

// Interface contains the whole user object
export interface Iuser_description{
    user: {
        id: number;
        first_name: string;
        last_name: string;
        username: string;
        email: string;    
    }
    description: string;
}