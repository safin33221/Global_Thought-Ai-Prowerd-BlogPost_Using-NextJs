import BlogPostHero from "./components/BlogPostHero";
import hero from "../../public/images/heroBackground.jpg";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen 
     ">
      <BlogPostHero
        title="Unlocking AI's Potential in Content Creation"
        excerpt="ThinkPost uses cutting-edge AI to help you write faster, smarter, and more creatively than ever before."
        coverUrl={hero}
        author={{
          name: "Safin Ahmed",
          avatar: "https://i.pravatar.cc/100?img=3",
        }}
        publishedAt="2025-06-08"
        readTime="4 min read"
        tags={["AI", "Content", "Blogging"]}
      />
      <h1 className="text-4xl font-bold">Welcome to ThinkPost</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-600">
        ThinkPost is a platform designed to help you organize your thoughts and
        ideas effectively. Whether you are brainstorming, planning, or just
        jotting down notes, ThinkPost provides the tools you need to stay
        organized and focused.
      </p>
    </div>
  );
}
