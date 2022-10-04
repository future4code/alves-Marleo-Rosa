import styled from "styled-components"

export const CardMovies = styled.div`
    /* border: 2px solid red; */
    width: 300px;
    margin: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items:center;
    /* justify-content:center; */
`
export const PosterPath = styled.img`
    /* border: 2px solid violet; */
    width: 300px;
    height: 400px;
    box-sizing: border-box;
    &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`
export const ImagesPoster = styled.div`
    /* border: 2px solid black; */
    box-sizing: border-box;
    height: 400px; 
    display: flex;
    justify-content: center;
`
export const Body = styled.div`
    /* border: 2px solid green; */
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    background-color: black;
    `
export const Title = styled.p`
    color: #FFFFFF;
    font-family:'Arial Narrow Bold', sans-serif;
`