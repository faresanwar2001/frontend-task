import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe, Menu, Search } from "lucide-react";
import { Heart } from "lucide-react";
import { Scale } from "lucide-react";
import { useState } from "react";
import Flag from "react-world-flags";

function Header() {
  // State 
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  // Variables
  const linksHeader = [
    { href: "/", label: "Home" },
    { href: "#", label: "Categories" },
    { href: "#", label: "New products" },
    { href: "#", label: "Recommended" },
  ];

  const countryOptions = [
    {
      value: "US",
      label: (
        <span>
          <Flag code="US" width={24} height={24} /> USA
        </span>
      ),
    },
    {
      value: "CA",
      label: (
        <span>
          <Flag code="CA" width={24} height={24} /> Canada
        </span>
      ),
    },
    {
      value: "GB",
      label: (
        <span>
          <Flag code="GB" width={24} height={24} /> UK
        </span>
      ),
    },
    {
      value: "FR",
      label: (
        <span>
          <Flag code="FR" width={24} height={24} /> France
        </span>
      ),
    },
    {
      value: "DE",
      label: (
        <span>
          <Flag code="DE" width={24} height={24} /> Germany
        </span>
      ),
    },
    {
      value: "ES",
      label: (
        <span>
          <Flag code="ES" width={24} height={24} /> Spain
        </span>
      ),
    },
    {
      value: "IT",
      label: (
        <span>
          <Flag code="IT" width={24} height={24} /> Italy
        </span>
      ),
    },
    {
      value: "AU",
      label: (
        <span>
          <Flag code="AU" width={24} height={24} /> Australia
        </span>
      ),
    },
  ];

  return (
    <header className="flex py-7 lg:mb-7 mb-3 container mx-auto justify-between items-center lg:px-0 px-7">
      {/* Logo */}
      <div>
        <h1 className="text-pink-500 font-bold text-xl">OnlineShope</h1>
      </div>

      {/* Links */}
      <ul className="lg:flex hidden gap-5">
        {linksHeader.map((link, index) => (
          <li className="font-semibold text-slate-950" key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Search bar */}
      <div className="relative lg:flex hidden gap-3 justify-center items-center">
          <Search className="h-6 w-6 absolute left-3 text-gray-400" />

          {/* Input */}
          <input type="text" placeholder="Search..."  className="py-2 pl-10 rounded-xl border-2 border-pink-500 focus:outline-slate-800"/>
        </div>

      {/* Icons */}
      <div className="flex gap-8">
        {/* Wishlist icon */}
        <button className="text-pink-500 relative lg:block hidden">
          <Heart className="h-6 w-6" />
          <span className="absolute -top-3 -right-2 text-white bg-pink-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </button>

        {/* Compare icon */}
        <button className="text-pink-500 lg:block hidden">
          <Scale className="h-6 w-6" />
        </button>

        <div>
      <DropdownMenu>
        {/* Trigger */}
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-0">
            <Globe color="#F82BA9" className="cursor-pointer" />
          </Button>
        </DropdownMenuTrigger>

        {/* Content */}
        <DropdownMenuContent className="bg-white text-[#F82BA9]">
          {countryOptions.map((country) => (
            <DropdownMenuItem key={country.value}>
              <div className="flex items-center gap-2 ">
                <span>{country.label}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>


        {/* Menu */}
        <button className="text-pink-500 lg:hidden block cursor-pointer" onClick={()=> setOpenMenu(!openMenu)}>
          <Menu className="h-6 w-6" />
        </button>

        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-4 font-semibold transform transition-transform ${openMenu? "opacity-100" : "opacity-0"}`}
        style={{transition:"transform 0.3s ease, opacity 0.3s ease"}}
        >
        {linksHeader.map((link, index) => (
          <li className="font-semibold text-pink-500 list-none w-full text-center p-3 transition-all cursor-pointer hover:text-slate-700" key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}

         {/* Wishlist icon */}
         <button className="font-semibold text-pink-500 text-center p-3 transition-all cursor-pointer hover:text-slate-700 relative">
          <Heart className="h-6 w-6" />
          <span className="absolute top-0 -right-1 text-white bg-pink-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </button>

        {/* Compare icon */}
        <button className="font-semibold text-pink-500 text-center p-3 transition-all cursor-pointer hover:text-slate-700">
          <Scale className="h-6 w-6" />
        </button>

        </div>

      </div>
    </header>
  );
}

export default Header;
