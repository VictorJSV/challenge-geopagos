import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@material-ui/core";
import * as React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

export const App = () => (
  <>
    <CssBaseline />
    <Container maxWidth="md">
      <Typography variant="h1" component="h2">
        Hello word
      </Typography>
    </Container>
  </>
);
