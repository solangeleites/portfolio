import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
        :root{
        --beige: #FEFAE0;
        --verde: #283618;
        --oliva: #606C38 ;
    }
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        scroll-behavior: smooth;
        list-style: none;
        text-decoration: none;        
        color:#0B0101;

    }
    html {
          scroll-behavior: smooth;
          letter-spacing: -0.5px;
          scroll-padding-top: 100px;
    }`;
