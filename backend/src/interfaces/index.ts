export interface IUser {
    githubId: string;
    name: string;
    username: string;
    email: string;
    avatar: string;
}

export interface IRoom {
    name: string;
    topic: string;
    members: number;
}
