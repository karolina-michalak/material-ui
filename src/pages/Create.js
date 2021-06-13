import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)
    if ((title == "")) {
      setTitleError(true);
    }
    if ((details == "")) {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <div>
      <Typography className={classes.title} color="secondary">
        <AcUnitIcon></AcUnitIcon>
      </Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          fullWidth
          color="secondary"
          variant="outlined"
          required
          className={classes.field}
          error={titleError}
        />
        <TextField
          label="Details"
          onChange={(e) => setDetails(e.target.value)}
          fullWidth
          color="secondary"
          variant="outlined"
          required
          className={classes.field}
          multiline
          rows={4}
          error={detailsError}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.btn}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
