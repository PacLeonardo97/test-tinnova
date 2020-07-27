import PropTypes from "prop-types";
import React from "react";

import { makeStyles } from "@material-ui/core";

import Textbox from "./styles";

const CustomizedInputs = ({
  input: { name, onChange, value, ...restInput },
  color,
  meta,
  disabled,
  ...rest
}) => {
  const useStyles = makeStyles(() => ({
    root: {
      // width: "100%",
      display: "flex",
      flexWrap: "wrap",
      color: "black",
    },
  }));
  const classes = useStyles();
  const { submitError, error, touched, active } = meta;
  const showError = !active && touched && (submitError || error);
  return (
    <div className={classes.root} noValidate>
      <Textbox
        fullWidth
        autoComplete="off"
        disabled={disabled}
        {...restInput}
        {...rest}
        style={{ color: "blue" }}
        name={name}
        helperText={showError ? error || submitError : undefined}
        error={showError && true}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

CustomizedInputs.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    checked: PropTypes.bool,
    multiple: PropTypes.bool,
  }).isRequired,
  color: PropTypes.string,
  meta: PropTypes.shape({
    visited: PropTypes.bool,
    touched: PropTypes.bool,
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    submitError: PropTypes.string,
  }).isRequired,
};

CustomizedInputs.defaultProps = {
  disabled: false,
  color: "black",
};

export default CustomizedInputs;
