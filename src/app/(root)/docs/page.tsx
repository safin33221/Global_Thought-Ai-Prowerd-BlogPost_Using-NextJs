"use client";

import Link from "next/link";

const page = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-center">
    Global Thought – Full Documentation
      </h1>

      {/* Table of Contents */}
      <nav className="mb-10 text-sm md:text-base">
        <ul className="space-y-2 list-disc pl-5">
          <li><a href="#intro" className="text-blue-500 hover:underline">Introduction</a></li>
          <li><a href="#features" className="text-blue-500 hover:underline">Key Features</a></li>
          <li><a href="#getting-started" className="text-blue-500 hover:underline">Getting Started</a></li>
          <li><a href="#architecture" className="text-blue-500 hover:underline">Project Architecture</a></li>
          <li><a href="#pages" className="text-blue-500 hover:underline">Main Pages Overview</a></li>
          <li><a href="#api" className="text-blue-500 hover:underline">API & State Management</a></li>
          <li><a href="#tech" className="text-blue-500 hover:underline">Technology Stack</a></li>
          <li><a href="#faq" className="text-blue-500 hover:underline">FAQs</a></li>
          <li><a href="#contribute" className="text-blue-500 hover:underline">Contributing</a></li>
          <li><a href="#contact" className="text-blue-500 hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="intro" className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🚀 Introduction</h2>
        <p>
          <strong>ThinkPost: Global Thought</strong> is a powerful blogging platform where creators can publish, manage,
          and share their ideas globally. Built with performance and scalability in mind, it supports secure auth,
          dynamic blog features, and elegant design.
        </p>
      </section>

      <section id="features" className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">✨ Key Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>📄 Create and manage blog posts with a rich text editor</li>
          <li>🔐 Secure login and registration via <strong>NextAuth</strong></li>
          <li>🌗 Fully responsive design with <strong>dark mode</strong></li>
          <li>📦 RTK Query integration for data fetching</li>
          <li>👤 User-specific profile dashboard</li>
          <li>🔥 Dynamic featured blogs section</li>
        </ul>
      </section>

      <section id="getting-started" className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Getting Started</h2>
        <p>Follow these steps to get the app running locally:</p>
        <ol className="list-decimal pl-6 mt-2 space-y-1">
          <li>Clone the repository: <code className="bg-gray-200 dark:bg-gray-700 px-1">git clone https://github.com/your-repo</code></li>
          <li>Install dependencies: <code className="bg-gray-200 dark:bg-gray-700 px-1">npm install</code></li>
          <li>Create a `.env.local` and add your environment variables (DB, Auth)</li>
          <li>Run the dev server: <code className="bg-gray-200 dark:bg-gray-700 px-1">npm run dev</code></li>
        </ol>
      </section>

      <section id="architecture" className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🏗 Project Architecture</h2>
        <p>This project uses App Router structure with clearly separated layers:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><code>app/</code>: Pages, layout, routes</li>
          <li><code>components/</code>: UI and reusable elements</li>
          <li><code>lib/</code>: RTK Query, database connectors</li>
          <li><code>model/</code>: Mongoose models</li>
          <li><code>Providers/</code>: NextAuth and Theme context providers</li>
        </ul>
      </section>

      <section id="pages" className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧭 Main Pages Overview</h2>
        <ul className="space-y-2">
          <li>
            <strong>Home:</strong> <Link href="/" className="text-blue-500 underline">/</Link> – Shows hero section and featured blogs.
          </li>
          <li>
            <strong>Blog List:</strong> <Link href="/blog" className="text-blue-500 underline">/blog</Link> – All published blogs.
          </li>
          <li>
            <strong>Create Post:</strong> <Link href="/blog/create" className="text-blue-500 underline">/blog/create</Link> – Blog editor for logged-in users.
          </li>
          <li>
            <strong>User Profile:</strong> <Link href="/profile" className="text-blue-500 underline">/profile</Link> – Your profile dashboard.
          </li>
        </ul>
      </section>

      <section id="api" className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔌 API & State Management</h2>
        <p>
          The app uses <strong>Redux Toolkit Query</strong> for client-side fetching and caching. Server-side APIs are built with the Next.js App Router + MongoDB.
        </p>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li><code>GET /api/users</code>: Get current user info</li>
          <li><code>GET /api/blogs</code>: Fetch all blogs</li>
          <li><code>POST /api/blogs</code>: Create a blog post</li>
        </ul>
      </section>

      <section id="tech" className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧱 Technology Stack</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>⚙️ Framework: Next.js 14 (App Router)</li>
          <li>📦 State: Redux Toolkit & RTK Query</li>
          <li>💅 Styling: Tailwind CSS, Dark mode</li>
          <li>🛡 Auth: NextAuth.js</li>
          <li>🧠 DB: MongoDB + Mongoose</li>
          <li>📝 Editor: Tiptap</li>
        </ul>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">❓ FAQs</h2>
        <p className="font-medium">Can I create a blog without logging in?</p>
        <p className="mb-4">No. You must be authenticated to create a blog.</p>
        <p className="font-medium">Is there a markdown editor?</p>
        <p>We use Tiptap – a modern rich text editor that supports extensibility and inline formatting.</p>
      </section>

      <section id="contribute" className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🤝 Contributing</h2>
        <p>
          Want to add a feature or fix a bug? Fork the repo, make changes, and submit a pull request.
          Make sure your code follows our style guide.
        </p>
      </section>

      <section id="contact" className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">📩 Contact</h2>
        <p>
          Have feedback or a suggestion? Email us at <a href="mailto:hello@globalthought.dev" className="text-blue-500 underline">hello@globalthought.dev</a> or join the discussion on GitHub.
        </p>
      </section>
    </main>
  );
};

export default page;
