import React, { useEffect, useState } from 'react';
import { formatador } from '../../utils/formatador-moeda';

interface IPresenteTransacaoProps {
    id: number;
    nome: string;
    quantidadeCotas: number;
    valorCota: number;
    arrayId: number;
    setValorTotal: (valor: number[]) => void;
    valorTotal: number[];
    setSomaTotal: (soma: number) => void;
}

function PresenteTransacao({
    id,
    nome,
    quantidadeCotas,
    valorCota,
    setValorTotal,
    valorTotal,
    arrayId,
    setSomaTotal,
}: IPresenteTransacaoProps) {
    const [valor, setValor] = useState(valorCota);

    const handleCotasChange = (selectedCotas: number) => {
        const novoValor = selectedCotas * valorCota;
        setValor(novoValor);
        valorTotal[arrayId] = novoValor;
        setValorTotal([...valorTotal]);


        const novaSomaTotal = valorTotal.reduce((acumulador, valor) => acumulador + valor, 0);
        setSomaTotal(novaSomaTotal);
    };

    useEffect(() => {
        valorTotal.push(valorCota);
        setValorTotal([...valorTotal]);

        return () => {
            valorTotal.pop();
            setValorTotal([...valorTotal]);

            const novaSomaTotal = valorTotal.reduce((acumulador, valor) => acumulador + valor, 0);
            setSomaTotal(novaSomaTotal);
        };
    }, []);

    return (
        <div className="form-group" id={id.toString()}>
            <label className="control-label">
                Cotas de: {nome}
                <select
                    className="form-select"
                    defaultValue={1}
                    id={`cotasDoadas-${id}`}
                    onChange={(e) => handleCotasChange(parseInt(e.target.value))}
                >
                    <option key={1} value={1}>
                        1
                    </option>
                    {Array.from({ length: quantidadeCotas - 1 }, (_, i) => (
                        <option key={i + 2} value={i + 2}>
                            {i + 2}
                        </option>
                    ))}
                </select>
            </label>
            <p>
                <strong>Valor de {nome}:</strong> {formatador.format(valor) }
            </p>
        </div>
    );
}

export default PresenteTransacao;
