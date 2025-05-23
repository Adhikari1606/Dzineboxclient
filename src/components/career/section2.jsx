import React, { useState } from "react";
import Input from "./input";
import TextArea from "./textArea";
import { countries } from "../constants";
import CountrySelect from "../countrySelect";

export default function Section2() {
  const handleUpload = () => {
    const input = document.querySelector('input[name="resume"]');

    input.click();
  };

  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.code === "in")
  ); // Default to India

  return (
    <div className="flex gap-[1%] md:flex-row flex-col flex-wrap relative items-center justify-start sm:px-10 lg:px-16  p-4">
      {/* row       */}
      <form className="flex flex-row flex-wrap gap-6 w-full h-full">
        <Input label={"First Name"} name={"firstName"} />
        <Input label={"Last Name"} name={"lastName"} />
        <div className="flex flex-row gap-2 items-center w-full max-w-sm">
          <CountrySelect
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          <Input label={"Phone"} name={"phone"} />
        </div>
        <Input label={"Email"} name={"email"} />
        <TextArea label={"Address"} name={"address"} />
        <div className="flex flex-col w-full max-w-md">
          <Input type="file" label={"Resume"} name={"resume"} />
          <button
            type="button"
            onClick={handleUpload}
            className="bg-[#B8D7FF]/80 text-black font-normal rounded-lg px-4 py-3 mt-4 hover:bg-[#B8D7FF] cursor-pointer transition duration-300 w-[85%]"
          >
            Choose File
          </button>
        </div>
      </form>

      <button className="border border-indigo-600 text-black font-normal rounded-lg px-12 py-2 mt-4 hover:bg-[#B8D7FF] cursor-pointer transition duration-300 ">
        Submit
      </button>
    </div>
  );
}
