import React from "react";
import "@fontsource/advent-pro/200.css";
import "@fontsource/advent-pro/300.css";
import "@fontsource/advent-pro/400.css";
import "@fontsource/advent-pro/500.css";
import "@fontsource/advent-pro/600.css";
import "@fontsource/advent-pro/700.css";
import "tailwindcss/tailwind.css";
import '../styles/globals.css';
import { Provider } from "react-redux";
import store from "../store/store";
import type { AppProps } from "next/app";
import MasterLayout from "../components/Layouts/MasterLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MasterLayout>
        <Component {...pageProps} />
      </MasterLayout>
    </Provider>    
  );
}

export default MyApp
