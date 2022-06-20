import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./app-provider/app-provider";

const rootElement = document.getElementById("root");

const cdShortcodeWrapperOne = document.createElement("div");
cdShortcodeWrapperOne.classList.add("countdown-shortcode");
cdShortcodeWrapperOne.setAttribute("data-id", "16");

const cdShortcodeWrapperTwo = document.createElement("div");
cdShortcodeWrapperTwo.classList.add("countdown-shortcode");
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
    ".countdown-shortcode"
  );

  // for each shortcode node attach create react app
  shortcodes.forEach((shortcode) => {
    const id = shortcode.getAttribute("data-id");

    if (id) {
      ReactDOM.createRoot(
        document.querySelector(`.countdown-shortcode[data-id="${id}"]`)!
      ).render(
        <React.StrictMode>
          <ChakraProvider>
            <AppProvider current={id}>
              <App />
            </AppProvider>
          </ChakraProvider>
        </React.StrictMode>
      );
    }
  });
});

// ReactDOM.createRoot(
//   document.querySelector('.countdown-shortcode[data-id="17"]')!
// ).render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>
// );
