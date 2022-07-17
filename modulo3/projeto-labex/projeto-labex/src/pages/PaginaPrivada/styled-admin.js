import styled from 'styled-components'
export const Escopo = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
height: 100vh;
background-image: url(https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_deep_field_smacs0723-1280.jpg?itok=6-LM40Qf)

`

export const Tudao = styled.div`
  /* box-sizing: border-box; */
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
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 38%, rgba(9,8,8,1) 100%);
  overflow: auto;
  /* background-image: url(https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_deep_field_smacs0723-1280.jpg?itok=6-LM40Qf); */

  @media screen and (max-device-width : 480px){
  width: 90%;
  }
`

export const CardNomeViagem = styled.div`

`

export const StyleListaViagens = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  /* height: 100vw; */
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  color: white;
  margin-bottom: 15px;
  padding: 15px;
  :hover p{
    color: #0295ff;
  }
`
export const StyleCriarViagem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  text-decoration:none;
  font-size: 1.1em;
  font-family:Verdana, Geneva, sans-serif;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  padding: 20px 40px;
  color: #fff;
  background-color: #4c4c4c;
  border-radius:50px; 
`

export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`

export const BotãoEstiloso = styled.div`
    margin-right:20px; 
    float: left; 
    text-decoration:none;
    display: inline-block;
    font-size: 1.1em;
    font-family:Verdana, Geneva, sans-serif;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    padding: 20px 40px;
    color: #fff;
    background-color: #4c4c4c;
    border-radius:50px;
    cursor: pointer;
    :hover {
    color: #23cad1;
    -webkit-box-shadow: -8px -8px 0 #23cad1;
    -moz-box-shadow: -8px -8px 0 #23cad1;
    box-shadow: -8px -8px 0 #23cad1;
    -webkit-transform: translate(8px, 8px);
    -moz-transform: translate(8px, 8px);
    -ms-transform: translate(8px, 8px);
    -o-transform: translate(8px, 8px);
    transform: translate(8px, 8px);
}
  :active{
    cursor: progress;
  }
`