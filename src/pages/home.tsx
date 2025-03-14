import { SiGmail } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";



function Home() {
  return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 p-6">
      <div className="max-w-4xl w-full bg-white/20 backdrop-blur-lg shadow-lg rounded-lg p-8 flex flex-col md:flex-row text-zinc-900">
        {/* Left Section */}
        
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="text-2xl font-bold mt-4">Hi ! Im Mohammad Morowati</h1>
          <h2 className="text-lg font-semibold text-zinc-600 my-5">Front-End Developer in Tehran</h2>
          <p>0918-713-9586</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="mailto:muhammadmorowati@gmail.com" className="text-zinc-800">
              <SiGmail size={25} /></a>
            <a href="https://github.com/mh-morowati" className="text-zinc-800">
              <ImGithub size={25} /></a>
            <a href="https://www.linkedin.com/in/muhammad-morowati-b12507307/" className="text-zinc-800">
              <FaLinkedin size={25} /></a>
            <a href="https://t.me/mhmorowati">
        <FaTelegram size={25}/>
        </a>
          </div>
            {/* Download Resume Button */}
          <a
            target="_blank"
            href="/4ba8bd2a-9f68-4871-9f64-fb74218d4c2f.pdf"
            download="MohammadMorowati_Resume.pdf"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Download Resume
          </a>
          
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
          {/* About Me */}
          <h3 className="text-xl font-bold mb-2">About Me</h3>
          <p className="text-sm text-zinc-800">
            Passionate Frontend Developer with 2 years of experience crafting user-centric experiences and
            high-performance web solutions using JavaScript.
          </p>
          <hr className="my-4" />

          {/* Experience */}
          <h3 className="text-xl font-bold mb-2">Experience</h3>
          <p className="text-sm font-semibold">p30web</p>
          <p className="text-sm text-zinc-700">Aban 1403 - Current</p>
          <p className="text-sm">Developed and contributed to <a href="https://expertiew.com/" className="text-blue-600">Expertiew</a></p>
          <ul className="list-disc list-inside text-sm text-zinc-800">
            <li>Used Next.js, React, TypeScript, Google Auth, and React Query</li>
            <li>Designed sign-in forms and booking pages</li>
            <li>Worked with the backend team for feature integration</li>
          </ul>
          <hr className="my-4" />

          {/* Skills */}
          <h3 className="text-xl font-bold mb-2">Skills</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-zinc-800">
            <ul className="list-disc list-inside">
              <li>Next.js</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>RESTful API</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Axios</li>
              <li>Tailwind CSS</li>
              <li>Git</li>
              <li>Figma</li>
            </ul>
          </div>
          <hr className="my-4" />

          {/* Projects */}
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <div className="text-sm text-zinc-800">
            <p className="font-semibold">Squid Game</p>
            <p>Developed a "Red Light, Green Light" game using Next.js, Framer Motion, and Tailwind CSS.</p>
            <p className="flex space-x-4">
              <a className="text-blue-600" href="https://squid-game-chi.vercel.app/">Live</a>
              <a className="text-blue-600" href="https://github.com/mh-morowati/squid_game">GitHub</a>
            </p>

            <p className="font-semibold mt-2">Cryptocurrency Price Tracker</p>
            <p>Built a real-time crypto tracker using Next.js, React Query, and Axios.</p>
            <p className="flex space-x-4">
              <a className="text-blue-600" href="https://arzdigital.vercel.app/">Live</a>
              <a className="text-blue-600" href="https://github.com/mh-morowati/arzdigital">GitHub</a>
            </p>

            <p className="font-semibold mt-2">E-Commerce Project – Digikala Clone</p>
            <p>Developed a Digikala-like store with Next.js and NextAuth authentication.</p>
            <p className="flex space-x-4">
              <a className="text-blue-600" href="https://github.com/mh-morowati/digikala-clone">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
