import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { theme } from '../../theme';
import { MuiThemeProvider, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Header, {IUser} from '../Header/Header';
import BottomNavBar from '../BottomNavBar/BottomNavBar';

const styles = createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
    }
});

const mockedUser: null | IUser = null;
// {
//     id: 'foo',
//     name: 'Aleksander Mizov',
//     initials: 'AM',
//     emailsCount: 0,
//     notificationsCount: 42,
// }

class App extends Component<Props> {
  render() {
      const {classes} = this.props;
    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <Header user={mockedUser}/>
                {/* <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button>Overrides CSS</Button> */}
                <BottomNavBar />
            </MuiThemeProvider>
        </div>

    );
  }
}

export interface Props extends WithStyles<typeof styles> {}

(App as React.ComponentClass<Props>).propTypes = {
    classes: PropTypes.object.isRequired
  } as any;

export default withStyles(styles)(App);
// export default App;
