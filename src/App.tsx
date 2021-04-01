import React, { useState } from "react";
import { Form } from "./components/Form";
import { Title } from "./components/Title";
import {
  Container,
  CssBaseline,
  Grid,
  MuiThemeProvider,
} from "@material-ui/core";
import theme from "./theme";
import { UsersList } from "./components/UsersList";
import { UsersProvider } from "./components/UsersProvider";

//Context API

//Redux
//react-hook-form - yup - redux saga

function App() {
  return (
    <UsersProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Title>Iniciando com React</Title>
          <Grid container>
            <Grid item xs={7}>
              <Form />
            </Grid>
            <Grid item xs={5}>
              <UsersList />
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </UsersProvider>
  );
}

export default App;

//.ts - TypeScript - JSX
//.js - JavaScript

//.jsx

//f(x) => html

//Angular - Framework, arquitetura de modules, injecao de dependencia, formularios, camada http
//React - Biblioteca
