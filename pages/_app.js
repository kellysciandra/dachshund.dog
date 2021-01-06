import React from "react";
import "../styles/globals.css";
import Nav from "../components/nav";
import { StateProvider } from "../store";

// CSS
import "../node_modules/nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
      <Nav />
    </StateProvider>
  );
}

export default MyApp;
