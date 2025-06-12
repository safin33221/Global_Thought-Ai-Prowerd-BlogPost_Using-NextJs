'use client';

import { useState } from 'react';
import { Pencil } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { BlogPost } from '@/types/types';




const BlogCard = ({ title, content, author, cover, createdAt }: BlogPost) => {
    const [open, setOpen] = useState(false);

        return (
            <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-md mx-auto">
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
                                size="icon"
                                variant="ghost"
                                className="absolute top-3 right-3 bg-white/70 hover:bg-white"
                            >
                                <Pencil className="h-5 w-5 text-gray-700" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                            <DialogHeader>
                                <DialogTitle>Edit Post</DialogTitle>
                            </DialogHeader>
                            {/* 🔧 Replace this with your actual form */}
                            <div className="text-sm text-muted-foreground">
                                Edit functionality coming soon!
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="p-5">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-3 whitespace-pre-line">
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
                            <p className="text-muted-foreground text-xs">
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
            </div>
        );
};

export default BlogCard;
