"use client";
import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";


const RecentProjects = () => {
  return (
    <div className='py-12 relative z-[20]' id='projects'>
      <h1 className='heading'>
        A small selection of{" "}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-y-10 gap-x-14 '>
        {projects.map((project) => (
          <div
            key={project.id}
            className=' h-[32rem] flex  items-center justify-center sm:w-[22rem] sm:px-0'>
            <PinContainer title={project.link} href={project.link}>
              <div className='relative flex items-center justify-center sm:w-[22rem] w-full overflow-hidden  h-[30vh] mb-10 p-2'>
                <div className='absolute inset-0 overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <Image
                    src='/bg.png'
                    alt='bg-img'
                    fill
                    className='object-cover opacity-40'
                  />
                </div>

                <div className='relative z-10 w-full h-full flex items-center justify-center'>
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className='w-full h-full object-contain transition-transform duration-500 hover:scale-[1.02] lg:rounded-3xl'
                  />
                </div>
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {project.title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {project.des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}>
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center flex-shrink-0'>
                  <p className='lg:text-xl md:text-xs text-xs text-purple whitespace-nowrap'>
                    View Case Study
                  </p>
                  <FaLocationArrow
                    className='ms-2 flex-shrink-0'
                    color='#CBACF9'
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
