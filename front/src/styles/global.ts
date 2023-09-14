import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  html,
  body {
    background-color: #f6fcff;
    font-family: "Mark Pro";
  }
  ul, 
  ol {  
    padding: 0;
    list-style-type: none;
    margin: 0;
  }

  form { 
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  input{        
    all: unset;  
  }
  button {
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
  }
  a {
    text-decoration: none;
    font-family: "Mark Pro";
  }
  img {
    display: block;
  }

  .wrapper {

    gap: 2rem !important ;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
    
    @media(max-width: 800px){
      width: 100%;
      margin-bottom: 450px;

    }

    @media(min-width: 801px){
      width: 50%;
      /* min-width: 100vw; */
    }

   
  }
  
  .center-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export default GlobalStyle;
