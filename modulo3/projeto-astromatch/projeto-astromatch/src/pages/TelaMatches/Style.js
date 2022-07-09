import styled from 'styled-components'

export const Escopo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100vh;
`

export const Tudao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  /* width: 375px; */
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  /* background-color: #ec69b5; */
  background: rgb(20,112,221);
  background: linear-gradient(0deg, rgba(20,112,221,1) 0%, rgba(253,187,45,1) 100%);
  overflow: auto;
  @media screen and (max-device-width : 480px){
  width: 90%;
  }
`

export const Header = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  /* grid-column: 1/-1; */
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #1d63ed;
  border-radius: 5px;
  @media screen and (max-device-width : 480px){
  width: 100vw;
  }
`

export const ImagemLogo = styled.img`
  width: 180px;
  margin: 0px 0px 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover{
    cursor:pointer;
  }
`

export const EstiloReset = styled.img`
    width: 48px;
    :hover{
    overflow: hidden;
    width: 48px;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
}

`

export const EstiloListaMatches = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  height: 50px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  color: white;
  margin-bottom: 15px;
  padding: 15px;
  /* border: solid blue; */
 
  p{
      font-size: 2em;
  }
  img{
      height: 64px;
      width: 64px;
      object-fit: cover;
      margin-right: 15px;
      border-radius: 10px;
      box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
      :hover{
      overflow: hidden;
      width: 64px;
      max-width: 100%;
      -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`

export const EstiloImagemMatch = styled.img`
  width: 12px;
  /* border: solid orange; */

`

export const EstiloNomeMatch = styled.div`
  font-size: 14px;
  font-style: oblique;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);

`