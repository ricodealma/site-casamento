import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cabecalho from '../../componentes/Cabecalho';
import Section from '../../componentes/Section';
import Tabela from '../../componentes/Tabela';
import { IPresenteEsperado } from '../../interfaces/IPresenteEsperado';

interface IPresenteEsperadoProps {
  setSelecionada: (presentesEscolhidos: IPresenteEsperado[]) => void;
  selecionadas: IPresenteEsperado[];
}

function PresenteEsperado({ setSelecionada, selecionadas }: IPresenteEsperadoProps) {
  const navigation = useNavigate();

  const handlePresentear = () => {
    if (selecionadas.length > 0) {
      window.localStorage.setItem('selecionadas', JSON.stringify(selecionadas));
      navigation('/Transacao');
    }
    else{
      alert('Selecione ao menos um presente na lista')
    }
  };

  return (
    <Container as='div' className="my-5">
      <Cabecalho
        titulo='Bem-vindos à Lista de Presentes'
        texto='Celebre o amor e a união de Rafa e Sarah com a escolha de presentes especiais.'
        id='header-presentes'
      />

      <Section id='lista-presentes' classes='my-5' titulo='Lista de Presentes Esperados'>
        <p>Aqui estão os presentes que gostaríamos de receber para tornar o nosso dia ainda mais especial. Sua contribuição é muito apreciada!</p>
        <p>Selecione o que preferir através da coluna de seleção e depois clique em <button className="btn" id="save_btn" onClick={handlePresentear}>Presentear</button></p>
        <Tabela setSelecionada={(presentesEscolhidos: IPresenteEsperado[]) => setSelecionada(presentesEscolhidos)} />
        <div className="d-grid gap-2 pt-3">
          <Button variant="btn btn-outline-dark" id="save_btn" onClick={handlePresentear} >Presentear</Button>
        </div>
      </Section>

      <Section id="sobre-os-presentes" classes="my-5" titulo='Sobre os Presentes'>
        <p>Nossos presentes esperados são uma maneira de tornar nosso casamento ainda mais especial. Cada presente contribuirá para criar memórias duradouras.</p>
        <p>Se você gostaria de nos presentear com algo que não esteja na lista, sinta-se à vontade para entrar em contato conosco.</p>
      </Section>

      <Section id="como-contribuir" classes="my-5" titulo='Como Contribuir'>
        <p>Contribuir é fácil! Basta selecionar um presente da lista acima e clicar em "Presentear". Você será direcionado a uma página onde poderá selecionar a quantidade de cotas e se identificar. Você também pode entrar em contato conosco para obter mais informações sobre como contribuir de outras formas.</p>
      </Section>

      <Section id="contato" classes="my-5" titulo='Entre em Contato'>
        <p>Se você tiver alguma dúvida ou precisar de assistência, não hesite em entrar em contato conosco. Estamos ansiosos para compartilhar este dia especial com você!</p>
        <p>Telefone: (31) 99440-2070</p>
        <p>Email: rafael.henriquereis@hotmail.com</p>
      </Section>
    </Container>
  );
}

export default PresenteEsperado;
