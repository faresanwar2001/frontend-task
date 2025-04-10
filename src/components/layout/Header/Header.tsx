import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { Scale } from "lucide-react";
import Select from "react-select";
import Flag from "react-world-flags";

function Header() {
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
    <header className="flex py-5 container mx-auto justify-between">
      {/* Logo */}
      <div>
        <h1 className="text-pink-500 font-bold text-xl">MyHeader</h1>
      </div>

      {/* Links */}
      <ul className="flex gap-5">
        {linksHeader.map((link, index) => (
          <li className="text-xl font-semibold" key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex gap-5">
        {/* Search icon */}
        <button className="text-pink-500">
          <Search className="h-6 w-6" />
        </button>

        {/* Wishlist icon */}
        <button className="text-pink-500 relative">
          <Heart className="h-6 w-6" />
          <span className="absolute -top-5 -right-1 text-white bg-pink-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </button>

        {/* Compare icon */}
        <button className="text-pink-500">
          <Scale className="h-6 w-6" />
        </button>

        {/* Countries icon */}
        <div className="flex space-x-4">
          <Select options={countryOptions} placeholder="Select a country" />
        </div>
      </div>
    </header>
  );
}

export default Header;
