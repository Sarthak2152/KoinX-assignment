import { useState } from "react";
import Logo from "../../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
const links = ["Crypto Taxes", "Free Tools", "Resource Center"];
import { RxCross1 } from "react-icons/rx";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full bg-white px-[1.5rem] sm:px-[3.5rem]">
      <div className="mx-auto flex h-[5rem] max-w-[83rem] items-center justify-between ">
        <img className="w-[6rem]" src={Logo} alt="Koinx logo" />
        <nav className="hidden items-center gap-11 sm:flex">
          <ul className="flex items-center gap-8 ">
            {links.map((link, index) => (
              <li
                className="cursor-pointer font-semibold text-[#0F1629]"
                key={index}
              >
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <button className="rounded-lg border bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-[1.5rem] py-[.625rem] font-semibold text-white">
            Get Started
          </button>
        </nav>
        <button
          className="flex items-center gap-2  rounded-lg bg-white px-6 py-3 font-semibold  text-[#0F1629] sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross1 /> : <GiHamburgerMenu className="text-xl" />}
        </button>
      </div>
      <nav
        className={`p-4 transition-all duration-300 ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col items-center gap-8 ">
          {links.map((link, index) => (
            <li
              className="cursor-pointer font-semibold text-[#0F1629]"
              key={index}
            >
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
