import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { Creators as UserCreators } from "../../ducks/store/user";

const Register = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const getAllUser = useSelector((state) => state.user.payload);

  const onSubmit = (values) => {
    dispatch(UserCreators.addUser(values));
    dispatch(reset("formRegister"));
  };

  useEffect(() => {
    dispatch(UserCreators.fetchUser());
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field
          component="input"
          name="name"
          label="Nome completo [sem abreviações]"
        />
      </div>
      <div>
        <Field component="input" name="email" label="E-mail" />
      </div>
      <div>
        <Field component="input" name="cpf" label="CPF" />
      </div>
      <div>
        <Field component="input" name="phone" label="Telefone" />
      </div>
      <button type="submit">Registrar</button>
      <div>
        {getAllUser?.map(({ name, email, cpf, phone }) => (
          <div key={cpf} style={{ border: "1px solid black" }}>
            <p>nome:{name}</p>
            <p>email:{email}</p>
            <p>cpf:{cpf}</p>
            <p>phone:{phone}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default reduxForm({
  form: "formRegister",
})(Register);
