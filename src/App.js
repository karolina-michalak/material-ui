import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: red
  },
  typography: {
    fontFamily: 'Oswald',
    fontWeightLight: 400,
    fontWeightRegular: 500
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
