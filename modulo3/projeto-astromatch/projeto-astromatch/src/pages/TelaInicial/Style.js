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
  justify-content: space-between;
  width: 25%;
  /* width: 375px; */
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  /* background-color: #ec69b5; */
  background: rgb(20,112,221);
  background: linear-gradient(0deg, rgba(20,112,221,1) 0%, rgba(253,187,45,1) 100%);
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

export const ImgUser = styled.img`
  width: 280px;
  height: 350px;
  max-width: 280px;
  max-height: 350px;
  object-fit: fill;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);

`

export const Description = styled.div`
  font-size: larger;
  font-weight: bold;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  text-align: center;
  margin: 10px;
`

export const Descricao = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 5px;
`

export const EstiloBotoes = styled.div`
  /* position: fixed; */
  /* bottom: 0; */
  align-items: center;
  display: block;
  flex-direction: row;
  
`

export const EstiloDislike = styled.img`
  width: 64px;
  cursor: pointer;
  :hover{
    overflow: hidden;
    width: 64px;
    /* box-shadow: 1px 1px 5px black; */
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

`

export const EstiloLike = styled.img`
    width: 64px;
    cursor: pointer;
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
`

export const EstiloReset = styled.img`
    width: 48px;
    cursor: pointer;
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
}

`

export const EstiloTroca = styled.img`
    width: 48px;
    cursor: pointer;
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
}

`