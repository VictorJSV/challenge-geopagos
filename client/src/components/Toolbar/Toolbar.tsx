import {
  AppBar,
  Box,
  Container,
  Link,
  Typography,
  Toolbar as Bar,
} from "@mui/material";
import logo from "@src/assets/logo.svg";

export const Toolbar = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="md" sx={{ p: 0 }}>
        <Bar sx={{ justifyContent: "space-between" }}>
          <Box>
            <Link component="button">
              <img src={logo} alt="logo" width={114} />
            </Link>
          </Box>
          <Typography>Nombre del comercio</Typography>
        </Bar>
      </Container>
    </AppBar>
  );
};
