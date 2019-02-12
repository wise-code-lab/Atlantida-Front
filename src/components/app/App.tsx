import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import { theme } from '../../theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <MuiThemeProvider theme={theme}>
              <Button variant="contained" color="primary">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button>Overrides CSS</Button>
            </MuiThemeProvider>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
