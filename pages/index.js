import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Clone TabNews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="under-construction-container">
        <div className="content">
          <h1 className="title">Site em Construção</h1>
          <p className="message">
            Estamos trabalhando para trazer novidades em breve!
          </p>
          <div className="icon">⚡</div>
        </div>
      </div>
    </>
  );
};

export default Index;
