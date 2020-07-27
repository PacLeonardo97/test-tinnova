import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Creators as UserCreators } from "../../ducks/store/user";
import { Container, ContainerUser } from "./style";

const List = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getAllUser = useSelector((state) => state.user.payload);

  useEffect(() => {
    getAllUser.length < 1 && dispatch(UserCreators.fetchUser());
  }, []);

  return (
    <>
      <button type="button" onClick={() => history.push("/")}>Ir para Cadastro</button>
      <Container>
        {getAllUser?.map(({ name, email, cpf, phone }) => (
          <ContainerUser key={cpf} style={{ border: "1px solid black" }}>
            <p>Nome: {name}</p>
            <p>Email: {email}</p>
            <p>Cpf: {cpf}</p>
            <p>Phone: {phone}</p>
          </ContainerUser>
        ))}
      </Container>
    </>
  );
};

export default List;
