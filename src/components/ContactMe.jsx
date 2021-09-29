import React from "react";
import { Container } from '@material-ui/core';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/Styles';


const useStyles = makeStyles({
  fields: {
    marginTop: 30,
    marginBottom: 20,
    display: 'block',
    width: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
})

export default function Create() {
  const classes = useStyles()

  return (
    <Container>
      <form autoComplete="off">
        <TextField
          className={classes.fields}
          label="name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.fields}
          label="email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.fields}
          label="message"
          multiline
          rows={4}
          fullWidth
          required
        />
         <button  style={{ marginLeft:"20rem", fontSize:"1.1rem"}} className="form-btn">Submit</button>
      </form>
    </Container>

  );
}

