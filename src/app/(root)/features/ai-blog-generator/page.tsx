'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function AIBlogGeneratorPage() {
    const [content, setContent] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAIRequest = async () => {
        if (!content || content.length < 50) {
            setError("✍️ Please write at least 50 characters to get AI insights.");
            return;
        }

        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: `Summarize the following blog post in 12-15 sentences and suggest 3-5 relevant tags. Respond in this format:\nTags: tag1, tag2, tag3\nSummary: ...\nBlog content: ${content}`,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'AI failed to generate content');

            setAiResponse(data.content);
        } catch (err) {
  

                setError(err?.message);
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full px-4 md:px-8 py-16 bg-background text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto  gap-10 items-center">
                {/* Left side intro */}
                <section className='flex  gap-8 items-center '>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Supercharge Your <span className="text-indigo-600">Blog Writing</span> with AI
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            Tired of staring at a blank page? Our AI blog generator helps you create compelling content faster.
                            Just type your thoughts, and let AI refine, summarize, and tag it for you.
                        </p>
                        <ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300 mb-8 space-y-1">
                            <li>📌 Instant summaries for long drafts</li>
                            <li>🏷️ Auto-tagging with SEO-friendly suggestions</li>
                            <li>💡 Reduce writer’s block and speed up creation</li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <Image
                            src="/images/Chat-bot-bro.png"
                            alt="AI Writing Illustration"
                            width={500}
                            height={200}
                            className="rounded-lg border shadow-sm"
                        />
                    </div>
                </section>

                {/* Right side editor */}
                <section className="bg-white dark:bg-zinc-900 mt-5 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Sparkles className="text-indigo-500" /> Try the AI Blog Generator
                    </h2>

                    <textarea
                        className="w-full h-40 p-4 mt-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded-md text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Paste or write your blog idea here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <button
                        onClick={handleAIRequest}
                        disabled={loading}
                        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2 rounded-md disabled:opacity-60 w-full transition-all"
                    >
                        {loading ? 'Analyzing with AI...' : '✨ Get AI Suggestions'}
                    </button>

                    {error && <p className="mt-3 text-red-500 text-sm">{error}</p>}

                    {aiResponse && (
                        <div className="mt-6 bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md border border-zinc-300 dark:border-zinc-700">
                            <h3 className="text-base font-semibold mb-2">🤖 AI Response</h3>
                            {(() => {
                                const tagMatch = aiResponse.match(/tags?:\s*([\s\S]*?)(?:\n|$)/i);
                                let tags: string[] = [];
                                if (tagMatch) {
                                    tags = tagMatch[1]
                                        .split(/,|\n|\*/)
                                        .map((t) => t.trim().replace(/^-|`/g, ''))
                                        .filter(Boolean);
                                }

                                const summaryMatch = aiResponse.match(/summary:\s*([\s\S]*)/i);
                                const summary = summaryMatch ? summaryMatch[1].trim() : aiResponse;

                                return (
                                    <>
                                        {tags.length > 0 && (
                                            <div className="mb-3">
                                                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Tags:</p>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    {tags.map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white px-3 py-1 rounded-full text-xs font-medium"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className=' h-[300px] overflow-y-scroll'>
                                            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Summary:</p>
                                            <p className="mt-1 text-sm text-zinc-800 dark:text-zinc-100 leading-relaxed whitespace-pre-line">
                                                {summary}
                                            </p>
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
