import { Route, Routes } from "react-router-dom"
import Layout from "../paginas/Layout"
import PresenteEsperado from "../paginas/PresenteEsperado"
import Home from "../paginas/Home"
import { useState } from 'react';
import { IPresenteEsperado } from "../interfaces/IPresenteEsperado";
import Transacao from "../paginas/Transacao";
import Agradecimento from "../paginas/Agradecimento";


const Rotas = () => {
  const [selecionadas, setSelecionada] = useState<IPresenteEsperado[]>([]);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/PresenteEsperado' element={<PresenteEsperado setSelecionada={(presentesEscolhidos: IPresenteEsperado[]) => { setSelecionada(presentesEscolhidos)}} selecionadas={selecionadas} />} />
        <Route path='/Transacao' element={<Transacao/>} />
        <Route path='/Agradecimento' element={<Agradecimento/>} />
      </Route>
    </Routes>
  )
}

export default Rotas