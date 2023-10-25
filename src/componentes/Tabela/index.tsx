import { MonthOfYear } from '@fluentui/react';
import { useEffect, useState } from 'react';
import DataTable, { ConditionalStyles, TableColumn } from 'react-data-table-component';
import { selecionarPresentes } from '../../http';
import { IPresenteEsperado } from '../../interfaces/IPresenteEsperado';
import { formatador } from '../../utils/formatador-moeda';

interface ITabelaProps {
  setSelecionada: (presentesEscolhidos: IPresenteEsperado[]) => void
}

const conditionalRowStyles: ConditionalStyles<IPresenteEsperado>[] = [
  {
    when: row => row.quantidadeCotas < 1,
    style:{
      textDecoration: 'overline',
      display: 'none'
    }
  }
]

const columns: TableColumn<IPresenteEsperado>[] = [
  {
    name: 'Nome',
    selector: row => row.nome,
  },
  {
    name: 'Quantidade de Cotas',
    selector: row => row.quantidadeCotas,
  },
  {
    name: 'Valor por Cota',
    selector: row => row.valorCota,
    format: row => { return (formatador.format(row.valorCota)) }
  }
];

const mockedData = [
  {
      "id": 1,
      "nome": "GELADEIRA",
      "quantidadeCotas": 8,
      "valorCota": 375.00
  },
  {
      "id": 2,
      "nome": "COOKTOP",
      "quantidadeCotas": 4,
      "valorCota": 175.50
  },
  {
      "id": 3,
      "nome": "MICROONDAS",
      "quantidadeCotas": 5,
      "valorCota": 145.00
  },
  {
      "id": 4,
      "nome": "AIR FRYER",
      "quantidadeCotas": 3,
      "valorCota": 125.00
  },
  {
      "id": 5,
      "nome": "MAQUINA DE LAVAR",
      "quantidadeCotas": 9,
      "valorCota": 333.33
  },
  {
      "id": 6,
      "nome": "TELEVISÃO",
      "quantidadeCotas": 6,
      "valorCota": 300.00
  },
  {
      "id": 7,
      "nome": "CAMA BAÚ",
      "quantidadeCotas": 7,
      "valorCota": 214.28
  },
  {
      "id": 8,
      "nome": "FORNO",
      "quantidadeCotas": 5,
      "valorCota": 150.00
  },
  {
      "id": 9,
      "nome": "CERIMONIA",
      "quantidadeCotas": 20,
      "valorCota": 223.00
  },
  {
      "id": 10,
      "nome": "LUA DE MEL",
      "quantidadeCotas": 15,
      "valorCota": 180.00
  },
  {
      "id": 11,
      "nome": "TESTE",
      "quantidadeCotas": 40,
      "valorCota": 1.00
  }
]


function Tabela({ setSelecionada }: ITabelaProps) {
  const [data, setData] = useState<IPresenteEsperado[]>([]);

  // Descomentar para uso do banco de dados
  // useEffect(() => {
  //   const selecionar = async () => {
  //     try {
  //       const presentesEsperados: IPresenteEsperado[] = await selecionarPresentes();
  //       setData(presentesEsperados);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   selecionar();
  // }, []);


  return (
    <div className="table-responsive scrollbar">
      <DataTable
        columns={columns}
        data={mockedData} //Alterar para data se quiser utilizar do banco de dados
        selectableRows
        onSelectedRowsChange={(selected) => { setSelecionada(selected.selectedRows) }}
        selectableRowDisabled={row => row.quantidadeCotas < 1}
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  )

}

export default Tabela;

