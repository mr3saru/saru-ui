/* eslint-disable react/display-name */
import React from 'react'

export default () => (
  <div>
    <style jsx global>{`
      :root {
        --action: #e45876;
        --positive: #73c6fa;
        --base: #263640;

        --black: #000000;
        --dark: #444444;
        --gray: #b0a5a5;
        --light: #dddddd;
        --lighter: #fafafa;
        --white: #ffffff;

        --max-width: 120rem;

        --font-family: 'Inter';

        --font-xxsmall: 0.4rem;
        --font-xsmall: 0.8rem;
        --font-small: 1.2rem;
        --font-medium: 1.6rem;
        --font-large: 2rem;
        --font-xlarge: 2.4rem;
        --font-xxlarge: 2.8rem;

        --font-light: 300;
        --font-normal: 400;
        --font-bold: 500;

        --spacing-mini: 0.2rem;
        --spacing-small: 0.4rem;
        --spacing-compact: 0.8rem;
        --spacing-medium: 1.6rem;
        --spacing-large: 3.2rem;
        --spacing-huge: 6.4rem;
        --spacing-giant: 12.8rem;

        --layer-base: 10;
        --layer-layout: 15;
        --layer-menu: 20;
        --layer-overlay: 30;
        --layer-modal: 40;

        --transition-default: 0.3s ease-in-out;
        --transition-fast: 0.1s ease-in-out;

        --shadow-basic: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      html {
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
      }

      html,
      body {
        font-size: 62.5%;
      }

      * {
        font-family: var(--font-family), -apple-system, BlinkMacSystemFont,
          Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        overflow-x: hidden;
      }

      a {
        cursor: pointer;
        color: inherit;
        text-decoration: none;
      }

      b {
        font-weight: var(--font-bold);
      }

      ul,
      li {
        list-style: none;
      }
    `}</style>
  </div>
)
