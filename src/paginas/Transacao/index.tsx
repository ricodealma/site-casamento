import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cabecalho from '../../componentes/Cabecalho';
import PresenteTransacao from '../../componentes/PresenteTransacao';
import Section from '../../componentes/Section';
import { CriarTransacao } from '../../http';
import { IAmigo } from '../../interfaces/IAmigo';
import { IPresenteEsperado } from '../../interfaces/IPresenteEsperado';
import { ITransacao } from '../../interfaces/ITransacao';
import { formatador } from '../../utils/formatador-moeda';
import Erro from '../Erro';

interface ITransacaoProps { }

function Transacao({ }: ITransacaoProps) {
    const [temTransacao, setTemTransacao] = useState(false);
    const [valorTotal, setValorTotal] = useState<number[]>([]);
    const [somaTotal, setSomaTotal] = useState(0);
    const [selecionadas, setSelecionadas] = useState<IPresenteEsperado[]>([])
    const [amigo, setAmigo] = useState<IAmigo>({
        nome: '',
        telefone: '',
        mensagem: '',
        transacoes: [],
    });

    const navigation = useNavigate();
    const getLocalStorage = window.localStorage.getItem('selecionadas')

    useEffect(() => {
        if (getLocalStorage !== null) {
            const parsedSelecionadas = JSON.parse(getLocalStorage);

            if (parsedSelecionadas.length > 0) {
                setTemTransacao(true);
            }

            setSelecionadas(parsedSelecionadas);
        } else {
            setTemTransacao(false);
        }
    }, [getLocalStorage]);


    useEffect(() => {
        setSomaTotal(valorTotal.reduce((acumulador, valor) => acumulador + valor, 0));
    }, [valorTotal]);

    const handleCriarTransacao = async () => {
        const transacoes: ITransacao[] = selecionadas.map((presente, index) => ({
            idPresenteEsperado: presente.id,
            numeroCotasDoadas: (valorTotal[index] / presente.valorCota),
            valorTotal: valorTotal[index],
        }));

        amigo.transacoes = transacoes;

        if (transacoes.length < 1) {
            alert('Não há presentes selecionados. Por favor, selecione novamente')
            navigation('/PresenteEsperado')
        } else if (amigo.nome !== '') {
            try {
                // await CriarTransacao(amigo); descomentar se quiser usar banco
                window.localStorage.setItem('valorTransacao', JSON.stringify(somaTotal));
                navigation('/Agradecimento')

            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Por favor, preencha ao menos o seu nome')
        }

    }

    if (temTransacao) {
        return (
            <Container as='div'>
                <Cabecalho titulo='Presentes de Casamento' texto='Escolha o presente perfeito para celebrar nosso casamento conosco.' id='transacao'></Cabecalho>
                <Section titulo='Dados Pessoais' id="dados-pessoais">
                    <p>Se identifique para que possamos nos alegrar com você</p>
                    <form id="formAmigo" className="form">
                        <div className="form-group">
                            <label className="control-label">
                                Seu Nome:
                                <input id="nome" type="text" placeholder="Digite seu Nome" className="form-control" required onChange={(e) => setAmigo({ ...amigo, nome: e.target.value })} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="control-label">
                                Telefone:
                                <input className="form-control" type="tel" id="telefone" name="telefone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" placeholder="Insira seu contato" onChange={(e) => setAmigo({ ...amigo, telefone: e.target.value })} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="control-label">
                                Mensagem:
                                <input className="form-control" type="text" id="mensagem" name="mensagem" placeholder="Deixe-nos uma mensagem" onChange={(e) => setAmigo({ ...amigo, mensagem: e.target.value })} />
                            </label>
                        </div>
                    </form>
                </Section>
                <hr />

                <Section titulo='Presentes Selecionados' id="presentes-selecionados">
                    <p>Escolha a quantidade de cotas de cada presente que você deseja doar</p>
                    <Form>
                        {selecionadas.map((presente, index) => (
                            <PresenteTransacao
                                key={presente.id}
                                arrayId={index}
                                id={presente.id}
                                nome={presente.nome}
                                quantidadeCotas={presente.quantidadeCotas}
                                valorCota={presente.valorCota}
                                setValorTotal={(valor: number[]) => setValorTotal(valor)}
                                valorTotal={valorTotal}
                                setSomaTotal={(soma: number) => setSomaTotal(soma)}
                            />
                        ))}
                    </Form>
                    <p>Valor Total do Presente : {formatador.format(somaTotal)}</p>
                    <Button variant='dark' onClick={handleCriarTransacao}>Criar</Button>
                </Section>
            </Container>
        );
    } else {
        return <Erro />;
    }
}

export default Transacao;
