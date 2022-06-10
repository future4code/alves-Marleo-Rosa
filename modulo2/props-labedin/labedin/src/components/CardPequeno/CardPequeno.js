import React from "react";
// import {CardPequenoStyle, CardPequenoStyleImg, CardPequenoStyleP} from './CardPequeno.js'
import { CardPequenoStyle, CardPequenoStyleImg } from "./styleCardPequeno";
function CardPequeno(props) {
    return (
        <CardPequenoStyle>
            <img src={ props.imagem } />
            <CardPequenoStyleImg>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </CardPequenoStyleImg>
        </CardPequenoStyle>
    )
}

export default CardPequeno;