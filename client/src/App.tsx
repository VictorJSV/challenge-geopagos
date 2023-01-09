import { Suspense, lazy } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Toolbar } from "./components";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { IntlProvider } from "react-intl";

const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const TransactionDeny = lazy(
  () => import("./pages/TransactionDeny/TransactionDeny")
);

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

const PrimaryLayout = () => (
  <>
    <Toolbar color="primary" />
    <Outlet />
  </>
);

const SecondaryLayout = () => (
  <>
    <Toolbar color="inherit" />
    <Outlet />
  </>
);

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={<>Cargando ...</>}>
        <IntlProvider locale="en-US">
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Box sx={{ marginTop: 12 }}>
                <BrowserRouter>
                  <Routes>
                    <Route
                      path="/"
                      element={<Navigate to="checkout" />}
                    ></Route>
                    <Route path="*" element={<>NOT FOUND</>} />
                    <Route element={<PrimaryLayout />}>
                      <Route path="checkout" element={<Checkout />} />
                    </Route>
                    <Route element={<SecondaryLayout />}>
                      <Route
                        path="transaction-deny"
                        element={<TransactionDeny />}
                      />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </Box>
            </Provider>
          </ThemeProvider>
        </IntlProvider>
      </Suspense>
    </>
  );
};
