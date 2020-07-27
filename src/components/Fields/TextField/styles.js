import { withStyles, TextField } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    borderBottomColor: "#efeeed",
    width: "100%",
    "& .MuiFormHelperText-root.Mui-error": {
      fontWeight: 600,
      margin: 0,
      color: "#eb4a46",
      borderBottomColor: "#eb4a46",
    },
    "& label.Mui-focused": {
      color: "black",
    },
  },
})(TextField);

export default CssTextField;
