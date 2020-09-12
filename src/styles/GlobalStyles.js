import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body{
    background-color:#F3F3F3;
  }

  

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  p{
    line-height : 30px;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
    color:gray;
    padding:5px 15px
  }


  
`
