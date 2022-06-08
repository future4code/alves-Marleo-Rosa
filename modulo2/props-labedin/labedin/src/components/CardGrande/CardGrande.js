import React from 'react';
// import './StyleCardGrande.js'
import { CardGrandeStyle, CardGrandeStyleImg, CardGrandeStyleP } from "./StyleCardGrande";   
function CardGrande(props) {
    return (
        <CardGrandeStyle>
            <CardGrandeStyleImg src={ props.imagem } />
            <CardGrandeStyleP>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </CardGrandeStyleP>
        </CardGrandeStyle>
    )
}

export default CardGrande;