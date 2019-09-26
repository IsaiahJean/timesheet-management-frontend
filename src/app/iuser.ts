// Interface contains user fields only
export interface Iuser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

//Edit user interface
export interface IeditUser {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
}

// Interface contains description data
export interface Idescription {
    user: number;
    description: string;
}

// Interface contains the whole user object
export interface Iuser_description{
    id: number;
    user: {
        id: number;
        first_name: string;
        last_name: string;
        username: string;
        email: string;    
    }
    description: string;
}