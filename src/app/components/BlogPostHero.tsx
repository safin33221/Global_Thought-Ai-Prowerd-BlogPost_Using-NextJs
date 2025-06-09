"use client"

import Image from "next/image"
import Link from "next/link"

interface BlogPostHeroProps {
    title: string
    excerpt: string
    coverUrl: string
    author: {
        name: string
        avatar: string
    }
    publishedAt: string
    readTime: string
    tags?: string[]
}

export default function BlogPostHero({
    title,
    excerpt,
    coverUrl,
    author,
    publishedAt,
    readTime,
    tags = [],
}: BlogPostHeroProps) {
    return (
        <header className="relative isolate w-full overflow-hidden bg-cover min-h-[80vh] bg-gray-900 text-white">
            {/* Background Image */}
            <Image
                src={coverUrl}
                alt={title}
                fill
                priority
                className="w-full  object-center object-cover  bg-center opacity-90"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-24 w-full mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    {title}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl">
                    {excerpt}
                </p>

                {/* Meta */}
                <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
                    <Image
                        src={author.avatar}
                        alt={author.name}
                        width={40}
                        height={40}
                        className="rounded-full border border-white/20"
                    />
                    <span>{author.name}</span>
                    <span className="opacity-50">•</span>
                    <time dateTime={publishedAt}>{publishedAt}</time>
                    <span className="opacity-50">•</span>
                    <span>{readTime}</span>
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap justify-center gap-2">
                        {tags.map((tag) => (
                            <li
                                key={tag}
                                className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Scroll Cue */}
                <Link
                    href="#post-body"
                    scroll={true}
                    className="mt-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition"
                    aria-label="Scroll to content"
                >
                    ↓
                </Link>
            </div>
        </header>
    )
}

