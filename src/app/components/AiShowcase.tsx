"use client";

import { useState } from "react";
import { Sparkles, BarChart, Lightbulb, TimerReset, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function AiShowcase() {
  const [showAI, setShowAI] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setShowAI(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="max-w-7xl rounded-2xl p-8 mt-20 shadow-xl mx-auto ">
      {/* Section Intro */}
      <div className="text-center mb-10">

      
        <h2 className="lg:text-4xl font-bold text flex justify-center items-center gap-2">
          <Sparkles className="text-yellow-500" /> AI Blog Assistant Demo
        </h2>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          See how ThinkPost’s AI helps you generate summaries and SEO-friendly tags in seconds. Improve clarity, save time, and rank better — all while you write.
        </p>
      </div>

      {/* AI Simulation */}
      <div className=" w-full p-14 rounded-xl grid md:grid-cols-2 gap-6 max-w-7xl mx-auto h-full">
        {/* User Content */}
        <div className="h-full  ">
          <h3 className="text-sm font-medium mb-1 text-muted-foreground">📝 Blog Draft</h3>
          <div className="bg-background border h-full w-full   p-4 md:p-4 rounded-lg text-sm leading-relaxed shadow-sm">
            AI is transforming the way we create content. With tools like ThinkPost, bloggers can now write faster, smarter, and more optimized articles that rank higher in search engines.
          </div>
        </div>

        {/* AI Response */}
        <div>
          <h3 className="text-sm font-medium mb-1 text-muted-foreground">🤖 AI Suggestions</h3>
          <div className="bg-background border p-2 md:p-4 rounded-lg text-sm leading-relaxed shadow-sm min-h-[120px] h-full">
            {loading ? (
              <div className="italic animate-pulse text-center">Analyzing your content...</div>
            ) : showAI ? (
              <div className="whitespace-pre-wrap">
                <strong>Summary:</strong> ThinkPost empowers bloggers with AI tools that enhance writing speed, optimize SEO, and improve article quality effortlessly.<br /><br />
                <strong>Suggested Tags:</strong> AI writing, SEO tips, blogging tools, content strategy, blog growth
              </div>
            ) : (
              <div className="italic text-muted-foreground text-center">Click the button below to see what AI can do.</div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center my-6">
        <Button
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Thinking..." : showAI ? "Try Again" : "Generate with AI"}
        </Button>
      </div>

      {/* Benefits */}
      <div className="mt-12 m-2 md:m-0 grid  sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
        <Benefit icon={<PenTool className="mx-auto text-blue-600" />} title="Faster Writing" desc="Let AI handle summaries and tags so you can focus on storytelling." />
        <Benefit icon={<Lightbulb className="mx-auto text-yellow-500" />} title="Smarter Content" desc="Avoid keyword stuffing — get optimized suggestions." />
        <Benefit icon={<BarChart className="mx-auto text-green-500" />} title="Higher Ranking" desc="Structured summaries help your blog stand out on search engines." />
        <Benefit icon={<TimerReset className="mx-auto text-pink-500" />} title="Save Time" desc="Cut your editing time in half with instant AI insights." />
      </div>
    </section>
  );
}

function Benefit({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-card p-4 rounded-2xl border shadow-sm">
      <div className="mb-2">{icon}</div>
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground mt-1">{desc}</p>
    </div>
  );
}
