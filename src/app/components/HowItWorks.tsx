"use client";

import SectionTitle from "./SectionTitle";

export default function HowItWorksSection() {
    const steps = [
        {
            title: "Write Your Blog",
            description:
                "Start writing your blog post in our distraction-free editor. Just focus on your content — we'll handle the rest.",
            icon: "✍️",
        },
        {
            title: "Let AI Suggest SEO",
            description:
                "As you write, our AI analyzes your content and gives keyword, title, and metadata suggestions in real time.",
            icon: "🧠",
        },
        {
            title: "Improve Your Score",
            description:
                "Get feedback on readability, keyword usage, structure, and more. Make edits instantly to optimize your post.",
            icon: "📈",
        },
        {
            title: "Publish & Track",
            description:
                "Publish directly or export to your platform. Use our analytics to track views, engagement, and ranking growth.",
            icon: "🚀",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto bg-background text-center px-4">
            <SectionTitle title="How It Works" subtitle="From writing your first sentence to ranking on Google — we guide you every step of the way." />

            <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-7xl mx-auto text-left">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 p-8 rounded-2xl bg-card">
                        <div className="text-4xl">{step.icon}</div>
                        <div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
