import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import { theme } from '../../theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Header from '../header/Header';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header custom={42}/>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button>Overrides CSS</Button>
      </MuiThemeProvider>

    );
  }
}

export default App;
