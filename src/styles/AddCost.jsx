import styled from "styled-components";

export const Container = styled.div`
  margin: 40px auto;
  width: 100%;
`;
export const FormContainer = styled.div`
  background-color: #fff;
  width: 50%;
  margin: 0 auto;
  box-shadow: 4px 6px 18px -7px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  padding: 1.5rem 2.2rem;
`;
export const TitleForm = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 2.2rem;
  text-transform: capitalize;
`;
export const Form = styled.form`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #00adb5;
    color: #fff;
    font-size: 1.1rem;
    border: 1px solid #00adb5;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.2s all linear;
    width: 100%;
    &:hover {
      background-color: #fff;
      color: #00adb5;
    }
  }
`;
export const InputContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 8px;
  }
  input,
  select {
    border: 2px solid #00adb5;
    border-radius: 4px;
    padding: 10px 8px;
  }
`;
