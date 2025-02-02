import React from 'react';
import aboutImg from '../assets/about-img.jpeg'

const About = () => {
  const quickBits = [
    'Pursuing a Bachelor’s degree in CSE',
    'Currently learning backend technologies with javascript',
    'Experience with version control systems like Git',
    'Passionate about learning new technologies and frameworks',
    'Enthusiastic about creating seamless user experiences',
  ]
  
  return (
    <section id="about" className="w-full py-10 px-4 bg-gray-900 text-white">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-5 ">About Me</h2>
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center my-auto">
          <img
            src={aboutImg}
            alt="About Image"
            className="w-full max-w-lg rounded-2xl shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 text-left md:text-left">
          <p className="text-[#9CA3AF] text-sm md:text-lg">
            I'm a passionate frontend developer with a keen eye for UI/UX design and a love for crafting smooth, responsive, and visually engaging web applications. My expertise lies in React.js, but I also enjoy exploring backend technologies to create seamless full-stack solutions.
          </p>
          <p className="text-[#9CA3AF] text-sm md:text-lg mt-2">
            I thrive on learning and experimenting with new technologies, always staying up to date with the latest industry trends. I believe in clean, readable, and maintainable code that enhances user experience and performance. Whether it’s bringing a Figma design to life, optimizing a website for accessibility, or implementing smooth animations, I’m always up for the challenge.
          </p>
          <p className="text-[#9CA3AF] text-sm md:text-lg mt-2">Some quick bits about me:</p>
          <ul className="list-disc list-inside text-[#9CA3AF] mt-2">
            {quickBits.map(bit => (
              <li key={bit} className="mb-2 md:text-lg text-sm">{bit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
