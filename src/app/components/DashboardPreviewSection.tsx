"use client";

import { BarChart, TrendingUp, MessageCircle, Eye, Activity } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function DashboardPreviewSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <SectionTitle title="Track Your Blog’s Impact in Real Time" subtitle=" See what content performs best — by reach, SEO score, and engagement."/>
        
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={<Activity className="text-blue-600" />}
          title="Live SEO Score"
          value="87 / 100"
          description="Get AI-generated SEO scoring and improvement suggestions instantly."
        />
        <FeatureCard
          icon={<Eye className="text-green-600" />}
          title="Traffic Overview"
          value="4.2K Visitors"
          description="Monitor real-time traffic and top-performing articles."
        />
        <FeatureCard
          icon={<BarChart className="text-purple-600" />}
          title="Keyword Rankings"
          value="Top 5 Keywords"
          description="Discover which search terms are bringing you the most traffic."
        />
        <FeatureCard
          icon={<MessageCircle className="text-pink-600" />}
          title="Engagement Metrics"
          value="245 Comments"
          description="Track likes, comments, and social shares all in one place."
        />
        <FeatureCard
          icon={<TrendingUp className="text-orange-600" />}
          title="AI Recommendations"
          value="4 Improvements"
          description="Actionable tips to improve blog headlines, structure, and readability."
        />
        <div className="bg-muted p-6 rounded-xl flex flex-col justify-center text-center shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Ready to See Full Analytics?</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Dive into detailed reports and grow smarter with every post.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded">
            Explore Full Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
};

function FeatureCard({ icon, title, value, description }: FeatureCardProps) {
  return (
    <div className="bg-card p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-xl font-bold text-primary mt-1">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}
