import BlogCard from '@/app/components/BlogCard';
import SectionTitle from '@/app/components/SectionTitle';
import React from 'react';

const page = () => {
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
            title: "The Rise of AI in Blogging",
            image: "https://framerusercontent.com/images/RBpHBZtwSkU6uF9GENaXtaZ4ozU.png",
            summary: "Explore how AI is transforming the way we write and discover content.",
            slug: "rise-of-ai-in-blogging",
            author: "Jane Doe",
            date: "2025-01-01",
        },
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
    return (
        <div>
            <section className="">
               
                <div className="container mx-auto px-4 text-center">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {featuredPosts.map((post) => (
                            <BlogCard key={post.slug} {...post} />
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;