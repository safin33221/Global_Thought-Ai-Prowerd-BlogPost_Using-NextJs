"use client";

import Image from "next/image";

export default function MultilingualSupportPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 px-6 py-16 max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-20 grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
                <div className="flex flex-col text-left items-start  justify-center">
                    <h1 className="text-5xl font-extrabold mb-4">Multilingual Support</h1>
                    <p className="text-lg text-muted-foreground dark:text-gray-400 mb-8">
                        Generate and publish content in multiple languages to expand your global reach, build trust, and connect authentically with diverse audiences.
                    </p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition">
                        Try Multilingual Writing
                    </button>
                </div>
                <div className="mt-12 rounded-lg overflow-hidden shadow-lg bg-gradient-to-tr ">
                    <div className="aspect-[16/9]  flex items-center justify-center  italic text-xl select-none">
                        <Image
                        src={'/images/multilanguage.png'}
                        alt="image"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>
            </section>

            {/* Why It Matters */}
            <section className="bg-gray-200 dark:bg-[#313151] rounded-lg  mb-20 p-8  mx-auto">
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Why Multilingual Publishing Matters</h2>
                        <p>
                            More than 70% of internet users prefer to read in their native language. By offering your thoughts in multiple languages, you are not just expanding
                            reach—you are building stronger emotional connections. It makes your message accessible, respectful, and relevant across cultures.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Content Without Borders</h2>
                        <p>
                            Whether you are writing essays, blogs, tutorials, or social insights—multilingual support ensures your words are understood without barriers. Empower
                            communities, spread knowledge, and promote global thinking, all from one post.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="mb-20  mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-10">What You Get</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 dark:bg-[#313151] rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">🌐 AI-Powered Translation</h3>
                        <p>Instantly translate your drafts into 25+ major languages with smart context handling and tone preservation.</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#313151] rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">✍️ Manual Override</h3>
                        <p>Review and refine AI-translated content to ensure cultural relevance and accuracy where needed.</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#313151] rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">📍 Language Targeting</h3>
                        <p>Set default languages per post or user, and display preferred versions automatically based on location.</p>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-[#f9fafb] dark:bg-[#000000] rounded-lg  mb-20 mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-10">Real-World Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "🌍 International Bloggers",
                            desc: "Reach readers from Tokyo to Toronto by delivering stories in their language, without managing multiple blogs.",
                        },
                        {
                            title: "🎓 Educators & Researchers",
                            desc: "Share insights in English, Bengali, Spanish, or Arabic—without losing meaning or clarity.",
                        },
                        {
                            title: "📣 Community Organizers",
                            desc: "Use multilingual support to break language barriers and involve more voices in your mission.",
                        },
                        {
                            title: "🛍️ Product Creators",
                            desc: "Promote your digital products, tutorials, and documentation to a truly global audience.",
                        },
                    ].map(({ title, desc }) => (
                        <article
                            key={title}
                            className="flex gap-5 items-start rounded-lg p-6 bg-white dark:bg-[#313151] shadow-md"
                        >
                            <span className="text-3xl">{title.split(" ")[0]}</span>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                                <p>{desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* FAQs */}
            <section className="max-w-4xl mx-auto mb-20 ">
                <h2 className="text-3xl font-semibold text-center mb-8">FAQs</h2>
                <div className="space-y-4">
                    {[
                        {
                            q: "Can I control which languages are available?",
                            a: "Yes. You can choose which languages to offer per post, and edit each version as needed.",
                        },
                        {
                            q: "Do I need to speak the other language?",
                            a: "No. Our AI translation handles it for you. But if you do speak it, you can manually improve the translations too.",
                        },
                        {
                            q: "Does SEO work across languages?",
                            a: "Yes. Each version of your post is optimized for multilingual search engines and indexed separately.",
                        },
                    ].map(({ q, a }) => (
                        <details
                            key={q}
                            className="bg-gray-100 dark:bg-[#313151] p-5 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-[#404068] transition"
                        >
                            <summary className="font-semibold text-lg">{q}</summary>
                            <p className="mt-2 text-muted-foreground dark:text-gray-300">{a}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold mb-4">
                    Ready to Expand Your Voice Globally?
                </h2>
                <p className="mb-8 text-muted-foreground dark:text-gray-400">
                    Embrace multilingual support today and connect with readers around the world in their native languages.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-full font-semibold shadow-lg transition">
                    Get Started Now
                </button>
            </section>
        </main>
    );
}
