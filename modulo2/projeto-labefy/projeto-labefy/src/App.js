import React from "react"
import { Body, MenuEsquerda, Entrada, Entrada2, MenuDireita, ItensMusicas } from "./assets/styled"
// import { AddMusicas } from "./pages/AddMusicas"
import { CriarPlaylist } from "./pages/CriarPlaylist"
import { VerPlaylists } from "./pages/VerPlaylists"

function App() {
  return (
    <div>
      <Body>
        <MenuEsquerda>
          <Entrada>
            <Entrada2>
              <CriarPlaylist />
              <VerPlaylists />
            </Entrada2>
          </Entrada>
        </MenuEsquerda>
        <MenuDireita>
          <ItensMusicas>
          </ItensMusicas>
        </MenuDireita>
      </Body>
    </div>
  )
}

export default App