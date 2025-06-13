"use client";

export default function AboutThoughtPage() {
  return (
    <main className="w-full px-4 sm:px-6 md:px-12 py-12 space-y-12 bg-white dark:bg-background text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Global Thought</h1>
        <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-400">
          A space where ideas live, minds meet, and reflections reshape the future.
        </p>
      </section>

      <div className="shrink-0 bg-border h-[1px] w-full my-4 dark:bg-gray-700" />

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 px-2">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            At Global Thought, our mission is to empower thinkers and creators to express, connect, and preserve their ideas with clarity and impact.
            We provide the tools and space to transform passing Global thoughts into permanent imprints.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            To build a global community where Global thoughts shape culture, spark innovation, and inspire growth. We envision a world where mindful
            writing becomes a daily act of change.
          </p>
        </div>
      </section>

      <div className="shrink-0 bg-border h-[1px] w-full my-4 dark:bg-gray-700" />

      {/* Features */}
      <section className="max-w-6xl mx-auto px-2 space-y-6">
        <h2 className="text-2xl font-semibold text-center">What Makes Global Thought Special?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">💡 Idea Incubator</h3>
            <p>Capture fleeting Global thoughts and turn them into timeless reflections.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">🌐 Global Voices</h3>
            <p>Connect with thinkers, writers, and readers from across the world.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">🔍 Discovery-First</h3>
            <p>Smart categorization and search tools help your ideas reach the right eyes.</p>
          </div>
        </div>
      </section>

      <div className="shrink-0 bg-border h-[1px] w-full my-4 dark:bg-gray-700" />

      {/* Team */}
      <section className="max-w-6xl mx-auto px-2 space-y-4">
        <h2 className="text-2xl font-semibold text-center">Meet the Team</h2>
        <p className="text-center text-muted-foreground dark:text-gray-400">
          We're a small team of designers, developers, and thinkers who believe in the power of the written word.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="font-semibold">Safin Chowdhury</h4>
            <p className="text-sm text-muted-foreground dark:text-gray-400">Founder & Product Designer</p>
          </div>
          <div>
            <h4 className="font-semibold">Ersa Karim</h4>
            <p className="text-sm text-muted-foreground dark:text-gray-400">Content Strategist</p>
          </div>
          <div>
            <h4 className="font-semibold">AI Co-Creator</h4>
            <p className="text-sm text-muted-foreground dark:text-gray-400">Linguistic + Creative Engine</p>
          </div>
        </div>
      </section>

      <div className="shrink-0 bg-border h-[1px] w-full my-4 dark:bg-gray-700" />

      {/* FAQs */}
      <section className="max-w-6xl mx-auto px-2 space-y-6">
        <h2 className="text-2xl font-semibold text-center">FAQs</h2>
        <div className="space-y-4">
          <details className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
            <summary className="font-medium cursor-pointer">Is Global Thought free to use?</summary>
            <p className="mt-2 text-sm">Yes! Writing and reading on Global Thought is completely free.</p>
          </details>
          <details className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
            <summary className="font-medium cursor-pointer">Can I write anonymously?</summary>
            <p className="mt-2 text-sm">Absolutely. You can choose to publish anonymously or under a pseudonym.</p>
          </details>
          <details className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
            <summary className="font-medium cursor-pointer">Is AI used to generate posts?</summary>
            <p className="mt-2 text-sm">You can optionally use our AI tools to assist with idea generation or editing.</p>
          </details>
        </div>
      </section>

      <div className="shrink-0 bg-border h-[1px] w-full my-4 dark:bg-gray-700" />

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-2 text-center space-y-4">
        <h2 className="text-2xl font-semibold">Ready to Share Your  Thoughts?</h2>
        <p>Join the Global Thought platform today and let your voice be part of something bigger.</p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition dark:bg-white dark:text-black hover:dark:bg-gray-200">
          Start Writing
        </button>
      </section>
    </main>
  );
}
