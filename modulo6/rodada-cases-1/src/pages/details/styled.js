import styled from "styled-components";

export const Body = styled.div`
    max-width: 100vw;
    /* background: #F3F3F3; */
    background:
    radial-gradient(black 15%, transparent 16%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
    background-color:#282828;
    background-size:16px 16px;

    width: 100vw;
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
        height: 300px;
        /* margin: 50px auto !important; */
        padding: 0;
        /* align-self: center; */
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

export const StyledTrailer = styled.div`
    /* margin-bottom: 2rem; */
    /* margin-left: 2rem; */
    @media(max-width: 650px) {
            display: flex;
            align-items: center;
            margin-left: 10%;
        iframe{
            width: 90%;
            height: 215px;
        }
    }
`

export const About = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-device-width : 481px){
        /* padding: 10px; */
    }
    @media screen and (max-device-width : 480px){
        padding: 16px;
    }
`

export const Trailer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    /* border: solid orange; */
    justify-content: space-around;
    @media screen and (min-device-width : 481px){
        /* flex-direction: column; */
    }
    @media screen and (max-device-width : 480px){
        flex-direction: column;
    }
`

export const TrailerTitle = styled.div`
    width: 185px;
    height: 32px;
    margin-top: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: -0.005em;
    color: #131313;
`
export const CreditsDiv = styled.section`
    display: flex;
    flex-direction: column;
@media screen and (min-device-width : 481px){
    /* padding: 112px; */
}
@media screen and (max-device-width : 480px){
    /* padding: 16px; */
}
`

export const CreditsDivs = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    height: 420px;
    overflow-x: scroll;
    max-width: 100%;
`

export const Credits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    width: 191px;
    height: 380px;
    left: 1040px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin: 0 18px;
    img{
    width: 175px;
    left: 8px;
    top: 8px;
    border-radius: 4px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 16px 0px;
    }
div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    }
    p{
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #646464;
    }
}
`

export const CreditTitle = styled.div`
    width: 185px;
    height: 32px;
    margin-top: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: -0.005em;
    color: #ffffff;
    padding-left: 20px;
`