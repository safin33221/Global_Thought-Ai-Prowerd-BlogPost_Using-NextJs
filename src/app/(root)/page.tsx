"use client";


import React from 'react';
import BlogPostHero from '../components/BlogPostHero';
import FeatureBlog from '../components/FeatureBlog';
import AiShowcase from '../components/AiShowcase';


const page = () => {
  return (
    <div className="flex flex-col items-center justify-center
     ">
      <BlogPostHero
        title="Unlocking AI's Potential in Content Creation"
        excerpt="Global Thought uses cutting-edge AI to help you write faster, smarter, and more creatively than ever before."
        coverUrl="/images/heroBackground.jpg"
        author={{
          name: "Safin chowdhury",
          avatar: "https://i.pravatar.cc/100?img=3",
        }}
        publishedAt="2025-06-08"
        readTime="4 min read"
        tags={["AI", "Content", "Blogging"]}
      />

      <div className='container'>
        <FeatureBlog />
        <AiShowcase />
      </div>

    </div>
  );
};

export default page;
