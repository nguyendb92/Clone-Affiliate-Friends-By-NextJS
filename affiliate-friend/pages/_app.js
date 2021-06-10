import React from "react";
import '../styles/globals.css';
// add bootstrap css
import '../styles/Custom.css'
import "../src/components/fontawesome"


function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default MyApp
