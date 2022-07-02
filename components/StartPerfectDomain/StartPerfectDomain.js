/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./StartPerfectDomain.module.css";

const DEFAULT_TLDS = [
  {
    name: ".me",
  },
  {
    name: ".store",
  },
  {
    name: ".blog",
  },
];

export default function StartPerfectDomain({ tlds = DEFAULT_TLDS }) {
  return (
    <section className={styles.container}>
      <h2>START WITH THE PERFECT DOMAIN</h2>
      <h3>
        With more than 300 domain extensions, you'll find the one that fits just
        right.
      </h3>
      <ul className="highlighted-tld-cards">
        {tlds.map((tld) => {
          return (
            <li key={tld.name} className="highlighted-tld-card">
              {tld.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
