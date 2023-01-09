import { useNavigate } from "react-router-dom";
import { Form, Resume } from "./components";
import { Container, Link, Skeleton, Snackbar, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { BoxPaymentMessage } from "./styled";
import { FormValues } from "./interfaces";
import { useGetCheckout } from "./hooks";
import { useEffect } from "react";
import { RequestType } from "@src/const/request";

const Checkout = () => {
  const navigate = useNavigate();
  const { doRequest, status, data: pricesList, error } = useGetCheckout();

  useEffect(() => {
    doRequest();
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
    navigate("/transaction-deny", { replace: true });
  };

  if (
    status === RequestType.Idle ||
    status === RequestType.Pending ||
    status === RequestType.Rejected
  ) {
    return (
      <Container maxWidth="sm">
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        <Skeleton
          variant="rectangular"
          sx={{ maxWidth: "315px", margin: "20px auto" }}
          height={104}
        />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="rectangular" sx={{ margin: "10px 0" }} height={48} />
        <Skeleton variant="rectangular" sx={{ margin: "10px 0" }} height={48} />
        <Skeleton variant="rectangular" sx={{ margin: "10px 0" }} height={48} />
        <Skeleton variant="rectangular" sx={{ margin: "10px 0" }} height={48} />
        <Skeleton
          variant="text"
          sx={{ fontSize: "1.5rem", marginTop: "20px" }}
        />
        <Skeleton variant="rectangular" sx={{ margin: "10px 0" }} height={76} />
        <Skeleton variant="rectangular" sx={{ margin: "10px 0" }} height={76} />
        <Skeleton variant="rectangular" sx={{ margin: "10px 0" }} height={76} />
        <Skeleton
          variant="text"
          sx={{ fontSize: "1.5rem", marginTop: "20px" }}
        />
        <Skeleton variant="rectangular" sx={{ margin: "10px 0" }} height={48} />
        {
          error && <Snackbar
            open={true}
            autoHideDuration={6000}
            message="Hubo un error"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
        }
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h5" gutterBottom>
        Completá los datos para pagar
      </Typography>
      <Resume pricesList={pricesList} />
      <Typography variant="body2" sx={{ margin: "0 0 22px 0" }}>
        Paga con tarjeta de crédito o débito.
        <Link href="#" color="secondary" ml={1}>
          Ver tarjetas
        </Link>
      </Typography>
      <Form onSubmit={onSubmit} total={pricesList.total} />
      <BoxPaymentMessage>
        <Lock sx={{ mr: 1 }} />
        Todas las transacciones son seguras y encriptadas.
      </BoxPaymentMessage>
    </Container>
  );
};
export default Checkout;
