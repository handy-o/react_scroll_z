import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0; padding:0; box-sizing: border-box;
  }
  ul, ol, li {
    list-style:none;
  }
  a {text-decoration:none;}

  body {
    height: ${(props) => props.num * props.distance + 'px'}
  }
`;

export default GlobalStyles;
