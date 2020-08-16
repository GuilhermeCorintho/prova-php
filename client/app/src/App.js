import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/header/Header';
import HeaderContent from './components/header/HeaderContent';
import Register from './components/register/Register';
import List from './components/list/List';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container >
          <Header></Header>
          <HeaderContent></HeaderContent>
        </Container>
      </header>
      <div className="RegisterContent">
        <Container >
          <Register></Register>
        </Container>
      </div>
      <Container>
        <List></List>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
