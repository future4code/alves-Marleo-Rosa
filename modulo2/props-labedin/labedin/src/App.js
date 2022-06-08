import React from 'react';
// import './style.js';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemUsuario from './components/img/Márleo.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={ImagemUsuario}
          nome="Márleo Piber da Rosa"
          descricao="Oi, eu sou o Márleo Piber da Rosa. Sou aluno da Labenu. Estou cursando o BootCamp Web Full Stack e atualmente estou no módulo 2 do Front End."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/124/124555.png"
          texto="Ver mais"
        />
      </div>
      <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/512/2460/premium/2460797.png?token=exp=1654626622~hmac=6830a8854f08abc0920f7e6366cbd8cf"
        nome="E-mail:"
        descricao="marleopr@hotmail.com"
      />
      <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/1295/1295232.png"
        nome="Endereço:"
        descricao="Jaguari - RS"
      />
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://cdn-icons.flaticon.com/png/512/3080/premium/3080443.png?token=exp=1654627707~hmac=a3062da33e98ad639e370fd5bc2858f6"
          nome="UNINTER"
          descricao="Graduado em Tecnologia em Análise e Desenvolvimento de Sistemas"
        />

        <CardGrande
          imagem="https://cdn-icons.flaticon.com/png/512/2202/premium/2202561.png?token=exp=1654623221~hmac=202a975f0a7544b2e21d28c61910b44a"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
