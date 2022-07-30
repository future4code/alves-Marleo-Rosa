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
    width: 375px;
    height: 40px;
    @media screen and (max-device-width : 480px){
        width: 100vw;   
    }
`

export const BotaoHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100px;
    height: 20px;
    margin: 10px;
    align-items: center;
    font-weight: bold;
    color: white;
    font-size: 12px;
    background-color: #1893ff;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
    :hover{
        box-shadow: 0 1px 1px 0 #ffd900ff, 0 2px 2px 0 #ffd900ff;
        cursor: pointer; 
    }
    :active{
        background-color: #1261a6;
    }
`

export const LogoImage = styled.img`
    width: 70vw;
    max-width: 30px;
    margin: 10px;
    `

export const BotaoLoginLogout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100px;
    height: 20px;
    margin: 10px;
    align-items: center;
    font-weight: bold;
    color: white;
    font-size: 12px;
    background-color: #1893ff;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
    :hover{
        box-shadow: 0 1px 1px 0 #ffd900ff, 0 2px 2px 0 #ffd900ff;
        cursor: pointer; 
    }
    :active{
        background-color: #1261a6;
    }
`
