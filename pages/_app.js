import "../styles/index.css"; // Importação global do CSS
import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
