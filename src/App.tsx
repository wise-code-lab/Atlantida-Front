import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { theme } from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

class App extends Component {
  private deferredPrompt: any;
  constructor(props: any) {
    super(props);

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
  }
  public handleInstallClick(): void {
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
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
          <button onClick={this.handleInstallClick}>Install application</button>
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
