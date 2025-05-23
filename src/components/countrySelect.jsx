import { useState, useRef, useEffect } from "react";
import { X, Mail, Phone, ChevronDown, Search } from "lucide-react";
import { countries } from "./constants";

const CountrySelect = ({ selectedCountry, setSelectedCountry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // Filter countries based on search term
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.dialCode.includes(searchTerm)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center space-x-2 p-2 max-h-[50px] border border-indigo-600 rounded-lg cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{selectedCountry.flag}</span>
        <span>{selectedCountry.dialCode}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute z-20 mt-1 w-64 bg-white shadow-lg rounded-md border border-gray-200 max-h-72 overflow-y-auto">
          <div className="p-2 border-b sticky top-0 bg-white">
            <div className="relative">
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 pl-8 border rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
              />
              <Search
                size={16}
                className="absolute left-2 top-3 text-gray-400"
              />
            </div>
          </div>

          <div>
            {filteredCountries.map((country) => (
              <div
                key={country.code}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedCountry(country);
                  setIsOpen(false);
                }}
              >
                <span className="text-lg">{country.flag}</span>
                <span>{country.name}</span>
                <span className="text-gray-500 ml-auto">
                  {country.dialCode}
                </span>
              </div>
            ))}

            {filteredCountries.length === 0 && (
              <div className="p-3 text-center text-gray-500">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
