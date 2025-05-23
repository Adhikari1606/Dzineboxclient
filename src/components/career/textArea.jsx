import React from "react";

export default function TextArea({ name, label }) {
  return (
    <div
      class={
        "relative w-full max-w-sm border border-indigo-600 bg-transparent rounded-lg px-2"
      }
    >
      <textarea
        name={name}
        id={name}
        required=""
        class="peer block w-full  px-0.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:border-indigo-600 focus:ring-0"
        placeholder=" "
        rows={5}
      />
      <label
        for="input"
        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent pt-1 peer-focus:text-indigo-600 peer-focus:scale-75 peer-focus:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-placeholder-shown:top-6"
      >
        {label}
      </label>
      {/* <div class="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-600 transform scale-x-0 transition-transform focus-within:scale-x-100 peer-focus:scale-x-100"></div> */}
    </div>
  );
}
