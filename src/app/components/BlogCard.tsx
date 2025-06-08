import Image from "next/image"

interface BlogCard {
    title: string
    summary: string
    author: string
    date: string
    slug?: string
    image?: string
}

import React from 'react';

const BlogCard = ({ title, summary, author, date, slug, image }: BlogCard) => {
    return (
        <div id='post-body' className="border rounded-lg overflow-hidden shadow-md ">

            {image && (
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{summary}</p>
            </div>
            <div className="border-t">
                <div className="flex items-center justify-between p-4">
                    <div>
                        <p className="text-xs text-muted-foreground">By {author}</p>
                        <p className="text-xs text-muted-foreground">{date}</p>
                    </div>
                    {slug && (
                        <a href={`/blog/${slug}`} className="text-blue-500 hover:underline">
                            Read more
                        </a>
                    )}

                </div>
            </div>
        </div>
    );
};

export default BlogCard;
