import styled from "styled-components";

export const Body = styled.div`
    
`

export const Header = styled.div`
    /* border: solid orange; */
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #ffffff 0%, #217dff 100%);

`
export const Logo = styled.img`
    width: 150px;
    cursor: pointer;
`
export const Horizon = styled.div`
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    color: white;
    img{
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
}
@media screen and (min-device-width : 481px){
    height: 41.66vw;
    width: 100%;
    img{
        position: absolute;
    width: 27vw;
    left: 7.77vw;
    top: 8.9vw;
    }
}
@media screen and (max-device-width : 480px){
    display: flex;
    max-width: 100vw;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center !important;
    img{
        width: 186px;
        margin: 50px auto !important;
        align-self: center;
        left: 0;
    }
}
`

export const InfoFilm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1vw;
    @media screen and (min-device-width : 481px){
    height: 85%;
    margin-left: 40vw;
    margin-top: 5vw;
    margin-right: 5vw;
    margin-bottom: 5vw;
    }
    @media screen and (max-device-width : 480px){
        padding: 16px;
        max-width: 95%;
        margin: auto;
    }
`

export const Title = styled.div`
    text-align: left;
    font-size: 30px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    padding-top: 50px;
`
export const TitleInfo = styled.div`
    @media screen and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
}
`

export const Info = styled.div`
    display: flex;
    margin-top: 1vw;
    width: 90%;
    justify-content: space-between;
    @media screen and (min-device-width : 481px){
    flex-direction: row;
    row-gap: 1vw;
    height: 24px;
    }
    @media screen and (max-device-width : 480px){
        flex-direction: column;
    }
`

export const InfoText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`

export const ImagesPoster = styled.div`
    /* border: 2px solid black; */
    box-sizing: border-box;
    height: 400px; 
    display: flex;
    justify-content: center;
`

export const PosterPath = styled.img`
    /* border: 2px solid violet; */
    width: 400px;
    height: 500px;
    box-sizing: border-box;
    /* &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	} */
`