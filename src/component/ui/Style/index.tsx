import { createGlobalStyle } from 'styled-components';
import reset from 'styled-sanitize';
import { color, font } from '@/theme';

export const Style = createGlobalStyle`
  ${reset}

  html {
    font-size: 100%;
    height: 100%;
  }

  body {
    color: ${color.gray[800]};
    font-family: ${font.family.body};
    word-wrap: break-word;
    width: 100%;
    height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
    box-shadow: none;
  }

  img {
    vertical-align: middle;
  }

  input, button, textarea {
    appearance: none;
  }
`;
