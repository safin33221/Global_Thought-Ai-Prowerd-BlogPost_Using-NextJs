"use client";

import Link from "next/link";
const data = [
    {
        title: "✍️ Writing With Impact",
        desc: "How to structure your blog for clarity, engagement, and resonance.",
    },
    {
        title: "🌐 Going Multilingual",
        desc: "Step-by-step guide to creating multilingual content using AI.",
    },
    {
        title: "📣 Building Your Audience",
        desc: "Grow your presence by following, sharing, and creating value.",
    },
]
export default function GuidesPage() {
    return (
        <main className="w-full px-4 sm:px-6 md:px-12 py-12 space-y-12 bg-white dark:bg-background text-gray-900 dark:text-white">
            <section className="text-center max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Guides for Global Thought</h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                    Step-by-step tutorials to help you write, publish, and thrive in the Global Thought ecosystem.
                </p>
            </section>

            <div className="shrink-0 bg-border h-[1px] w-full my-4" />

            <section className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 px-2">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
                    <p className="text-muted-foreground">
                        Learn how to create an account, build your profile, and start writing your first blog on Global Thought.
                    </p>
                    <ul className="list-disc list-inside mt-3 text-sm">
                        <li>Setting up your profile</li>
                        <li>Understanding the editor</li>
                        <li>Drafting and saving posts</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Publishing & Visibility</h2>
                    <p className="text-muted-foreground">
                        Tips to help you format, optimize, and share your content effectively with the world.
                    </p>
                    <ul className="list-disc list-inside mt-3 text-sm">
                        <li>Using tags & SEO tips</li>
                        <li>Publishing formats (anonymous/public)</li>
                        <li>Engaging with your audience</li>
                    </ul>
                </div>
            </section>

            <div className="shrink-0 bg-border h-[1px] w-full my-4" />

            <section className="max-w-6xl mx-auto px-2 space-y-6">
                <h2 className="text-2xl font-semibold text-center">Featured Tutorials</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {data?.map((item, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="shrink-0 bg-border h-[1px] w-full my-4" />

            <section className="max-w-6xl mx-auto px-2 space-y-6 text-center">
                <h2 className="text-2xl font-semibold">Want More Help?</h2>
                <p className="text-muted-foreground">
                    Visit our <Link href="/support" className="underline">Support Page</Link> or <Link href="/community" className="underline">Community Forum</Link> to ask questions and connect with others.
                </p>
            </section>
        </main>
    );
}
