import { BlogPost } from "@/types/types";
import Image from "next/image"



import React from 'react';

const BlogCard = ({ title, content, author, cover, createdAt, _id }: BlogPost) => {
    return (
        <div id='post-body' className="border rounded-lg overflow-hidden shadow-md ">

            {cover && (
                <Image
                    src={cover}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{content}</p>
            </div>
            <div className="border-t">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <Image
                            src={author?.avatarUrl}
                            alt="Profile"
                            width={20}
                            height={20}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="text-left">
                            <h3 className="text-md font-bold text-muted-foreground">By {author.name}</h3>
                            <p className="text-xs text-muted-foreground">
                                {new Date(createdAt).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}
                            </p>
                        </div>
                    </div>
                    {_id && (
                        <a href={`/blog/${_id}`} className="text-blue-500 hover:underline">
                            Read more
                        </a>
                    )}

                </div>
            </div>
        </div>
    );
};

export default BlogCard;
