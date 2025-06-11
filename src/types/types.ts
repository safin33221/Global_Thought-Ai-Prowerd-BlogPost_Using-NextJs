export interface User {
  _id?:string;
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

export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  cover?: string;
  authorId: string;
  category?: string;
  tags?: string[];
  published: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}


