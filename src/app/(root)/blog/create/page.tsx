"use client";

import { useState } from "react";


export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg mt-12 transition-colors duration-500">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
        Create Blog Post
      </h1>

      <label className="block mb-4">
        <span className="text-gray-700 dark:text-gray-300 font-semibold mb-1 block">
          Post Title
        </span>
        <input
          type="text"
          placeholder="Enter your post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </label>

      <label className="block mb-6">
        <span className="text-gray-700 dark:text-gray-300 font-semibold mb-1 block">
          Content
        </span>
        <textarea
          placeholder="Write your post content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg resize-y bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </label>

      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
        type="button"
      >
        Publish
      </button>
    </div>
  );
}
