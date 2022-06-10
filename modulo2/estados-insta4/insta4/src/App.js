import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import PostHeader from './components/Post/Post'
import UserPhoto from './components/Post/Post'
import PostPhoto from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    // Lista de pessoas colocada no estado
    post: [
      // O objeto abaixo representa uma pessoa. Ele possui
      // três propridades: nome foto perfil e foto post.
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Julie",
        fotoUsuario: "https://picsum.photos/id/237/536/354",
        fotoPost: "https://picsum.photos/seed/picsum/536/354"
      },
      {
        nomeUsuario: "Lila",
        fotoUsuario: "https://picsum.photos/id/1084/536/354?grayscale",
        fotoPost: "https://picsum.photos/id/1060/536/354?blur=2"
      }
    ]
  };
  render() {
    console.log(this.state.post)
    const ListaDeComponentes = this.state.post.map((item) => {
      return (
        <Post key={item.nomeUsuario}>
          <PostHeader>
            <UserPhoto src={item.fotoUsuario} alt={'Imagem do usuario'} />
            <p>{item.nomeUsuario}</p>
          </PostHeader>

          <PostPhoto src={item.fotoPost} alt={'Imagem do post'} />
        </Post>
      )
    })
    return (
      <div>
        {ListaDeComponentes}
        <p>Qualquer coisa</p>
      </div>
    )
    // return (
    //   <MainContainer>
    //     <Post
    //       nomeUsuario={'paulinha'}
    //       fotoUsuario={'https://picsum.photos/50/50'}
    //       fotoPost={'https://picsum.photos/200/150'}
    //     />
    //      <Post
    //       nomeUsuario={'Julie'}
    //       fotoUsuario={'https://picsum.photos/id/237/536/354'}
    //       fotoPost={'https://picsum.photos/seed/picsum/536/354'}
    //     />
    //      <Post
    //       nomeUsuario={'Lila'}
    //       fotoUsuario={'https://picsum.photos/id/1084/536/354?grayscale'}
    //       fotoPost={'https://picsum.photos/id/1060/536/354?blur=2'}
    //     />
    //   </MainContainer>
    // );
  }
}

export default App;