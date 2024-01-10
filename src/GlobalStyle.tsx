import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 body {
  width: 100vw;
  height: 100vh;
  background: #141d2f;
  font-family: "Space Mono",sans-serif;
  display:flex;
  justify-content: center;
}
html {
      box-sizing: border-box;
    }
  *, *:before, *:after {
     box-sizing: inherit;
  }
    
  body, h1,h2,h3, p{
      margin: 0;
      padding: 0;
  }
`;

export default GlobalStyle;
