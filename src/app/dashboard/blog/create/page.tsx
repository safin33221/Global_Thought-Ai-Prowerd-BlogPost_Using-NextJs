"use client";

import axios from "axios";
import { useCurrentUserDetails } from "@/Hook/useCurrentUserDetails";
import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handleImageUpload } from "@/utils";
import { BlogLink, BlogPost } from "@/types/types";

// Interfaces


export default function CreatePostPage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const [linkLabel, setLinkLabel] = useState<string>("");
  const [linkURL, setLinkURL] = useState<string>("");
  const [links, setLinks] = useState<BlogLink[]>([]);
  const [imageUrl, setImageUrl] = useState<string>("");
  const { userDetails } = useCurrentUserDetails();

  const handleAddLink = () => {
    if (linkLabel && linkURL) {
      if (links.length >= 3) return toast.error('You can add maximum 3 Links');
      setLinks([...links, { label: linkLabel, url: linkURL }]);
      setLinkLabel("");
      setLinkURL("");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await handleImageUpload(file);
    setImageUrl(url);
  };

  const handleSubmit = async () => {
    if (!userDetails) return toast.error("User not found!");

    if (!title || !content || !tags  || !links || !imageUrl) {
      return toast.error('All filled are require')
    }
    if(content.length <250){
      return toast.error("You have Write Content minimum 250 chart")
    }

    const BlogData: BlogPost = {
      title,
      cover: imageUrl,
      content,
      tags: tags.split(",").map((tag) => tag.trim()),
      links,
      author: {
        name: userDetails?.name,
        email: userDetails?.email,
        authorId: userDetails?._id ?? "",
        avatarUrl: userDetails?.avatarUrl ?? "",
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'published'
    };
    const res = await axios.post("/api/blog", BlogData);
    if (res.status === 201) {
      toast.success("Blog published successfully");
      setTitle("");
      setContent("");
      setTags("");
      setLinks([]);
      setImageUrl("");
      

    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 dark:bg-zinc-900 rounded-xl shadow-lg mt-12 transition-colors duration-500">
      <h1 className="text-4xl font-extrabold text-center text-zinc-900 dark:text-white mb-8">
        Create Blog Post
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left Side: Title + Tags */}
        <div className="space-y-4">
          <label>
            <span className="block font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
              Post Title
            </span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter title"
              className="w-full p-3 border rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
            />
          </label>

          <label>
            <span className="block font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
              Tags (comma-separated)
            </span>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required
              placeholder="e.g. React, TypeScript"
              className="w-full p-3 border rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
            />
          </label>
          <div className="grid w-full p-2 items-center gap-3">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file"
              onChange={handleFileChange} />
            required
          </div>
        </div>

        {/* Right Side: Resource Links */}
        <div className="space-y-4">
          <label>
            <span className="block font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
              Add Resource Link
            </span>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Label (e.g. GitHub)"
                value={linkLabel}
                onChange={(e) => setLinkLabel(e.target.value)}
                required
                className="flex-1 p-3 border rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
              />
              <input
                type="url"
                placeholder="https://example.com"
                value={linkURL}
                onChange={(e) => setLinkURL(e.target.value)}
                required
                className="flex-1 p-3 border rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
              />
              <button
                onClick={handleAddLink}
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Add
              </button>
            </div>
          </label>

          {links.length > 0 && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2  gap-3">
              {links.map((link, i) => (
                <div
                  key={i}
                  className="relative p-2 border rounded-lg bg-zinc-100 dark:bg-zinc-800 shadow-sm"
                >
                  <button
                    onClick={() => {
                      const updated = [...links];
                      updated.splice(i, 1);
                      setLinks(updated);
                    }}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    aria-label="Remove link"
                  >
                    <X size={18} />
                  </button>
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {link.label}:
                    </p>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm underline break-all"
                    >
                      {link.url}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Content Full Width */}
      <label className="block mb-6">
        <span className="text-zinc-700 dark:text-zinc-300 font-semibold mb-1 block">
          Content
        </span>
        <textarea
          placeholder="Write your blog post here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          className="w-full p-3 border rounded-lg resize-y bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
        />
      </label>

      {/* Publish Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Publish
      </button>
    </div>
  );
}