import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { theme } from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
