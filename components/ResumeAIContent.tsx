import React from "react";

const ResumeAIContent = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-20 space-y-16'>
      {/* Project Overview Section */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
          Project Overview
        </h2>
        <p className='text-lg text-gray-300 leading-relaxed'>
          ResumeAnalyzer AI is a full-stack AI-powered platform that helps
          candidates prepare for interviews by analyzing resumes and job
          descriptions. The application generates personalized interview
          reports, including match scores, technical and behavioral questions,
          skill gap analysis, and a structured preparation roadmap.
        </p>
      </section>

      {/* Technical Stack Section */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
          Technical Stack
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {[
            { title: "Frontend", desc: "React, Vite, Axios, Sass" },
            { title: "Backend", desc: "Node.js, Express.js" },
            { title: "Database", desc: "MongoDB with Mongoose" },
            { title: "AI Engine", desc: "Gemini AI for report generation" },
            {
              title: "Authentication",
              desc: "JWT and secure session handling",
            },
            {
              title: "Deployment",
              desc: "Docker, AWS ECS, ECR, ALB and Vercel",
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
            1. Resume & Job Analysis
          </h3>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Upload resumes and provide target job descriptions</li>
            <li>Extract candidate skills and experience automatically</li>
            <li>Compare profiles against job requirements</li>
          </ul>
        </div>

        {/* Advanced Animation System */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            2. AI-Powered Interview Report
          </h3>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Generate technical interview questions with answers</li>
            <li>Create behavioral and situational interview questions</li>
            <li>Provide interviewer intent and evaluation criteria</li>
          </ul>
        </div>

        {/* Interactive Features Gallery */}
        <div className='space-y-4'>
          <h3 className='text-2xl font-semibold text-white'>
            3. Skill Gap Analysis & Study Plan
          </h3>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Identify missing or weak skills</li>
            <li>Classify gaps by severity level</li>
            <li>Generate personalized day-wise preparation plans</li>
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
              1. AI Prompt Engineering & Structured Output
            </h3>
            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <p className='font-semibold text-white'>Challenge:</p>
              <p className='text-gray-300'>
                Generating consistent and structured interview reports from AI
                responses while handling different resume formats and job
                descriptions.
              </p>
              <p className='font-semibold text-white mt-4'>Solution:</p>
              <p className='text-gray-300'>
                Designed reusable prompt templates and implemented validation
                logic to ensure reliable AI-generated responses and report
                formatting.
              </p>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-white'>
              2. Scalable Full-Stack Architecture
            </h3>
            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <p className='font-semibold text-white'>Challenge:</p>
              <p className='text-gray-300'>
                Managing resume uploads, AI processing, authentication, and
                report generation within a scalable architecture.
              </p>
              <p className='font-semibold text-white mt-4'>Solution:</p>
              <p className='text-gray-300'>
                Implemented a modular React and Express architecture, secured
                APIs using JWT authentication, and deployed containerized
                services using Docker and AWS ECS.
              </p>
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
              AI Integration
            </h3>
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              <li>Prompt engineering</li>
              <li>Structured AI outputs</li>
              <li>Resume and job description analysis</li>
              <li>Structured AI response handling</li>
            </ul>
          </div>

          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-white mb-4'>
              Full-Stack Development
            </h3>
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              <li>Building secure REST APIs</li>
              <li>JWT authentication</li>
              <li>MongoDB schema design</li>
              <li>Scalable application architecture</li>
            </ul>
          </div>

          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-white mb-4'>
              Cloud & DevOps
            </h3>
            <ul className='list-disc list-inside space-y-2 text-gray-300'>
              <li>Docker containerization</li>
              <li>AWS ECS deployment</li>
              <li>Amazon ECR integration</li>
              <li>Production-ready deployments</li>
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
            <li>Generated personalized interview reports using AI</li>
            <li>Automated resume and job description analysis</li>
            <li>Built a secure and scalable full-stack architecture</li>
            <li>Deployed production-ready services using Docker and AWS</li>
          </ul>
        </div>
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
            Future Improvements
          </h2>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li>Support multiple AI models</li>
            <li>Real-time interview simulation</li>
            <li>Resume version comparison</li>
            <li>Advanced analytics and progress tracking</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumeAIContent;
