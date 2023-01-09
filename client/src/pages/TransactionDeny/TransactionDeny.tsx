import { useNavigate } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { ButtonGeneric } from "@src/shared/styled";
import icAlert from "@src/assets/ic-alert.svg";

const TransactionDeny = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/checkout", { replace: true });
  };
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mb={3}>
        <img src={icAlert} alt="alert" width={54} />
      </Box>
      <Typography textAlign="center" variant="h6" mb={3}>
        Transacción denegada
      </Typography>
      <Typography
        textAlign="center"
        variant="body2"
        sx={{ maxWidth: "241px", margin: "0 auto" }}
      >
        ¡Disculpas! Se ha producido un error, por favor vuelve a intentar.
      </Typography>
      <Box m="23px 0" textAlign="center">
        <ButtonGeneric
          variant="contained"
          color="secondary"
          disableElevation
          sx={{ maxWidth: "187px" }}
          onClick={onClick}
        >
          Volver a intentar
        </ButtonGeneric>
      </Box>
    </Container>
  );
};
export default TransactionDeny;
