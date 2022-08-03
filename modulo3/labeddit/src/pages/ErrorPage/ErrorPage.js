import React from 'react'
import { ErrorImage, ErrorPageContainer, TextError } from './styled'
import error from "../../assets/img/error.png"

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={error} />
      <TextError>Erro 404 - Página não encontrada</TextError>
    </ErrorPageContainer>
  )
}

export default ErrorPage