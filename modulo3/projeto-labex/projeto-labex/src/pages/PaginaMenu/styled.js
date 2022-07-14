import styled from 'styled-components'

export const Escopo = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
height: 100vh;
background-image: url(https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg)

`

export const Tudao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  color: aliceblue;
  /* width: 375px; */
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  /* background-color: #ec69b5; */
  background: rgb(63,187,251);
  background: radial-gradient(circle, rgba(63,187,251,1) 38%, rgba(9,8,8,1) 100%);
  overflow: auto;
  @media screen and (max-device-width : 480px){
  width: 90%;
  }
`

export const Botoes = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`

export const StyleH3 = styled.div`
margin: 10px;

`
export const StyleListaViagens = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100vw;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  color: white;
  margin-bottom: 15px;
  padding: 15px;
`

export const CampoForm = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);

`