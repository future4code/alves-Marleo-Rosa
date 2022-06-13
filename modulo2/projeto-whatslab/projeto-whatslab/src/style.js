import styled from "styled-components";

export const MsgEnviadas = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
padding: 5px;
`
export const CaractereUser = styled.div`
font-weight: bold;
`

export const BotaoEnviar = styled.button`
font-family: monospace;
padding: 3px 8px;

&:hover{
    background-color: whitesmoke;
    color: green;
}

&:active{
    background-color: greenyellow;
    box-shadow: greenyellow 1px 1px 5px;
}
`
export const Quadradao = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 307px;
margin: 0% 20% 0% 20%;
height: 100%;
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
`