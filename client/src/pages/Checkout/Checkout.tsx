import { useNavigate } from "react-router-dom";
import { Form, Resume } from "./components";
import { Container, Link, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { BoxPaymentMessage } from "./styled";
import { FormValues, IPricesList } from "./interfaces";

const Checkout = () => {
  const navigate = useNavigate();
  const pricesList: IPricesList = {
    total: 24048.2,
    items: [
      {
        name: "Salmon Salad",
        quantity: 1,
        price: 289.2,
      },
      {
        name: "Chicken Mex Salad",
        quantity: 100,
        price: 23759.0,
      },
    ],
  };

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
    navigate("/transaction-deny", { replace: true });
  };

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
