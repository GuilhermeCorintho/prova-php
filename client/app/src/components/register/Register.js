import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, createMuiTheme, ThemeProvider } from '@material-ui/core';
import RegisterButton from './RegisterButton';
import axios from 'axios';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#fff" },
    secondary: { main: "#fff" }
  },
  overrides: {
    MuiInput: {
      root: {
        color: '#fff',
      },
      underline: {
        color: '#fff',
        "&:before": {
          borderBottomColor: "#fff"
        },
      }
    },
    MuiFormLabel: {
      root: {
        color: "#fff"
      }
    }
  }
});

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birthdate, setBirthDate] = useState('')
  const [phone, setPhone] = useState('')

  const handleName = (event) => {
    debugger;
    setName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePhone = (event) => {
    setPhone(event.target.value);
  }

  const handleBirthdate = (event) => {
    setBirthDate(event.target.value);
  }

  async function postPerson() {
    try {
      const person = {
        name,
        email,
        birthdate,
        phone
      };
      if (!name || !email || !birthdate || !phone) {
        return alert('Preencha todos os campos');
      }
      const result = await axios.post('http://localhost:8000/api/person', person);
      if (result.status !== 201) {
        return alert(result.data.message || 'Erro ao cadastrar');
      }
      alert('Cadastrado');
    } catch (err) {
      alert(`Erro ao cadastrar: ${err.message}`);
    }
  }

  return (
    <Box pt={5} align="center" component="div" color="white" id="register">
      <Typography variant="h3">CADASTRO</Typography>
      <Box mt={5} pb={5} width="50%">
        <form noValidate autoComplete="off">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <ThemeProvider theme={theme}>
              <TextField label="Nome" fullWidth="true" onChange={handleName}
              InputLabelProps={{
                shrink: true,
              }}
              ></TextField>
              <TextField label="E-mail" fullWidth="true" onChange={handleEmail}
                InputLabelProps={{
                  shrink: true,
                }}>
              </TextField>
              <TextField label="Nascimento" fullWidth="true" onChange={handleBirthdate} type="date"
                InputLabelProps={{
                  shrink: true,
                }}>
              </TextField>
              <TextField label="Telefone" fullWidth="true" onChange={handlePhone}>
              </TextField></ThemeProvider>
            <Box pt={10}>
              <RegisterButton onClick={postPerson}></RegisterButton>
            </Box>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}


export default Register;