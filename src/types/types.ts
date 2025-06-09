export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    bio?: string;
    avatarUrl?: string; // Optional profile picture
    role?: "USER" | "ADMIN"
    createdAt?: string;
    updatedAt?: string;

}

export interface loginPayload {
    email: string;
    password: string;
}
