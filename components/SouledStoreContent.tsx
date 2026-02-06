import React from "react";

const SouledStoreContent = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-20 space-y-16'>
      {/* Project Overview Section */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500'>
          Project Overview
        </h2>
        <p className='text-lg text-gray-300 leading-relaxed'>
          The Souled Store Clone is an e-commerce web application built using
          HTML, CSS, JavaScript, and React. The project focuses on recreating a
          real-world shopping experience by implementing product listing,
          filtering, user authentication, wishlist management, and cart
          functionality.
        </p>
      </section>

      {/* Technical Stack Section */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500'>
          Technical Stack
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {[
            { title: "Frontend", desc: "HTML, CSS, JavaScript, React" },
            { title: "Styling", desc: "CSS and responsive layouts" },
            {
              title: "State Management",
              desc: "React hooks and component state",
            },
            { title: "Authentication", desc: "Register and login flow" },
            { title: "UI Components", desc: "Reusable and modular components" },
            { title: "Deployment", desc: "Vercel" },
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
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500'>
          Key Features
        </h2>

        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            1. Product Page Organization
          </h3>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Structured product listing with clean UI and categories</li>
            <li>Reusable product card components</li>
            <li>Responsive layout for all screen sizes</li>
          </ul>
        </div>

        {/* Property Listings */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            {" "}
            2. Filters, Sorting & Product Details
          </h3>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Filter products based on categories and attributes</li>
            <li>Sort products by price and relevance</li>
            <li>Modal-based product detail view for quick access</li>
          </ul>
        </div>

        {/* Review System */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            3. Wishlist, Cart & Checkout Functionality
          </h3>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Add and remove products from wishlist</li>
            <li>Cart management with quantity updates</li>
            <li>Checkout flow with order summary and validation</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            {" "}
            4. Register & Login System
          </h3>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>User registration and login flow</li>
            <li>Protected routes for wishlist and cart</li>
            <li>Session-based UI behavior</li>
          </ul>
        </div>
      </section>

      {/* Technical Challenges Section */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500'>
          Technical Challenges & Solutions
        </h2>
        <div className='space-y-8'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-white'>
              1. Managing Complex UI State
            </h3>
            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <p className='font-semibold text-white'>Challenge:</p>
              <p className='text-gray-300'>
                Handling shared state across products, filters, wishlist, and
                cart components.
              </p>
              <p className='font-semibold text-white mt-4'>Solution:</p>
              <ul className='list-disc list-inside space-y-2 text-gray-300'>
                <li>Used React hooks to manage local and shared state</li>
                <li>Designed reusable components to reduce duplication</li>
                <li>Maintained predictable data flow</li>
              </ul>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-white'>
              2. Consistent User Experience Across Devices
            </h3>
            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <p className='font-semibold text-white'>Challenge:</p>
              <p className='text-gray-300'>
                Ensuring a smooth and consistent shopping experience across
                devices.
              </p>
              <p className='font-semibold text-white mt-4'>Solution:</p>
              <ul className='list-disc list-inside space-y-2 text-gray-300'>
                <li>Implemented responsive layouts</li>
                <li>Optimized interactions for mobile users</li>
                <li>Ensured consistent UI behavior across pages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500'>
          Key Learnings
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-white mb-4'>
              State Management & UI Logic
            </h3>
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              <li>Handling user-driven UI updates</li>
              <li>Improving component reusability</li>
              <li>Managing product,cart,and wishlist state efficiently</li>
            </ul>
          </div>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-white mb-4'>
              Application Architecture
            </h3>
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              <li>Component-based design</li>
              <li>Clean folder structure</li>
              <li>Scalable UI patterns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact & Future Improvements */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500'>
            Impact & Results
          </h2>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Built a functional e-commerce clone from scratch</li>
            <li>Implemented core shopping features found in real products</li>
            <li>Improved understanding of UI state management</li>
            <li>Created a responsive and user-friendly interface</li>
          </ul>
        </div>
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500'>
            Future Improvements
          </h2>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Backend integration for persistent data</li>
            <li>Payment gateway integration</li>
            <li>Order history and user profiles</li>
            <li>Advanced filtering and search</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SouledStoreContent;
