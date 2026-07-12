import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 relative z-[20]' id='contact'>
      {/* background grid */}
      <div className='absolute inset-0 -z-10 pointer-events-none'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full object-cover  mix-blend-soft-light'
        />
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className='flex items-center justify-center gap-4 flex-wrap'>
          
        </div>
      </div>
      
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2026 Akshay
        </p>

        <div className='flex items-center md:gap-3 gap-6 md:mt-0 mt-6'>
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
              <a href={info.link} target='_blank' rel='noopener noreferrer'>
                <img src={info.img} alt='icons' width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
