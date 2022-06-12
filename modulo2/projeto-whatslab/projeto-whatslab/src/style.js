import styled from "styled-components";
export const BotaoEnviar = styled.button`
font-family: monospace;
box-shadow: greenyellow 1px 1px 5px;
padding: 5px 8px;
&:hover{
    background-color: black;
    color: white;
}
`
export const Quadradao = styled.div`
display: flex;
flex-direction: column;
flex: 1 1 0%;
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
-webkit-box-pack: end;
align-items: center;
justify-content: flex-end;
padding: 307px;
position: fixed;
bottom: 0;
box-sizing: border-box;
box-shadow: 1px 1px 5px;
border: 1px solid green;
`
export const EscreveUsuario = styled.div`
 position: fixed;
 bottom: 0;
 display: flex;
 flex-direction: row;

`