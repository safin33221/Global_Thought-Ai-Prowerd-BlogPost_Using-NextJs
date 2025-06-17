"use client";

import BlogCard from "./BlogCard";




import React, { useEffect, useState } from 'react';
import SectionTitle from "./SectionTitle";
import axios from "axios";
import { BlogPost } from "@/types/types";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import BlogCardSkeleton from "./Skeleton/BlogCardSkeleton";

const FeatureBlog = () => {


    const { data: blogs = [], isPending, isError, error } = useQuery<BlogPost[]>({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axios.get('/api/blog')
            return res?.data?.blogs
        }
    })



    return (
        <div>
            <section className=" ">
                <SectionTitle title="🚀 Featured Blog Posts" subtitle="Highlighting the best reads of the week." />
                <div className=" mx-auto px-4 text-center">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {isPending ? (
                            Array.from({ length: 3 }).map((_, idx) => (
                                <BlogCardSkeleton key={idx} />
                            ))
                        ) : (
                            blogs?.slice(0, 3).map((post) => (
                                <BlogCard key={post._id} {...post} />
                            ))
                        )}
                    </div>

                </div>

            </section>
        </div>
    );
};

export default FeatureBlog;