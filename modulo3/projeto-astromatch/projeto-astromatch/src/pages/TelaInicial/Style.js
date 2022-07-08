import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 60px;
  box-sizing: border-box;
  /* grid-column: 1/-1; */
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #1d63ed;
  @media screen and (max-device-width : 480px){
  width: 100vw;
  }
`

export const ParteEsquerda = styled.div`
  display: flex;
  align-items: center;
`

export const ImagemLogo = styled.img`
  width: 30px;
  margin: 0px 0px 0px 20px;
  &:hover{
    cursor:pointer;
  }
`

export const ImgUser = styled.img`
  width: 50px;

`

export const Description = styled.div`
  
`

export const Descricao = styled.div`

`