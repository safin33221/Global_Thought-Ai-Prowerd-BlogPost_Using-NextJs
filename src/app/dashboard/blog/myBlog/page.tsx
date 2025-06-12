"use client"
import BlogCard from '@/app/components/BlogCard';
import { useCurrentUserDetails } from '@/Hook/useCurrentUserDetails';
import { BlogPost } from '@/types/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyBlog = () => {
    const { userDetails } = useCurrentUserDetails()
    const [blogs, setBlogs] = useState<BlogPost[]>([])
    useEffect(() => {
        if (userDetails?.email) {

            const getBLogData = async () => {
                const res = await axios.get(`/api/blog/by-email/${userDetails?.email}`)
                setBlogs(res?.data?.blogs);
            }
            getBLogData()
        }
    }, [userDetails?.email])


    return (
        <div>
            <div className="container mx-auto px-4 text-center">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((post) => (
                        <BlogCard key={post._id} {...post} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default MyBlog;