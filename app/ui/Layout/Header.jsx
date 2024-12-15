import GithubIcon from "../icons/GithubIcon";
import HeaderIcon from "../icons/HeaderIcon";

export default function Header() {
  return (
    <header className="bg-[#f5f6fa]">
      <div className="w-full h-[60px] border-b md:border-none flex px-[27px] justify-between items-center">
        <div>
          <HeaderIcon width="40" height="40" />
        </div>
        <div className="flex items-center ">
          <p className="font-bold text-[#353b48]">
            Rick and Morty <span className="text-[#8c7ae6]">Wiki</span>
          </p>
          <div className=" ml-3 md:hidden">
            <a
              href="https://github.com/ardaocakkk/rick-and-morty-wiki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon width="35" height="35" />
            </a>
          </div>
          <a
            href="https://github.com/ardaocakkk/rick-and-morty-wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[120px] text-[#353b48] hover:text-[#f5f6fa] border-2 h-[29px] ml-3 items-center justify-center cursor-pointer border-[#8c7ae6] hover:bg-[#8c7ae6] hidden md:block rounded-md transition duration-100">
              <p className="font-bold text-center items-center">Github</p>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
