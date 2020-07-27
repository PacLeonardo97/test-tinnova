import styled from "styled-components";

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px;
  width: 304px;
  border-radius: 10px;
  box-shadow: 10px 10px 20px -17px rgba(0, 0, 0, 0.75);
  background-color: #20232a;
  color: white;
  p {
    margin: 8px;
    font-size: 17px;
    letter-spacing: 0.5px;
    :last-child {
      margin-bottom: 16px;
    }
    span {
      font-weight: bold;
      color: #c5a5c5;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
