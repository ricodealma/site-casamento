import React from 'react'
import './Home.css'
import Cabecalho from '../../componentes/Cabecalho'
import Section from '../../componentes/Section'
import foto from './rafael-e-sarah.jpg'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <div>
      <Cabecalho titulo='Rafael e Sarah' texto='Dão as boas vindas aos convidados ao casamento' id="header-home"/>

      <Section titulo='Sobre Nós' classes="text-center" id="about">
        <p>Aqui está a história do nosso amor e os detalhes sobre a cerimônia que estamos ansiosos para compartilhar com vocês.</p>
        <Container>
          <h3 style={{ fontSize: '20px' }}>História dos Noivos</h3>
          <p>Rafael e Sarah se conheceram na Igreja Batista Lagoinha, numa daquelas vigílias cheias da presença de Deus e comunhão. No início, pareciam ser de planetas diferentes, com personalidades opostas. Sarah era a alegria em pessoa, com risadas que faziam todos se alegrarem, e energia para dar e vender. Rafael, por outro lado, demonstrava o tipo compenetrado, mas escondia um espírito brincalhão sob a superfície.</p>
          <p>Apesar das diferenças, uma amizade surgiu após um período distante. De repente, eles começaram a se ver regularmente, pulando de uma igreja para outra, aproveitando todos os intercâmbios possíveis. A amizade deles cresceu, como uma árvore que, de alguma forma, conseguia misturar risadas e momentos de seriedade.</p>
          <p>Com o tempo, os dois notaram que compartilhavam um grande sonho: formar uma família que fosse abençoada por Deus e cercada de amor. E, acredite ou não, com a ajuda divina, dos amigos e da família, eles estão realizando esse sonho juntos. Uma jornada que prova que quando a fé e o amor se encontram, milagres acontecem.</p>
        </Container>
        <div className="wedding-photo">
          <img src={foto} alt="Foto dos Noivos" className="img-fluid" />
        </div>
      </Section>

      <Section classes="text-center" id="detalhes" titulo='Detalhes da Cerimônia'>
        <ul className="detalhes-list">
          <li className="detalhes-item"><strong>Data:</strong> 08 de Junho de 2024</li>
          <li className="detalhes-item"><strong>Local:</strong> Comunidade Evangélica Reviver em Cristo</li>
          <li className="detalhes-item"><strong>Horário:</strong> 20h00</li>
        </ul>
      </Section>

      <Section classes="text-center" id="celebracao" titulo='Celebração'>
        <p>Estamos emocionados em celebrar este dia especial com nossos amigos e familiares. A cerimônia será solene e emocionante, leve seu lencinho.</p>
        <p>O casamento está marcado para uma data fria. Portanto, sugerimos que os convidados vistam roupas adequadas para o clima.</p>
      </Section>

      <Section classes="text-center" id="presentes" titulo='Presentes'>
        <p>Em vez de presentes físicos, a sua presença é o melhor presente que poderíamos receber. No entanto, se você desejar nos presentear de alguma forma, clique no botão abaixo para ver nossa lista de presentes.</p>
        <a className="link__presente" href="/PresenteEsperado">Ver Lista de Presentes</a>
      </Section>
    </div>
  )
}

export default Home
