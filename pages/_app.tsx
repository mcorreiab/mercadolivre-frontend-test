/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "../styles/globals.css";
import "normalize.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
