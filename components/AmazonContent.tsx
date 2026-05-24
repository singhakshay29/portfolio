import React from 'react'

const AmazonContent = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-20 space-y-16'>
    
    <section className='space-y-6'>
      <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500'>
        Project Overview
      </h2>
  
      <p className='text-lg text-gray-300 leading-relaxed'>
        Amazon Music Clone is a responsive music streaming web application built
        using React.js, JavaScript, CSS, Material UI, Context API, and React
        Router. The project recreates a modern music platform experience where
        users can browse albums, artists, songs, podcasts, and playlists through
        an interactive and dynamic user interface.
      </p>
    </section>
  
    {/* Technical Stack Section */}
    <section className='space-y-6'>
      <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500'>
        Technical Stack
      </h2>
  
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {[
          {
            title: "Frontend",
            desc: "React.js, JavaScript, CSS",
          },
          {
            title: "Routing",
            desc: "React Router for page navigation",
          },
          {
            title: "State Management",
            desc: "Context API and React Hooks",
          },
          {
            title: "UI Components",
            desc: "Material UI and reusable components",
          },
          {
            title: "API Integration",
            desc: "Songs, albums, artists, and podcast APIs",
          },
          {
            title: "Deployment",
            desc: "Vercel",
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
      <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500'>
        Key Features
      </h2>
  
      <div className='space-y-4'>
        <h3 className='text-2xl font-semibold text-white'>
          1. Dynamic Home Page Experience
        </h3>
  
        <ul className='list-disc list-inside space-y-2 text-gray-300'>
          <li>Landing page showcasing songs, albums, and artists</li>
          <li>Music categorized based on moods and genres</li>
          <li>Responsive card-based UI for better browsing experience</li>
        </ul>
      </div>
  
      <div className='space-y-4'>
        <h3 className='text-2xl font-semibold text-white'>
          2. Albums, Categories & Navigation
        </h3>
  
        <ul className='list-disc list-inside space-y-2 text-gray-300'>
          <li>See All functionality for exploring complete categories</li>
          <li>Album-based navigation with dynamic song lists</li>
          <li>Horizontal sliders with interactive navigation controls</li>
        </ul>
      </div>
  
      <div className='space-y-4'>
        <h3 className='text-2xl font-semibold text-white'>
          3. Music Player & Song Interaction
        </h3>
  
        <ul className='list-disc list-inside space-y-2 text-gray-300'>
          <li>Interactive music player component</li>
          <li>Dynamic song switching functionality</li>
          <li>Real-time UI updates when selecting songs</li>
        </ul>
      </div>
  
      <div className='space-y-4'>
        <h3 className='text-2xl font-semibold text-white'>
          4. Search & Podcast Features
        </h3>
  
        <ul className='list-disc list-inside space-y-2 text-gray-300'>
          <li>Search songs, albums, and artists dynamically</li>
          <li>Mood-based browsing experience</li>
          <li>Dedicated podcast section with separate navigation</li>
        </ul>
      </div>
  
      <div className='space-y-4'>
        <h3 className='text-2xl font-semibold text-white'>
          5. Authentication & Favorites
        </h3>
  
        <ul className='list-disc list-inside space-y-2 text-gray-300'>
          <li>User login and signup functionality</li>
          <li>Add and remove songs from favorites</li>
          <li>Protected features for authenticated users</li>
        </ul>
      </div>
    </section>
  
    {/* Technical Challenges Section */}
    <section className='space-y-6'>
      <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500'>
        Technical Challenges & Solutions
      </h2>
  
      <div className='space-y-8'>
        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            1. Managing Shared Music State
          </h3>
  
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <p className='font-semibold text-white'>Challenge:</p>
  
            <p className='text-gray-300'>
              Managing song playback state, selected albums, favorites, and
              search results across multiple components.
            </p>
  
            <p className='font-semibold text-white mt-4'>Solution:</p>
  
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              <li>Implemented Context API for global state management</li>
              <li>Used React Hooks for dynamic updates</li>
              <li>Created reusable and scalable UI components</li>
            </ul>
          </div>
        </div>
  
        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            2. Building a Responsive Streaming UI
          </h3>
  
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <p className='font-semibold text-white'>Challenge:</p>
  
            <p className='text-gray-300'>
              Creating a smooth and interactive music streaming experience across
              desktop and mobile devices.
            </p>
  
            <p className='font-semibold text-white mt-4'>Solution:</p>
  
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              <li>Built responsive layouts using CSS</li>
              <li>Optimized navigation and user interactions</li>
              <li>Maintained consistent UI behavior across pages</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  
    {/* Key Learnings Section */}
    <section className='space-y-6'>
      <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500'>
        Key Learnings
      </h2>
  
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
          <h3 className='text-xl font-semibold text-white mb-4'>
            State Management & UI Logic
          </h3>
  
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Managing shared application state efficiently</li>
            <li>Handling dynamic music player interactions</li>
            <li>Improving reusable component architecture</li>
          </ul>
        </div>
  
        <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
          <h3 className='text-xl font-semibold text-white mb-4'>
            Application Architecture
          </h3>
  
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Component-based frontend architecture</li>
            <li>Clean routing and folder structure</li>
            <li>Scalable React application patterns</li>
          </ul>
        </div>
      </div>
    </section>
  
    {/* Impact & Future Improvements */}
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500'>
          Impact & Results
        </h2>
  
        <ul className='list-disc list-inside space-y-2 text-gray-300'>
          <li>Built a functional music streaming clone from scratch</li>
          <li>Implemented interactive and dynamic music browsing</li>
          <li>Improved understanding of Context API and routing</li>
          <li>Created a responsive and engaging user experience</li>
        </ul>
      </div>
  
      <div className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500'>
          Future Improvements
        </h2>
  
        <ul className='list-disc list-inside space-y-2 text-gray-300'>
          <li>Advanced music player controls</li>
          <li>Create and manage custom playlists</li>
          <li>Backend integration for persistent user data</li>
          <li>Music recommendations and personalized feeds</li>
        </ul>
      </div>
    </section>
  </div>
  )
}

export default AmazonContent