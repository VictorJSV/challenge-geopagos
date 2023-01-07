import { Suspense, lazy } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toolbar } from "./components";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#191C3C",
    },
    secondary: {
      main: "#8F2DF5",
    },
  },
});

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={<>Cargando ...</>}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Box sx={{ marginTop: 12 }}>
              <Toolbar />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Navigate to="checkout" />}></Route>
                  <Route path="*" element={<>NOT FOUND</>} />
                  <Route path="checkout" element={<Checkout />} />
                </Routes>
              </BrowserRouter>
            </Box>
          </Provider>
        </ThemeProvider>
      </Suspense>
    </>
  );
};
