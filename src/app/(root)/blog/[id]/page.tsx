"use client"

import Image from 'next/image';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
    const { id } = params
    const featuredPosts = [
        {
            title: "The Rise of AI in Blogging",
            image: "https://framerusercontent.com/images/RBpHBZtwSkU6uF9GENaXtaZ4ozU.png",
            summary: "Explore how AI is transforming the way we write and discover content.",
            slug: "rise-of-ai-in-blogging",
            author: "Jane Doe",
            date: "2025-01-01",
        },
        {
            title: "Boost Productivity with GPT",
            image: "https://www.growthbarseo.com/wp-content/uploads/2022/05/ai-blog-post-ideas-1-1024x1010.png",
            summary: "Use AI tools to write faster and better.",
            slug: "boost-productivity-gpt",
            author: "John Smith",
            date: "2025-02-01",
        },
        {
            title: "Harnessing AI for Creative Writing",
            image: "https://www.growthbarseo.com/wp-content/uploads/2022/05/ai-blog-post-ideas-1-1024x1010.png",
            summary: "Use AI tools to write faster and better.",
            slug: "harnessing-ai-creative-writing",
            author: "Alice Johnson",
            date: "2025-03-01",
        },
    ];
    const details = featuredPosts.filter(post => post.slug === id)[0]
    const { image, title, summary, date, author, slug } = details;

    return (
        <div>
            <div id='post-body' className="border rounded-lg flex-col overflow-hidden shadow-md max-w-5xl m-auto items-center justify-center  ">

                {image && (
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={400}
                        className="w-full  object-cover"
                    />
                )}
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{summary}</p>
                </div>
                <div className="border-t ">
                    <div className="">
                        <div className='flex flex-col'>
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
        </div>
    );
};

export default page;