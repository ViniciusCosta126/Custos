import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }
    body{
        background-color: #EEEEEE;
        .container{
            padding: 0 24px;

            @media(min-width:768px){
                padding: 0 48px;
            }
            @media(min-width: 1024px){
                padding: 0 96px;
            }
        }
    }
    a{
        text-decoration: none;
    }
`;
