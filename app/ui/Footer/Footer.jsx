import GithubIcon from "../icons/GithubIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

export default function Footer() {
    return (
      <div className="w-full bg-[#2f3640] text-[#f5f6fa] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Rick and Morty <span className="text-[#8c7ae6]">Wiki</span></h2>
            <p className="text-sm">© 2024 All rights reserved.</p>
            <p>Made by ardaocak </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/ardaocakkk/rick-and-morty-wiki" target="_blank" rel="noopener noreferrer" className="hover:text-[#8c7ae6]">
              <GithubIcon color="#8c7ae6" width="20" height="20" /> 
            </a>
            <a href="https://x.com/ardaocak44">
             <TwitterIcon color="#8c7ae6" width="20" height="20"  />
            </a>
            <a href="https://www.youtube.com/@ardaocakk">
                <YoutubeIcon color="#8c7ae6" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    );
  }