import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Hero.module.css";

export default function Hero() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    const { target: { value } = {} } = e || {};
    setSearchInput(value.toLowerCase());
    /* 
      TODO: add a domain validator based on follow rule set:
        - domain name should be a-z or A-Z or 0-9 and hyphen (-).
        - domain name should be between 1 and 63 characters long.
        - domain name should not start or end with a hyphen(-) (e.g. -geeksforgeeks.org or geeksforgeeks.org-).
        - last TLD (Top level domain) must be at least two characters and a maximum of 6 characters.
        - domain name can be a subdomain (e.g. contribute.geeksforgeeks.org)
      TODO: add a debounce to domain validator, so the validation only
      occurs once every second at max
    */
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formattedDomain = searchInput.includes(".")
      ? searchInput
      : `${searchInput}.com`;
    router.push(`/registration?domain=${formattedDomain}`);
  };

  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <h1 className="text-6xl tracking-tight font-black uppercase text-center mb-10 text-white space-y-2">
          <span className="block xl:inline">Do More</span>
          <div className="flex justify-center">
            <span className={`${styles.dot} text-red-600 xl:inline`}>•</span>
            <div className={`${styles.slider} xl:inline text-center`}>
              <div className={`${styles["slider-item"]} text-center`}>tech</div>
              <div className={`${styles["slider-item"]} text-center`}>
                travel
              </div>
              <div className={`${styles["slider-item"]} text-center`}>
                online
              </div>
              <div className={`${styles["slider-item"]} text-center`}>fun</div>
              <div className={`${styles["slider-item"]} text-center`}>org</div>
            </div>
          </div>
        </h1>

        <form
          className={`flex flex-col sm:flex-row md:max-w-screen-sm m-auto`}
          onSubmit={onSubmit}
        >
          <div className="search-field flex-grow sm:mr-2">
            <label>
              <input
                type="text"
                className="p-3 text-xl font-light rounded-md bg-white border w-full mb-3"
                name="search"
                value={searchInput}
                onChange={onChange}
                maxLength={63}
                placeholder="james.com"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={searchInput.length === 0}
            className={`flex text-sm justify-center items-center px-10 py-4 uppercase bg-red-500 text-white text-center rounded-md mb-3 transition-colors ${
              searchInput.length === 0
                ? "opacity-90 cursor-not-allowed"
                : "hover:bg-red-600"
            }`}
          >
            Search
          </button>
        </form>

        <p className="tld-price-info space-x-3 text-center text-sm sm:text-lg text-white">
          <span>
            <span className="font-bold">.COM</span> only $9.99
          </span>
          <span>
            <span className="font-bold">.NET</span> only $12.99
          </span>
          <span>
            <span className="font-bold">.ORG</span> only $8.99
          </span>
        </p>
      </div>
    </section>
  );
}
