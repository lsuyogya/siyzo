import React from "react";
import { introTxt, freeCloudTxt } from "./constants";

const CloudPage = () => {
  return (
    <main>
      <section id="cloudIntro" className="grid gap-4">
        <h1 className="pageTitle">SiyZo Cloud</h1>
        <p>{introTxt}</p>
      </section>
      <section>{freeCloudTxt}</section>
    </main>
  );
};

export default CloudPage;
