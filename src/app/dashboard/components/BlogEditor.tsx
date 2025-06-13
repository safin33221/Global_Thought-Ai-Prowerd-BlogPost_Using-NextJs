"use client";

import { useState } from "react";

export default function BlogEditor() {
  const [content, setContent] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAIRequest = async () => {
    if (!content || content.length < 30) {
      setError(
        "📝 Please write at least 50 characters before requesting AI suggestions."
      );
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Summarize the following blog post in 12-15 sentences and suggest 3-5 relevant tags. Respond in this format:\nTags: tag1, tag2, tag3\nSummary: ...\nBlog content: ${content}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "AI processing failed");

      setAiResponse(data.content);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
        ✍️ Generate Your Blog  with AI
      </h1>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm">
        <textarea
          className="w-full h-40 p-4 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded-md text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={handleAIRequest}
          disabled={loading}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-md disabled:opacity-60"
        >
          {loading ? "Generating..." : "💡 Get AI Suggestions"}
        </button>

        {error && (
          <p className="mt-4 text-red-600 text-sm font-medium">{error}</p>
        )}

        {aiResponse && (
          <div className="mt-8 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-md border border-zinc-300 dark:border-zinc-700">
            <h2 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">
              🤖 AI Suggestions
            </h2>

            {(() => {
              const tagMatch = aiResponse.match(/tags?:\s*([\s\S]*?)(?:\n|$)/i);
              let tags: string[] = [];
              if (tagMatch) {
                tags = tagMatch[1]
                  .split(/,|\n|\*/)
                  .map((t) => t.trim().replace(/^-|`/g, ""))
                  .filter(Boolean);
              }

              const summaryMatch = aiResponse.match(
                /summary:\s*([\s\S]*)/i
              );
              const summary = summaryMatch
                ? summaryMatch[1].trim()
                : aiResponse;

              return (
                <>
                  {tags.length > 0 && (
                    <div className="mb-4">
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">Tags:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white px-3 py-1 rounded-full text-xs font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Summary:</span>
                    <p className="mt-2 text-sm text-zinc-800 dark:text-zinc-100 leading-relaxed whitespace-pre-line">
                      {summary}
                    </p>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
