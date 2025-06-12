"use client"


import { BlogPost } from '@/types/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SingleBlog = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [blog, setBLog] = useState<object>({})
    useEffect(() => {
        const getSinglePost = async () => {
            const res = await axios.get(`/api/blog/${id}`)
            console.log(res.data);
        }
        getSinglePost()
    }, [id])


    return (
        <div>
            {/* <div id='post-body' className="border rounded-lg flex-col overflow-hidden shadow-md max-w-5xl m-auto items-center justify-center  ">

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
            </div> */}
        </div>
    );
};

export default SingleBlog;