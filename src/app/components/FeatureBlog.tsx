"use client";

import BlogCard from "./BlogCard";




import React, { useEffect, useState } from 'react';
import SectionTitle from "./SectionTitle";
import axios from "axios";
import { BlogPost } from "@/types/types";
import Loader from "./Loader";
import toast from "react-hot-toast";

const FeatureBlog = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('/api/blog');
                setBlogs(res.data.blogs);
            } catch (error) {
                if (error) {

                    toast.error('Error fetching blogs:', error);
                }
            }
        };
        getData();
    }, []);
    if (!blogs) return <Loader />
    return (
        <div>
            <section className="">
                <SectionTitle title="🚀 Featured Blog Posts" subtitle="Highlighting the best reads of the week." />
                <div className="container mx-auto px-4 text-center">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.slice(0, 3).map((post) => (
                            <BlogCard key={post._id} {...post} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureBlog;