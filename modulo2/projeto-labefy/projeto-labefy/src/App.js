import axios from "axios"
import React from "react"
import styled from "styled-components"
import CriarPlaylist from "./pages/CriarPlaylist"
import VerPlaylists from "./pages/VerPlaylists"

function App() {
    return (
      <div>
        <CriarPlaylist/>
        <VerPlaylists/>
      </div>
    )
  }

  export default App