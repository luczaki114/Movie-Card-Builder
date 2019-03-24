import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppWrapper from "./containers/AppWrapper";

class App extends Component {
  render() {
    const theme = createMuiTheme({
      menuBarWidth: "240px"
    });
    return (
      <BrowserRouter>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <div className="App">
              <Helmet>
                <meta charset="utf-8" />
              </Helmet>
              <AppWrapper />
            </div>
          </MuiThemeProvider>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
