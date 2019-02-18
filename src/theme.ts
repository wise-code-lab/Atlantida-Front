import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, orange } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: orange,
  },
  typography: { useNextVariants: true, fontFamily: 'Arial' },
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 36,
        padding: '0 30px'
      },
    },
  },
});