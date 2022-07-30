/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaSearch } from "react-icons/fa";
import content from "./content.json";

export default function StartPerfectDomain() {
  return (
    <section className="flex flex-col max-w-screen-lg mx-auto my-0 px-4 md:px-10 py-20 space-y-4">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl text-center">
        {content.header}
      </h2>
      <h3 className="text-2xl font-thin tracking-tight text-gray-700 sm:text-3xl text-center">
        {content.subheader}
      </h3>
      <ul className="highlighted-tld-cards space-y-1 m-0 list-none flex flex-col md:flex-row md:space-x-6">
        {(content?.highlightedTLDs || []).map((tld) => {
          return (
            <li
              key={tld.tld}
              className="highlighted-tld-card flex flex-col p-6 shadow-xl space-y-4 flex-grow md:w-96"
            >
              <h4 className="text-5xl font-semibold tracking-tight text-gray-900">
                <span className="red-dot text-red-600 mr-1">.</span>
                {tld.tld}
              </h4>
              <p className="tld-desc text-gray-500">{tld.description}</p>
              <p className="starting-price text-xl text-gray-700">
                {tld.priceInfo}
              </p>
              <form className="w-full domain-form flex justify-center relative">
                <div className="domain-input w-full">
                  <input
                    type="text"
                    name="domain"
                    id="domain"
                    placeholder={`Search .${tld.tld}`}
                    className="border-2 block w-full   shadow-sm text-xl px-4 py-2 border-gray-300 rounded-md"
                  />
                </div>
                <button type="submit" className="px-2 absolute right-0 h-full">
                  <FaSearch className="text-xl text-red-600" />
                </button>
              </form>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
