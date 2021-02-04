export interface IUser {
    id: number;
    name: string;
    email: string;
    username: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
}

export interface IRoom {
    id: number;
    name: string;
    topic: string;
    members: number;
    createdAt: string;
    updatedAt: string;
}
