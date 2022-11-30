import React from "react";
import * as C from "./style";
import Link from "next/link";
const NavBar = () => {
  return (
    <C.NavContainer>
      <C.Logo>
        Gerenciamento
        <br />
        de custos
      </C.Logo>
      <C.NavBar>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href="/addCost">Adicionar Custos</Link>
          </li>
          <li>
            <Link href="/addcategory">Adicionar categoria de custo</Link>
          </li>
          <li>Custos mes a mes</li>
        </ul>
      </C.NavBar>
    </C.NavContainer>
  );
};

export default NavBar;
