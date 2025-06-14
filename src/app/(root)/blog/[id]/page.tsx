'use client';

import Loader from '@/app/components/Loader';
import { BlogPost } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data: blog, isLoading } = useQuery<BlogPost>({
    queryKey: ['blog', id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axios.get(`/api/blog/${id}`);
      return res.data.blog;
    },
  });

  if (isLoading) return <Loader />;

  if (!blog) return <div className="text-center text-gray-500">No blog found</div>;

  return (
    <div className="w-full mx-auto p-6 grid grid-cols-1 gap-4 items-center">
      <div>
        <Image
          src={blog.cover}
          alt="Cover Image"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full object-cover h-[450px]"
        />
      </div>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <Image
            src={blog.author?.avatarUrl}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full w-16 h-16"
          />
          <div>
            <p className="font-semibold">{blog.author?.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <div className="prose prose-lg mb-6 whitespace-pre-line">{blog.content}</div>
          </div>

          <div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Tags:</h3>
              <div className="flex gap-2 flex-wrap">
                {blog.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {blog.links?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Related Links:</h3>
                <ul className="list-disc list-inside">
                  {blog.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
