'use client';

import { useState } from 'react';
import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { BlogPost } from '@/types/types';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import toast from 'react-hot-toast';

interface BlogCardProps extends BlogPost {
    refetch: () => void;
}

const BlogCard = ({
    title,
    content,
    author,
    cover,
    createdAt,
    links,
    tags,
    _id,
    status,
    refetch,
}: BlogCardProps) => {
    const [open, setOpen] = useState(false);
    const [editableBlog, setEditableBlog] = useState({
        title: title,
        content: content,
        tags: tags.join(', '),
        status: status,
        links: links.map((link) => ({ ...link })),
    });

    const handleLinkChange = (
        index: number,
        key: 'label' | 'url',
        value: string
    ) => {
        const updatedLinks = [...editableBlog.links];
        updatedLinks[index][key] = value;
        setEditableBlog((prev) => ({
            ...prev,
            links: updatedLinks,
        }));
    };

    const handleUpdate = async () => {
        const toastId = toast.loading('Updating');
        try {
            const data = {
                ...editableBlog,
                tags: editableBlog.tags.split(',').map((tag) => tag.trim()),
            };
            const res = await axios.put(`/api/blog/${_id}`, data);

            if (res.status === 200 && !res.data.error) {
                refetch();
                toast.success('Blog Updated', { id: toastId });
                setOpen(false);
            } else {
                toast.error(res.data?.error || 'Something went wrong', {
                    id: toastId,
                });
            }
        } catch (error) {
            if(error){

                toast.error('Something went wrong', { id: toastId });
            }
        }
    };

    const handleDelete = async (id: string) => {
        const deleteBlog = toast.loading('Deleting');
        try {
            const res = await axios.delete(`/api/blog/${id}`);

            if (res.status === 200 || !res.data.error) {
                refetch();
                toast.success('Delete Successful', { id: deleteBlog });
            } else {
                toast.error(res.data?.error || 'Something went wrong', {
                    id: deleteBlog,
                });
            }
        } catch (error) {
            if (error) {

                toast.error('Something went wrong', { id: deleteBlog });
            }
        }
    };

    return (
        <div>
            <div className="rounded-xl shadow-md overflow-hidden max-w-md mx-auto h-full flex flex-col justify-between ">
                <div className="relative">
                    <Image
                        src={cover}
                        alt={title}
                        width={600}
                        height={300}
                        className="object-cover w-full h-60"
                    />
                    <button
                        type="button"
                        onClick={() => handleDelete(_id)}
                        className="absolute top-3 right-16 bg-black/80 text-red-500 p-2 rounded-full shadow text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trash2-icon lucide-trash-2"
                        >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                    </button>

                    <Button
                        onClick={() => setOpen(true)}
                        variant="ghost"
                        className="absolute top-3 right-3 bg-black/80 hover:bg-black/80 p-2 rounded-full shadow"
                    >
                        <Pencil className="w-5 h-5 text-yellow-500" />
                    </Button>



                </div>

                <div className="p-5">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm mt-1 line-clamp-3 whitespace-pre-line">
                        {content}
                    </p>
                </div>

                <div className="flex items-center justify-between px-5 pb-4 pt-2">
                    <div className="flex items-center space-x-3">
                        <Image
                            src={author.avatarUrl}
                            alt={author.name}
                            width={36}
                            height={36}
                            className="rounded-full object-cover"
                        />
                        <div className="text-sm text-left">
                            <p className="font-medium"> {author.name}</p>
                            <p className="text-xs">
                                {new Date(createdAt).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {open && (
                <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center h-full overflow-y-scroll">
                    <div className="bg-white max-w-4xl w-full mx-4 md:mx-auto rounded-xl shadow-lg p-6 relative">
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-black"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>

                        <div className="flex flex-col gap-4 py-2">
                            <Input
                                placeholder="Title"
                                value={editableBlog.title}
                                onChange={(e) =>
                                    setEditableBlog({ ...editableBlog, title: e.target.value })
                                }
                            />
                            <Textarea
                                rows={5}
                                placeholder="Content"
                                value={editableBlog.content}
                                onChange={(e) =>
                                    setEditableBlog({
                                        ...editableBlog,
                                        content: e.target.value,
                                    })
                                }
                            />
                            <Input
                                placeholder="Tags (comma separated)"
                                value={editableBlog.tags}
                                onChange={(e) =>
                                    setEditableBlog({
                                        ...editableBlog,
                                        tags: e.target.value,
                                    })
                                }
                            />
                            <select
                                value={editableBlog.status}
                                onChange={(e) =>
                                    setEditableBlog({
                                        ...editableBlog,
                                        status: e.target.value as 'published' | 'draft',
                                    })
                                }
                                className="border px-3 py-2 rounded-md"
                            >
                                <option value="published">Published</option>
                                <option value="draft">Draft</option>
                            </select>

                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-700">Links</p>
                                {editableBlog.links.map((link, index) => (
                                    <div key={index} className="flex gap-2">
                                        <Input
                                            placeholder="Label"
                                            value={link.label}
                                            onChange={(e) =>
                                                handleLinkChange(index, 'label', e.target.value)
                                            }
                                        />
                                        <Input
                                            placeholder="URL"
                                            value={link.url}
                                            onChange={(e) =>
                                                handleLinkChange(index, 'url', e.target.value)
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='flex gap-5 w-full justify-end'>

                                <Button type="button" className='' onClick={handleUpdate}>
                                    Save Changes
                                </Button >
                                <Button type='button' className='' onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogCard;
