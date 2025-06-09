"use client";

import { useState } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Please fill in both title and content");
      return;
    }

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      alert("Post created successfully!");
      setTitle("");
      setContent("");
    } else {
      alert("Failed to create post.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Create Blog Post</h1>

      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="Write your post content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        className="w-full p-2 border rounded resize-y"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Publish
      </button>
    </div>
  );
}
