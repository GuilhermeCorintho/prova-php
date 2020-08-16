import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  input: {
    color: "white"
  }
};

function CustomTextField(props) {
  const { classes } = props;

  return (
    <TextField
      className={classes.root}
      InputProps={{
        className: classes.input
      }}
    />
  );
}

export default withStyles(styles)(CustomTextField);