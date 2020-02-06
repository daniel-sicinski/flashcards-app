import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export default withStyles({
  root: {
    "& .MuiButton-label": {
      fontSize: "1.5rem"
    }
  }
})(Button);
