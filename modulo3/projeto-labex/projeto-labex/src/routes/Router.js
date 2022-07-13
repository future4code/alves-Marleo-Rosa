import React from 'react'
import PaginaMenu from '../pages/PaginaMenu/PaginaMenu'
import VerViagens from '../pages/PaginaPublica/VerViagens'
import PainelAdmin from '../pages/PaginaPrivada/PainelAdmin'
import PaginaInscrever from '../pages/PaginaPublica/PaginaInscrever'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CriarViagem from '../pages/PaginaPrivada/CriarViagem'
import Login from '../pages/PaginaPrivada/Login'
import Logout from '../pages/PaginaPrivada/Logout'
import { PaginaErro } from '../pages/PaginaErro/PaginaErro'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PaginaMenu />} />
                <Route path="VerViagens" element={<VerViagens />} />
                <Route path="PainelAdmin" element={<PainelAdmin />} />
                <Route path="PaginaInscrever" element={<PaginaInscrever />} />
                <Route path="CriarViagem" element={<CriarViagem />} />
                <Route path="Login" element={<Login />} />
                <Route path="Logout" element={<Logout />} />
                <Route path="*" element={<PaginaErro />} />
            </Routes>
        </BrowserRouter>
    )
}
