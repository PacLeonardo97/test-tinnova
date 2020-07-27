import cpf from "./cpf";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Campo obrigatório";
  } else if (values.name.length < 3) {
    errors.name = "Campo deve conter 3 caracteres ou mais";
  }

  if (!values.email) {
    errors.email = "Campo obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Campo email inválido.";
  }

  if (!values.cpf) {
    errors.cpf = "Campo obrigatório";
  } else if (!cpf(values.cpf)) {
    errors.cpf = "CPF inválido";
  }

  if (!values.phone) {
    errors.phone = "Campo obrigatório";
  } else if (values.phone.length <= 10) {
    errors.phone = "telefone inválido";
  }

  return errors;
};

export default validate;
