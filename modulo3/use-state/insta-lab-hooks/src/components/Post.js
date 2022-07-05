import React, { useState } from 'react'

function Post(nomeUsuario, fotoUsuario, fotoPost) {
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])
  const [inputValue, setInputValue] = useState("")
  // Passo5
  // Crie a lógica de estados funcionais aqui.

  // Passo7
  const onClickCurtida = (event) => {
    setComentando(event.target.value)
    // Crie a lógica de onClickCurtida aqui.
  };

  // Passo7
  const onClickComentario = (event) => {
    setComentando(event.target.value)
    // Crie a lógica de onClickComentario aqui.
  };

  // Passo7
  const onChangeComentario = (event) => {
    setComentando(event.target.value)
    // Crie a lógica de onChangeComentario aqui.
  };

  // Passo7
  const enviarComentario = (comentario) => {
    setComentando(comentario.target.value)
    // Crie a lógica de enviarComentario aqui.
  };

  {/* Passo6 */ }
  const caixaDeComentario = true ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {console.log("testando passo 4")}
      <input
        id={"comentario"}
        value={comentando}
        onChange={onChangeComentario}
        onClick={onClickCurtida}
      />
      {console.log("testando button passo 4")}
      <button onClick={enviarComentario}>Enviar</button>
    </>
  ) : (
    // Passo8
    <>Lógica de exibir lista de comentarios</>
    // useState.comentarios.map((comentario, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{comentario}</p>
    //     </div>
    //   )
    // })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>Nome do usuário aqui</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {console.log("testando p")}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: 0</span>
          {console.log("testando button")}
          <button >
            {/* Passo6 */}
            {true ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: 0</span>
          {console.log("testando outro button")}
          <button >
            {/* Passo6 */}
            {false ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;