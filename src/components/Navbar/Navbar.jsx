import Logo from "../../assets/images/logo.png";

const links = ["Crypto Taxes", "Free Tools", "Resource Center"];
function Navbar() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex h-[5rem] max-w-[83rem] items-center justify-between">
        <img className="w-[6rem]" src={Logo} alt="Koinx logo" />
        <nav className="flex items-center gap-11">
          <ul className="flex items-center gap-8 ">
            {links.map((link, index) => (
              <li
                className="cursor-pointer font-semibold text-[#0F1629]"
                key={index}
              >
                {link}
              </li>
            ))}
          </ul>
          <button className="rounded-lg border bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-[1.5rem] py-[.625rem] font-semibold text-white">
            Get Started
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
