import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

export default withStyles({
  root: {
    marginBottom: "3rem",
    width: "100%",
    "& label.MuiFormLabel-root": {
      fontSize: "1.8rem",
      fontFamily: "inherit"
    },
    "& label.Mui-focused": {
      color: "#d3b06a"
    },
    "& input": {
      fontSize: "1.8rem"
    },
    "& p.MuiFormHelperText-root": {
      fontSize: "1.6rem"
    }
  }
})(TextField);
