'use client';

import { useState } from 'react';
import { Pencil } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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


const BlogCard = ({ title, content, author, cover, createdAt, links, tags, _id, status, refetch }: BlogCardProps) => {
    const [open, setOpen] = useState(false);
    const [editableBlog, setEditableBlog] = useState({
        title: title,
        content: content,
        tags: tags.join(', '),
        status: status,
        links: links.map((link) => ({ ...link })),
    });

    const handleLinkChange = (index: number, key: 'label' | 'url', value: string) => {
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
                refetch()
                toast.success('Blog Updated', { id: toastId });
                setOpen(false);
            } else {
                toast.error(res.data?.error || 'Something went wrong', { id: toastId });
            }
        } catch (error) {
            if (error) {
                toast.error('Something went wrong', { id: toastId });
            }
        }
    };
    return (
        <div className=" rounded-xl shadow-md overflow-hidden max-w-md mx-auto" >
            <div className="relative">
                <Image
                    src={cover}
                    alt={title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-60"
                />
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button
                            variant="ghost"
                            className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                        >
                            <Pencil className="w-5 h-5 text-gray-700" />
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-5xl w-full">
                        <DialogHeader>
                            <DialogTitle>Edit Blog</DialogTitle>
                        </DialogHeader>

                        <div className="flex flex-col gap-4 py-2">
                            <Input
                                placeholder="Title"
                                value={editableBlog.title}
                                onChange={(e) => setEditableBlog({ ...editableBlog, title: e.target.value })}
                            />
                            <Textarea
                                rows={5}
                                placeholder="Content"
                                value={editableBlog.content}
                                onChange={(e) => setEditableBlog({ ...editableBlog, content: e.target.value })}
                            />
                            <Input
                                placeholder="Tags (comma separated)"
                                value={editableBlog.tags}
                                onChange={(e) => setEditableBlog({ ...editableBlog, tags: e.target.value })}
                            />
                            <select
                                value={editableBlog.status}
                                onChange={(e) =>
                                    setEditableBlog({ ...editableBlog, status: e.target.value as 'published' | 'draft' })
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
                                            onChange={(e) => handleLinkChange(index, 'label', e.target.value)}
                                        />
                                        <Input
                                            placeholder="URL"
                                            value={link.url}
                                            onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>

                            <Button type='button' onClick={handleUpdate}>Save Changes</Button>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>

            <div className="p-5">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-300 mt-1 line-clamp-3 whitespace-pre-line">
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
                    <div className="text-sm">
                        <p className="font-medium">By {author.name}</p>
                        <p className=" text-gray-300 text-xs">
                            {new Date(createdAt).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    </div>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm">
                    Read more
                </a>
            </div>
        </div >
    );
};

export default BlogCard;
