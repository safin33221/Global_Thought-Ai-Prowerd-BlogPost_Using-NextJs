import { BlogPost } from "@/types/types";
import Image from "next/image"



import React from 'react';

const BlogCard = ({ title, content, authorId, cover, publishedAt,_id }: BlogPost) => {
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
                    <div>
                        <p className="text-xs text-muted-foreground">By {authorId}</p>
                        <p className="text-xs text-muted-foreground">{publishedAt}</p>
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
