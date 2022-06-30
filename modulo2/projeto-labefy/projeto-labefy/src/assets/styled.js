import React, { Component } from 'react'
import styled from "styled-components";
export const Body = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: 60px 1fr 60px;
    grid-template-columns: 225px 1fr 225px;
    box-sizing: border-box;
    @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    
    display: flex;
    flex-direction: column;
    align-items: unset;
    }
`
export const MenuEsquerda = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: whitesmoke; */
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    width: 100vw;
  }
`

export const Entrada = styled.div`
  /* border: 1px solid blue; */
  height: 25px;
  margin: 0 0 20px 0;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    margin: 0;
  }
  `

export const Entrada2 = styled.div`
  /* border: 1px solid blue; */
  height: 25px;
  margin: 0 0 20px 0;
  width: 175px;
  margin: 0;
  `

export const CardPlaylists = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
color: #ffffff;
/* background-color: silver; */
background-image: linear-gradient(to right, #002a5a, white)
`

export const MenuDireita = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: whitesmoke;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    width: 100vw;
  }
`

export const ItensMusicas = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 5px;
`

export const CardMusicas = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
color: #ffffff;
/* background-color: silver; */
background-image: linear-gradient(to right, #002a5a, white)
`