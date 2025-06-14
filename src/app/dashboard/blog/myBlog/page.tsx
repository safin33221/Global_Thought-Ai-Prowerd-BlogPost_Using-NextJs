'use client';

import { useCurrentUserDetails } from '@/Hook/useCurrentUserDetails';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import Loader from '@/app/components/Loader';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/types/types';

const MyBlog = () => {
  const { userDetails } = useCurrentUserDetails();

  const {
    data: blogs = [],
    isLoading,
    refetch,
    error,
  } = useQuery<BlogPost[]>({
    queryKey: ['blog', userDetails?.email],
    enabled: !!userDetails?.email,
    queryFn: async () => {
      const res = await axios.get(`/api/blog/by-email/${userDetails?.email}`);
      return res?.data?.blogs;
    },
  });

  if (isLoading) return <Loader />;

  if (error)
    return (
      <div className="text-center text-red-500 py-10">
        Failed to load blogs.{' '}
        {error instanceof Error ? error.message : String(error)}
      </div>
    );

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      {blogs.length === 0 ? (
        <div className="text-center flex items-center justify-center   text-2xl font-bold mt-20">
          You haven’t written any blog posts yet.
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post: BlogPost) => (
            <BlogCard key={post._id} {...post} refetch={refetch} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlog;
