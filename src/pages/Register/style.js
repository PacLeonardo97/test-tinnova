import styled from "styled-components";

export const Button = styled.button`
  margin-top: 16px;
  color: #ffffff;
  background-color: #00c8b3;
  border-radius: 24px;
  border: none;
  width: 240px;
  height: 40px;
  :hover {
    opacity: 70%;
    color: #ffffff;
  }
  :disabled {
    color: #dddcdc;
    background-color: #f6f6f6;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  div {
    width: 400px;
    height: 45px;
  }
`;

export const DivMargin = styled.div`
  margin: 8px 0px;
`;
