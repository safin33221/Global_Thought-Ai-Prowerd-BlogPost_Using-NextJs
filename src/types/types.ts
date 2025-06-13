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

export interface BlogLink {
  label: string;
  url: string;
}

export interface BlogAuthor {
  name: string;
  email: string;
  authorId: string;
  avatarUrl:string;
}

export interface BlogPost {
  _id?: string;
  title: string;
  cover: string;
  content: string;
  tags: string[];
  links: BlogLink[];
  author: BlogAuthor;
  createdAt: string;
  updatedAt: string;
  status: "published" | "draft";
}


