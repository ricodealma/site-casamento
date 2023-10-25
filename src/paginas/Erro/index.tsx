import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Erro() {
  const navigation = useNavigate();
  return (
    <Container className='text-center'  as='div'>
    <h1 className='pt-5'>Erro</h1>
    <p>Ocorreu um erro ao processar sua solicitação.</p>
    <p>Por favor, tente novamente mais tarde.</p>
    <Button variant='dark' onClick={() => {navigation('/PresenteEsperado')}}>Voltar para a Lista de Presentes</Button>
  </Container>
  )
}

export default Erro