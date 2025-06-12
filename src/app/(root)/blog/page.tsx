"use client"
import BlogCard from '@/app/components/BlogCard';
import { BlogPost } from '@/types/types';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('/api/blog');
                setBlogs(res.data.blogs);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        getData();
    }, []);


    return (
        <div>
            <section className="">

                <div className="container mx-auto px-4 text-center">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs?.map((post) => (
                            <BlogCard key={post._id} {...post} />
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;