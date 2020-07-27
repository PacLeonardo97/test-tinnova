import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import validate from "../../utils/validations/user";
import { phoneMask, cpfMask } from "../../utils/mask";
import { Creators as UserCreators } from "../../ducks/store/user";
import TextField from "../../components/Fields/TextField/index";
import { Button, Form, DivMargin } from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";

const Register = ({ handleSubmit, invalid, submitting , pristine }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(UserCreators.addUser(values));
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
    dispatch(reset("formRegister"));
  };

  return (
    <>
      <button type="button" onClick={() => history.push("/listagem")}>
        Ir para listagem
      </button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DivMargin>
          <Field
            component={TextField}
            name="name"
            label="Nome completo [sem abreviações]"
          />
        </DivMargin>
        <DivMargin>
          <Field component={TextField} name="email" label="E-mail" />
        </DivMargin>
        <DivMargin>
          <Field component={TextField} name="cpf" label="CPF" {...cpfMask} />
        </DivMargin>
        <DivMargin>
          <Field
            component={TextField}
            name="phone"
            label="Telefone"
            {...phoneMask}
          />
        </DivMargin>
        <Button disabled={!loading && (invalid || submitting || pristine)} type="submit">
          {!loading ? (
            "Cadastrar"
          ) : (
            <CircularProgress style={{ height: "25px", width: "25px", color: '#fff' }} />
          )}
        </Button>
      </Form>
    </>
  );
};

export default reduxForm({
  form: "formRegister",
  validate,
})(Register);
