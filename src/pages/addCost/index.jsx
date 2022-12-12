import { useState } from "react";
import * as C from "../../styles/AddCost";

export default function AddCost() {
  const [form, setForm] = useState({
    despesa: "",
    data_despesa: "",
    categoria: "Escolha uma categoria",
    valor_despesa: 0,
  });

  const handleInputs = (e) => {
    const campo = e.target.name;
    setForm({ ...form, [campo]: e.target.value });
  };
  return (
    <C.Container>
      <C.FormContainer>
        <C.TitleForm>Adicionar custos</C.TitleForm>
        <C.Form onSubmit={(e) => e.preventDefault()}>
          <C.InputContainer>
            <label>Despesa</label>
            <input
              placeholder="Digite o titulo da despesa"
              value={form.despesa}
              name="despesa"
              onChange={(e) => handleInputs(e)}
            />
          </C.InputContainer>
          <C.InputContainer>
            <label>Data da Despesa</label>
            <input
              type="date"
              value={form.data_despesa}
              name="data_despesa"
              onChange={(e) => handleInputs(e)}
            />
          </C.InputContainer>
          <C.InputContainer>
            <label>Categoria despesa</label>
            <select
              value={form.despesa}
              onChange={(e) => handleInputs(e)}
              name="categoria"
            >
              <option disabled="true" selected={true}>
                Escolha uma categoria
              </option>
              <option value="Alimentacao">Alimentacao</option>
            </select>
          </C.InputContainer>
          <C.InputContainer>
            <label>Valor da despesa</label>
            <input
              placeholder="Digite o valor da despesa"
              value={form.valor_despesa}
              onChange={(e) => handleInputs(e)}
              name="valor_despesa"
            />
          </C.InputContainer>
          <button type="submit">Adicionar despesa</button>
        </C.Form>
      </C.FormContainer>
    </C.Container>
  );
}
