import {
  AppBar,
  Box,
  Container,
  Link,
  Typography,
  Toolbar as Bar,
  PropTypes,
  Theme,
} from "@mui/material";
import Logo from "@src/assets/logo.svg";
import styled from "styled-components";

const StyledLogo = styled(props => <Logo {...props} />)`
  width: 154px;
`

interface Props {
  color: PropTypes.Color;
}

export const Toolbar = ({ color }: Props) => {
  return (
    <AppBar position="fixed" elevation={0} color={color}>
      <Container maxWidth="md" sx={{ p: 0 }}>
        <Bar sx={{ justifyContent: "space-between" }}>
          <Box>
            <Link
              component="button"
              sx={{
                color: (theme: Theme) =>
                  color === "primary"
                    ? theme.palette.common.white
                    : theme.palette.primary.main,
              }}
            >
              <StyledLogo />
            </Link>
          </Box>
          <Typography>Nombre del comercio</Typography>
        </Bar>
      </Container>
    </AppBar>
  );
};
