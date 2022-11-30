import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  padding: 20px 40px;
  background-color: #00adb5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #364f6b;
`;

export const NavBar = styled.nav`
  width: 40%;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    li {
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      padding: 8px 12px;
      transition: all 0.2s ease-out;
      cursor: pointer;
      border-radius: 4px;
      &:hover {
        transition: all 0.2s ease-in;
        background-color: #71c9ce;
      }
      a {
        text-decoration: none;
        font-weight: 400;
        letter-spacing: 1.1px;
        color: #252a34;
      }
    }
  }
`;
