"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart2, Search, Smartphone, Zap, Code } from "lucide-react";

export default function SEOOptimizationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Boost Your Visibility with Powerful SEO Optimization</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
          Everything you need to make your content rank higher in search engines.
        </p>
        <Button>Start Writing with SEO in Mind</Button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <FeatureCard icon={<Search />} title="Keyword Suggestions" description="Auto-suggests relevant keywords as you write, helping you reach a wider audience." />
        <FeatureCard icon={<BarChart2 />} title="Real-Time SEO Analysis" description="Get insights into readability, keyword density, and more with instant feedback." />
        <FeatureCard icon={<Zap />} title="AI Meta Generator" description="Generate SEO-optimized titles and meta descriptions with one click." />
        <FeatureCard icon={<Smartphone />} title="Mobile-Friendly Design" description="All blogs are responsive and optimized for mobile search results." />
        <FeatureCard icon={<Code />} title="Structured Data (Schema.org)" description="Automatically includes metadata to boost your visibility in search results." />
        <FeatureCard icon={<CheckCircle />} title="Lightning-Fast Performance" description="Core Web Vitals friendly pages that load instantly." />
      </section>

      {/* How it Works */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          From writing to ranking in just a few steps.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-left max-w-xl mx-auto">
          <li>Write your blog content.</li>
          <li>Get real-time SEO suggestions from AI.</li>
          <li>Apply recommended improvements.</li>
          <li>Publish and monitor your ranking growth!</li>
        </ol>
      </section>

      {/* Testimonial */}
      <section className="bg-muted p-6 rounded-xl text-center mb-16">
        <blockquote className="text-xl italic mb-4">“My blog traffic grew 3x in 2 months thanks to Global Thought SEO tools.”</blockquote>
        <p className="text-sm text-gray-600 dark:text-gray-400">— A Happy Blogger</p>
      </section>

      {/* Final CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Ready to grow your blog traffic?</h2>
        <Button className="mt-4">Try SEO Optimization Now</Button>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-background p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="text-primary shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
