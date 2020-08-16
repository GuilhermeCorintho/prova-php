import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#29abe2',
    backgroundColor: '#012d51',
    '&:hover': {
      backgroundColor: '#011f38',
    },
    fontSize: '2rem'
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function RegisterButton({ onClick }) {
  const classes = useStyles();
  return (
    <div>
      <ColorButton onClick={onClick} variant="contained" className={classes.margin}>
        CADASTRAR
      </ColorButton>
    </div>
  );
}
