import React from "react";
import * as C from "./style";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
const ItemGasto = () => {
  return (
    <C.ItemContainer>
      <td>Compra de lanche</td>
      <td>22/11/2022</td>
      <td>Alimentacao</td>
      <td>R$99,00</td>
      <C.ButtonActions>
        <td>
          <FiEdit2 size={24} color={"#FFD460"} />
        </td>
        <td>
          <FiTrash2 size={24} color={"#D72323"} />
        </td>
      </C.ButtonActions>
    </C.ItemContainer>
  );
};

export default ItemGasto;
