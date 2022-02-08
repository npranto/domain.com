import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import styles from "../styles/Registration.module.css";
import useSearchInput from "../hooks/useSearchInput";
import { useState } from "react/cjs/react.development";
import Loading from "../components/Loading";

export default function Registration() {
  const router = useRouter();
  const [isSearching, setIsSearching] = useState(true);
  const { searchInput, onChange } = useSearchInput(router?.query?.domain || "");

  return (
    <div className={styles.container}>
      <Head>
        <title>Domain.com - Registration - Domain.com</title>
        <meta
          name="description"
          content="Finding the perfect website domain is as easy as 1-2-3. Buy a domain name, build and host a website, and enjoy our professional online marketing tools."
        ></meta>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <Nav />

      <main className={styles.main}>
        <section className="search-bar flex p-3 w-full box-border bg-gray-800">
          <form className="search-form w-full max-w-screen-lg mx-auto">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="text-lg font-normal flex-grow p-2 rounded-md"
                placeholder="coffee.com"
                value={searchInput}
                onChange={onChange}
              />
              <button type="submit">
                <BsSearch size="1.5em" className="text-white" />
              </button>
            </div>
          </form>
        </section>

        <article className="overflow-auto">
          {isSearching ? (
            <section className="loading-status">
              <Loading />
            </section>
          ) : (
            <>
              <section className="domain-search-result"></section>
              <section className="domain-search-listing"></section>
            </>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
