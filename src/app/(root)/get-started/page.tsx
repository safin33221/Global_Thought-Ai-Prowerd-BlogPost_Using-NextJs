"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, PenTool, Sparkles } from "lucide-react";

export default function GetStartedPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            {/* Hero Section */}
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Get Started with <strong className="text-indigo-500">Global Thought</strong></h1>
                <p className="text-lg text-muted-foreground mb-6">
                    Launch your first AI-powered blog post in just a few steps. No tech skills required.
                </p>
                <Button asChild className="text-base px-6 py-3">
                    <Link href="/dashboard/editor">Start Writing Now</Link>
                </Button>
            </section>

            {/* Steps to Get Started */}
            <section className="grid md:grid-cols-3 gap-8 text-center mb-16">
                <StepCard
                    icon={<PenTool className="w-10 h-10 text-primary mx-auto mb-4 bg-card" />}
                    title="Write"
                    description="Input your ideas, or let AI help generate high-quality content tailored to your niche."
                />
                <StepCard
                    icon={<Sparkles className="w-10 h-10 text-primary mx-auto mb-4 bg-card" />}
                    title="Optimize"
                    description="Receive real-time SEO suggestions, meta generation, and keyword analysis instantly."
                />
                <StepCard
                    icon={<Rocket className="w-10 h-10 text-primary mx-auto mb-4 bg-card" />}
                    title="Publish"
                    description="One-click publish with built-in mobile responsiveness and structured metadata."
                />
            </section>

            {/* CTA Section */}
            <section className="bg-muted p-6 rounded-xl text-center">
                <h2 className="text-2xl font-semibold mb-4">Why Global Thought?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                    Our platform empowers creators with cutting-edge AI tools, beautiful templates,
                    and SEO best practices baked in—so you can focus on storytelling, not technicalities.
                </p>
                <Button asChild variant="outline">
                    <Link href="/features">Explore Features</Link>
                </Button>
            </section>
        </div>
    );
}

function StepCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="p-6 bg-card rounded-lg shadow-md">
            {icon}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}
