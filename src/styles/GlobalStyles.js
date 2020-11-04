import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #234e52;
    --orange: orange;
  }
  html {
    font-size: 8px;
  }

  body {
    font-size: 2rem;
  }
  a {
    color: var(--orange);
  }
  @media(min-width: 750px) {
    .code::before {
      content: "< ";
      font-size: inherit;
      color: transparent;
    }
    .code::after {
      content: " />";
      font-size: inherit;
      color: transparent;
    }
    .code:hover::before {
      color: inherit;
    }
    .code:hover::after {
      color: inherit;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  code.language-javascript {
      background: #f4f4f4;
      border: 1px solid #ddd;
      border-left: 3px solid var(--orange);
      color: #666;
      page-break-inside: avoid;
      font-family: monospace;
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 1.6em;
      max-width: 100%;
      overflow: auto;
      padding: 1em 1.5em;
      display: block;
      word-wrap: break-word;
      margin-top: 2rem;

    a {
      text-decoration: underline;
      color: #c05621;
    }
  }
`

export default GlobalStyles
