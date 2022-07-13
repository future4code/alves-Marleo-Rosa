import styled from 'styled-components'
export const Escopo = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
height: 100vh;
background-image: url(https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_stellar_death_s_ring_miri_nircam_sidebyside-5mb.jpg)

`

export const Tudao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  color: aliceblue;
  /* width: 375px; */
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  /* background-color: #ec69b5; */
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 38%, rgba(9,8,8,1) 100%);
  @media screen and (max-device-width : 480px){
  width: 90%;
  }
`

export const Botoes = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
`