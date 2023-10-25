import React from 'react'

interface CabecalhoProps {
    titulo: string,
    texto: string,
    id: string
}

function Cabecalho({titulo,texto, id}:CabecalhoProps) {
  return (
    <div className="text-center" id={id}>
        <h1 className="pt-5">{titulo}</h1>
        <p>{texto}</p>
    </div>
  )
}

export default Cabecalho