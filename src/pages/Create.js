import React from "react";
import { Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: "20px",
  },
});

export default function Create() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title} color="secondary">
       hhhhh <AcUnitIcon></AcUnitIcon>
      </Typography>
      <Button color="secondary" variant="contained" className={classes.btn}>
        Submit
      </Button>
    </div>
  );
}
