import styled from "styled-components"

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`
export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: solid 1px orange;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);

    background-color: #edecec;
    width: 20vw;
    height: 40px;
    @media screen and (max-device-width : 480px){
        width: 100vw;   
    }
`

export const BotaoHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100px;
    height: 20px;
    margin: 10px;
`
