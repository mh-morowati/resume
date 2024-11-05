import { FaUser } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";



function Home() {
  return (
    <div>
      <div className="flex p-5">
        <a className="mr-3" target="_blank" href="https://github.com/mh-morowati" rel="noreferrer"><SiGithub className="w-7 h-7 inline-block" /></a>
        <a className="mr-3" href="https://www.linkedin.com/in/muhammad-morowati-b12507307/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin className="w-7 h-7 inline-block text-[#0075b4]" /></a>
          <a className="mr-3" href="mailto:muhammadmorowati@gmail.com"><SiGmail className="w-7 h-7 inline-block text-[#ed4739]" /></a>
          <a className="mr-3 text-sm font-medium p-1 bg-slate-200 rounded" href="tel:+989187139586">+989187139586</a>
      </div>
      <div>
        <FaUser className="w-96 h-96 text-zinc-200 absolute right-1 bottom-36" />
        <div className="bottom-60 absolute left-20 max-sm:top-60">
          <h1 className="text-5xl text-slate-950 max-sm:text-2xl">Hi. i'm Muhammad .</h1>
          <h3 className="mt-2 text-slate-950"> I'm Frontend Developer with React and Next.js</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
