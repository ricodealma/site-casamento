import React from 'react'
import { Container } from 'react-bootstrap'
import Section from '../../componentes/Section'
import { formatador } from '../../utils/formatador-moeda'

function Agradecimento() {
    const valorTransacao = window.localStorage.getItem('valorTransacao') || ""
    const valorExibido = formatador.format(parseFloat(valorTransacao))
    return (
        <Container>
            <Section id="presente" titulo='Seu presente está reservado!' classes="container mt-5 text-center">
                <p>Queridos amigos,</p>
                <p>Agradecemos de coração por celebrar conosco esse momento especial. Seu carinho e generosidade nos enchem de alegria!</p>
                <p>Agradecemos muito pelo presente!</p>
            </Section>

            <Section id="informacoes" titulo='Informações do Presente' classes="container mt-5 text-center">
                <p>O valor do seu presente é de:</p>
                <p>{valorExibido}</p>
                <p>Chave PIX para pagamento:</p>
                <p><strong>edd6372d-64b1-4381-a980-4f55c27fac0f</strong></p>
            </Section>

            <Section id="agradecimento" classes="container mt-5 text-center">
                <p>Obrigado novamente por fazer parte deste momento especial!</p>
            </Section>
        </Container>
    )
}

export default Agradecimento