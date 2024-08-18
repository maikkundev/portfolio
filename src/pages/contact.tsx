import React from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import clsx from "clsx";

import styles from "./index.module.css";

export default function MyReactPage() {
  return (
    <Layout>
      <Heading
        as="h1"
        className={clsx(
          "hero hero__title justify-center hero--primary",
          styles.heroBanner
        )}
      >
        Contact
      </Heading>
      <div className="container">
        <div className="row-auto">
          <p className="text-4xl py-1">Email</p>
          <p className="py-1">
            You can contact me via email:{" "}
            <a href="mailto: hello@maikkun.dev" className="font-bold">
              hello@maikkun.dev
            </a>
          </p>
          <p className="text-4xl py-1">Discord</p>
          <p className="py-1">
            You can find me on Discord:{" "}
            <a href="discord: " className="font-bold">
              @MaikkunDev
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
