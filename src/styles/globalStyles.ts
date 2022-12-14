import { createGlobalStyle } from 'styled-components';
import { fonts } from './fontsTypes';
import { mediaQueries } from './media';

const fontStyles = () => {
  let formattedFonts = '';
  Object.values(fonts).forEach(value => {
    formattedFonts += ` ${value}`;
  });
  return formattedFonts;
};

fontStyles();

export const GlobalStyle = createGlobalStyle`

  ${fontStyles()}

  div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: inherit;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section, main, summary {
    display: block;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    min-width: 280px;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *:focus,
  *:active,
  *:hover {
    outline: 0 none !important;
  }
  ul {
    list-style: none;
  }

  ul li {
    position: relative;
  }

  ul li::before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 5px;
  }

  ol {
    list-style-type: decimal;
      list-style-position: inside;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  img {
    border: 0;
    display: block;
    max-width: 100%;
    height: auto;
  }
  input, select, textarea, optgroup {
    width: 100%;
    margin: 0;
    padding: 0;
    background: transparent;
    border: 1px solid;
    border-radius: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: normal;
    text-transform: none;
    -webkit-appearance: none;
    -moz-appearance:   none;
    appearance:        none;
  }
  input::-moz-placeholder {
    color: inherit; 
    opacity: 1;
  }
  input::-ms-input-placeholder {
    color: inherit; 
    opacity: 1;
  }
  input::-webkit-input-placeholder {
    color: inherit; 
    opacity: 1;
  }
  textarea::-moz-placeholder {
    color: inherit; 
    opacity: 1;
  }
  textarea::-ms-input-placeholder {
    color: inherit; 
    opacity: 1;
  }
  textarea::-webkit-input-placeholder {
    color: inherit; 
    opacity: 1;
  }
  input[type="checkbox"] {
    width: auto !important;
    height: auto !important;
    border: 0 none !important;
    margin: 0 !important;
    padding: 0 !important;
    -webkit-appearance: checkbox;
    -moz-appearance:   checkbox;
    appearance:        checkbox;
  }
  input[type="radio"] {
    width: auto !important;
    height: auto !important;
    border: 0 none !important;
    margin: 0 !important;
    padding: 0 !important;
    -webkit-appearance: radio;
    -moz-appearance:   radio;
    appearance:        radio;
  }
  input[type="submit"] {
    width: auto;
    cursor: pointer;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
  textarea {
    resize: none;
  }
  input:focus,
  select:focus, 
  textarea:focus {
    outline: none;
  }
  svg {
    overflow: visible;
  }
  button {
    border: 0 none;
    background: transparent;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
  }
  button:focus {
    outline: none !important;
  }


  button,
  select {
    cursor: pointer;
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }
  b,
  strong {
    font-weight: 600;
  }
  dfn {
    font-style: italic;
  }
  mark {
    background: #ff0;
    color: #000;
  }
  em {
    font-style: italic;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  pre {
    overflow: auto;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }



  *::-moz-selection {
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { colors } }) => colors.gray4}; }

  *::-webkit-selection, *::selection {
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { colors } }) => colors.gray4}; }

  * {
    scrollbar-color: ${({ theme: { colors } }) => colors.gray2} transparent;
    scrollbar-width: thin; }
    *::-webkit-scrollbar {
      width: 0.8rem; }
    *::-webkit-scrollbar-track {
      background: ${({ theme: { colors } }) => colors.gray2}; }
    * ::-webkit-scrollbar-thumb {
      background-color: ${({ theme: { colors } }) => colors.gray2};
      outline: 0px solid ${({ theme: { colors } }) => colors.gray2};
      -webkit-border-radius: 5px;
      border-radius: 5px; }

  html {
    font-size: 62.5%; 
    ${mediaQueries(599)} {
      font-size: 50%;
    }
  }

  body {
    font-family: 'SpaceMono';
    font-size: 1.6rem;
    font-weight: 400;
    transition: background 0.3s ease;
  }

  input {
      color: ${({ theme: { colors } }) => colors.gray2};
      transition: all 0.3s ease 0s;

      &::placeholder {
        color: ${({ theme: { colors } }) => colors.gray2};
      }

    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }
  }

  .ant-layout-has-sider {
    display: flex;

    ${mediaQueries(767)} {
     display: block;
    }
  }

  .ant-layout-sider {

    ${mediaQueries(599)} {
     min-width: 100% !important;
     max-width: 100% !important;
    }
  }


  [data-theme="dark"] {
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors.gray6};

    input {
      color: ${({ theme: { colors } }) => colors.white};

      &::placeholder {
        color: ${({ theme: { colors } }) => colors.white};
      }
    }
  }

  [data-theme="light"] {
    color: ${({ theme: { colors } }) => colors.gray6};
    background-color: ${({ theme: { colors } }) => colors.white};
  }

`;
