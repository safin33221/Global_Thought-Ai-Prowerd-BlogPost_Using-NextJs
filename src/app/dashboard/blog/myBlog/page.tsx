"use client"

import { useCurrentUserDetails } from '@/Hook/useCurrentUserDetails';
import { BlogPost } from '@/types/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Loader from '@/app/components/Loader';

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

    if(!blogs) return <Loader/>


    return (
        <div>
            <div className=" text-center">
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                    {blogs.map((post) => (
                        <BlogCard key={post._id} {...post} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default MyBlog;