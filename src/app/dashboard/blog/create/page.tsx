"use client";

import { useCurrentUserDetails } from "@/Hook/useCurrentUserDetails";
import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
interface BlogPost {
    _id?: string; // optional for new posts before saving to DB
    title: string;
    content: string;
    tags?: string[]; // optional: list of tags/keywords
    links?: {
        label: string;
        url: string;
    }[];
    authorId?: string; // optional: to associate post with a user
    createdAt?: string; // ISO date string
    updatedAt?: string; // ISO date string
    status?: "published" | "draft"; // useful for saving drafts
}

export default function CreatePostPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");

    const [linkLabel, setLinkLabel] = useState("");
    const [linkURL, setLinkURL] = useState("");
    const [links, setLinks] = useState<{ label: string; url: string }[]>([]);
    const { userDetails } = useCurrentUserDetails()

    const handleAddLink = () => {
        if (linkLabel && linkURL) {
            if (links.length >= 3) return toast.error('You can add maximum 3 Links')
            setLinks([...links, { label: linkLabel, url: linkURL }]);
            setLinkLabel("");
            setLinkURL("");
        }
    };

    const handleSubmit = async () => {
        const BlogData: BlogPost = {
            title,
            content,
            tags: tags.split(",").map((tag) => tag.trim()),
            links,
            authorId: userDetails?._id,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            status: 'published'

        };
        console.log(BlogData);


        // const res = await fetch("/api/posts", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(postData),
        // });

        // if (res.ok) {
        //     setTitle("");
        //     setContent("");
        //     setTags("");
        //     setLinks([]);
        // }
    };

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg mt-12 transition-colors duration-500">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                Create Blog Post
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Left Side: Title + Tags */}
                <div className="space-y-4">
                    <label>
                        <span className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Post Title
                        </span>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        />
                    </label>

                    <label>
                        <span className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Tags (comma-separated)
                        </span>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="e.g. React, TypeScript"
                            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        />
                    </label>
                    <div className="grid w-full p-2 items-center gap-3">
                        <Label htmlFor="picture">Picture</Label>
                        <Input id="picture" type="file" />
                    </div>
                </div>

                {/* Right Side: Resource Links */}
                <div className="space-y-4">
                    <label>
                        <span className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Add Resource Link
                        </span>
                        <div className="flex flex-col md:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="Label (e.g. GitHub)"
                                value={linkLabel}
                                onChange={(e) => setLinkLabel(e.target.value)}
                                className="flex-1 p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            />
                            <input
                                type="url"
                                placeholder="https://example.com"
                                value={linkURL}
                                onChange={(e) => setLinkURL(e.target.value)}
                                className="flex-1 p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
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
                                    className="relative p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm"
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
                                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
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
                <span className="text-gray-700 dark:text-gray-300 font-semibold mb-1 block">
                    Content
                </span>
                <textarea
                    placeholder="Write your blog post here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={12}
                    className="w-full p-3 border rounded-lg resize-y bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
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
