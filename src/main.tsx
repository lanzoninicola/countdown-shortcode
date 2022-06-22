import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CountdownWidgetProvider from "./countdown-widget-provider/countdown-widget-provider";
import CountdownWidgetThemeProvider from "./countdown-widget-theme-provider/countdown-widget-theme-provider";

const rootElement = document.getElementById("root");

const cdShortcodeWrapperOne = document.createElement("div");
cdShortcodeWrapperOne.classList.add("wbg-countdown-shortcode");
cdShortcodeWrapperOne.setAttribute("data-id", "16");

const cdShortcodeWrapperTwo = document.createElement("div");
cdShortcodeWrapperTwo.classList.add("wbg-countdown-shortcode");
cdShortcodeWrapperTwo.setAttribute("data-id", "17");

// get body
const body = document.querySelector("body");
// append countdown shortcode wrapper to body
body && body.appendChild(cdShortcodeWrapperOne);
body && body.appendChild(cdShortcodeWrapperTwo);

/**
 *
 * END OF COUNTDOWN SHORTCODE RENDERING FROM THE SERVER
 *
 */

document.addEventListener("DOMContentLoaded", function () {
  const shortcodes: NodeListOf<Element> = document.querySelectorAll(
    ".wbg-countdown-shortcode"
  );

  // for each shortcode node attach create react app
  shortcodes.forEach((shortcode) => {
    const id = shortcode.getAttribute("data-id");

    if (id) {
      ReactDOM.createRoot(
        document.querySelector(`.wbg-countdown-shortcode[data-id="${id}"]`)!
      ).render(
        <React.StrictMode>
          <ChakraProvider>
            <CountdownWidgetProvider current={id}>
              <CountdownWidgetThemeProvider>
                <App current={id} />
              </CountdownWidgetThemeProvider>
            </CountdownWidgetProvider>
          </ChakraProvider>
        </React.StrictMode>
      );
    }
  });
});
