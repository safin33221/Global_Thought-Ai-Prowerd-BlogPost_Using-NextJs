"use client";
import BlogPostHero from "./components/BlogPostHero";

import FeatureBlog from "./components/FeatureBlog";

import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center
     ">
      <BlogPostHero
        title="Unlocking AI's Potential in Content Creation"
        excerpt="ThinkPost uses cutting-edge AI to help you write faster, smarter, and more creatively than ever before."
        coverUrl="/images/heroBackground.jpg"
        author={{
          name: "Safin chowdhury",
          avatar: "https://i.pravatar.cc/100?img=3",
        }}
        publishedAt="2025-06-08"
        readTime="4 min read"
        tags={["AI", "Content", "Blogging"]}
      />

      <FeatureBlog  />

    </div>
  );
};

export default page;
