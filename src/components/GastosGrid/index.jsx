import React from "react";
import ItemGasto from "../ItemGasto";
import * as C from "./style";
const GridGastos = () => {
  const dataAtual = new Date();
  return (
    <C.GridContainer>
      <h2>
        Mes vigente: {`${dataAtual.getMonth()}/${dataAtual.getFullYear()}`}
      </h2>
      <C.Table>
        <thead>
          <tr>
            <th>Despesa</th>
            <th>Data</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Acoes</th>
          </tr>
        </thead>
        <tbody>
          <ItemGasto />
          <ItemGasto />
        </tbody>
      </C.Table>
    </C.GridContainer>
  );
};

export default GridGastos;
