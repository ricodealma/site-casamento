import React from 'react'
import { Outlet } from 'react-router-dom'
import BarraNavegacao from '../../componentes/BarraNavegacao'
import Rodape from '../../componentes/Rodape'
import './Layout.css'


function Layout() {
    return (
        <main>
            <BarraNavegacao />
            <Outlet />
            <Rodape />
        </main>
    )
}

export default Layout