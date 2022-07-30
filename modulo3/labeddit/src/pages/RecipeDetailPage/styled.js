import styled from "styled-components"

export const Geral = styled.div`
  flex-direction: row;
  align-items: center;
  width: 100vw;
  /* border: solid #00bbff; */
  /* height: 100vh; */
  overflow-x: hidden;
  box-sizing: border-box;
`

export const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* background-color: #5E5E5E; */
  justify-content: center; 
  @media screen and (max-device-width : 480px){
    width: 100vw;
    }
  `

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  width: 300px;
  height: 160px;
  /* left: 0px; */
  /* top: 0px; */
  background: #E0E0E0;
  border: solid 1px #E0E0E0;
  border-radius: 12px;
  /* box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19); */
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    width: 100%;
  }
`

export const TituloCard = styled.div`

`
export const TextoCard = styled.div`

`
export const CurtidaCard = styled.div`

`

export const AddPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* margin: 10px;
  width: 300px;
  height: 160px; */
`

export const CampoComentar = styled.input`
    display: flex;
    flex-direction: column;
    text-align: start;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
    width: 364px;
    height: 100px;
    font-size: 16px;
    @media screen and (max-device-width : 480px){
    max-width: 100vh;
    display: flex;
    width: 350px;
  }
`

export const BotaoComentario = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 364px;
    height: 47px;
    margin: 10px;
    align-items: center;
    font-weight: bold;
    color: white;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
    border-radius: 12px;
    background: rgb(255,100,137);
    background: linear-gradient(90deg, rgba(255,100,137,1) 0%, rgba(249,178,78,1) 100%);
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
    :hover{
        box-shadow: 0 1px 1px 0 #161819ff, 0 2px 2px 0 #161819ff;
        cursor: pointer; 
    }
    :active{
        background-color: #1261a6;
    }
    @media screen and (max-device-width : 480px){
    max-width: 100vh;
    display: flex;
    width: 350px;
  }
`