import React from "react";

const LiveDocsContent = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-20 space-y-16'>
      {/* Project Overview Section */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
          Project Overview
        </h2>
        <p className='text-lg text-gray-300 leading-relaxed'>
          LiveDocs is a collaborative document editing application inspired by
          Google Docs. Built with Next.js and Liveblocks, the project focuses on
          real-time collaboration, live presence, and scalable frontend
          architecture to demonstrate advanced skills in real-time web
          applications.
        </p>
      </section>

      {/* Technical Stack Section */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
          Technical Stack
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {[
            { title: "Frontend Framework", desc: "Next.js with TypeScript" },
            {
              title: "Styling",
              desc: "Tailwind CSS with ShadCN UI components",
            },
            {
              title: "Real-Time Engine",
              desc: "Liveblocks for live collaboration and presence",
            },
            {
              title: "Text Editor",
              desc: "Lexical Editor for rich-text editing",
            },
            {
              title: "Authentication",
              desc: "GitHub authentication with NextAuth",
            },
            {
              title: "Architecture",
              desc: "Reusable components and scalable code structure",
            },
          ].map((item, index) => (
            <div
              key={index}
              className='p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10'>
              <h3 className='font-semibold text-white'>{item.title}</h3>
              <p className='text-gray-400'>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className='space-y-8'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
          Key Features
        </h2>

        {/* Interactive Hero Section */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            1. Real-Time Collaborative Text Editor
          </h3>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>
              Multiple users can edit the same document simultaneously with live
              updates
            </li>
            <li>Real-time cursor presence and collaborator indicators</li>
            <li>Low-latency syncing powered by Liveblocks</li>
          </ul>
        </div>

        {/* Advanced Animation System */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            2. Document Management & Sharing
          </h3>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>
              Create, delete, and manage documents with automatic persistence
            </li>
            <li>
              Share documents via email or link with view/edit permissions
            </li>
            <li>List and search documents owned or shared with the user</li>
          </ul>
        </div>

        {/* Interactive Features Gallery */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            3. Comments, Notifications & Presence
          </h3>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Inline and general comments with threaded discussions</li>
            <li>
              Real-time notifications for shares, comments, and collaborator
              activity
            </li>
            <li>Live presence indicators for active collaborators</li>
          </ul>
        </div>
      </section>

      {/* Technical Challenges Section */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
          Technical Challenges & Solutions
        </h2>
        <div className='space-y-8'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-white'>
              1. Real-Time Synchronization
            </h3>
            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <p className='font-semibold text-white'>Challenge:</p>
              <p className='text-gray-300'>
                Managing real-time document updates across multiple users while
                maintaining consistency and performance.
              </p>
              <p className='font-semibold text-white mt-4'>Solution:</p>
              <p className='text-gray-300'>
                Leveraged Liveblocks to handle state synchronization, presence
                management, and conflict resolution efficiently.
              </p>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-white'>
              2. Scalable Editor Architecture
            </h3>
            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <p className='font-semibold text-white'>Challenge:</p>
              <p className='text-gray-300'>
                Designing a rich-text editor architecture that supports
                collaboration, comments, and future extensibility.
              </p>
              <p className='font-semibold text-white mt-4'>Solution:</p>
              <ul className='list-disc list-inside space-y-2 text-gray-300'>
                <li>
                  Used Lexical Editor for modular and extensible text editing
                </li>
                <li>
                  Maintained clean separation of editor logic and UI components
                </li>
                <li>Ensured reusability across features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
          Key Learnings
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-white mb-4'>
              Animation Optimization
            </h3>
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              Real-time systems and collaborative architecture Handling
              presence, syncing, and concurrency Designing low-latency user
              experiences
            </ul>
          </div>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-white mb-4'>
              React Best Practices
            </h3>
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              Structuring scalable Next.js applications Writing reusable and
              maintainable components Strong TypeScript patterns
            </ul>
          </div>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-white mb-4'>
              Modern Web Development
            </h3>
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              Building production-ready collaborative tools Implementing
              authentication and permissions Designing responsive, accessible
              UIs
            </ul>
          </div>
        </div>
      </section>

      {/* Impact & Future Improvements */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
            Impact & Results
          </h2>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>
              Successfully implemented real-time collaboration with multiple
              users
            </li>
            <li>Built a scalable and reusable frontend architecture</li>
            <li>Delivered a responsive experience across all devices</li>
            <li>Demonstrated strong real-time system understanding</li>
          </ul>
        </div>
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
            Future Improvements
          </h2>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Version history and document recovery</li>
            <li>Offline editing support</li>
            <li>Advanced permission roles</li>
            <li>Improved performance for large documents</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LiveDocsContent;
