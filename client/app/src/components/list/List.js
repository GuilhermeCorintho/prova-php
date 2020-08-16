import React, { useState, useEffect } from 'react';
import { Box, Typography, TableContainer, TableBody, Table, TableCell, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios';
import ScrollUp from '../scroll-up/ScrollUp';

async function getPeople() {
  const result = await axios.get('http://localhost:8000/api/persons');
  return result.data;
}

const List = () => {
  const [rows, setRows] = useState([{ name: '', phone: '', birthdate: '' }]);

  useEffect(() => {
    async function fetchData() {
      let people = await getPeople();
      people = people.map(person => {
        person.birthdate = new Date(person.birthdate).toLocaleDateString();
        return person;
      });
      setRows(people);
    }
    fetchData();
  }, []);

  return (
    <Box pt={5} pb={10} align="center" component="div" color="#29abe2" id="list">
      <Box mb={7}>
        <Typography variant="h3">LISTA DE CADASTRO</Typography>
      </Box>
      <Box align="right" width="70%">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">NOME</TableCell>
                <TableCell align="right">E-MAIL</TableCell>
                <TableCell align="right">NASCIMENTO</TableCell>
                <TableCell align="right">TELEFONE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.birthdate}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box align="right">
        <ScrollUp></ScrollUp>
      </Box>
    </Box>
  )
}

export default List;