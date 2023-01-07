import { Fee, Form, Resume } from "./components";
import { useState } from "react";
import { IFee } from "./interfaces";
import { Box, Container, Link, TextField, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { BoxPaymentMessage } from "./styled";
import { ButtonGeneric } from "@src/shared/styled";

const Checkout = () => {
  const [selectedValue, setSelectedValue] = useState(1);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(event.target.value));
  };

  const feesList: IFee[] = [
    {
      quantity: 1,
      value: 200000,
      cf: 0,
      interest: null,
    },
    {
      quantity: 3,
      value: 833,
      cf: 0.8,
      interest: 250000,
    },
    {
      quantity: 6,
      value: 900,
      cf: 0.9,
      interest: 540000,
    },
  ];

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h5" gutterBottom>
        Completá los datos para pagar
      </Typography>
      <Resume></Resume>
      <Typography variant="body2" sx={{ margin: "0 0 22px 0" }}>
        Paga con tarjeta de crédito o débito.
        <Link href="#" color="secondary" ml={1}>
          Ver tarjetas
        </Link>
      </Typography>
      <form>
        <Form />
        <Typography variant="h5" gutterBottom>
          Cuotas
        </Typography>
        <Box m="14px 0 41px 0">
          {feesList.map((item, index) => (
            <Fee
              key={index}
              item={item}
              isSelected={selectedValue === item.quantity}
              handleChange={handleChange}
            />
          ))}
        </Box>
        <Typography variant="h5" gutterBottom>
          Datos personales
        </Typography>
        <TextField
          variant="standard"
          required
          id="cvv"
          label="Email"
          helperText="A este email te enviaremos el recibo de compra"
          fullWidth
        />
        <Box m="23px 0" textAlign="center">
          <ButtonGeneric variant="contained" color="secondary" disableElevation>
            Continuar
          </ButtonGeneric>
        </Box>
      </form>
      <BoxPaymentMessage>
        <Lock sx={{ mr: 1 }} />
        Todas las transacciones son seguras y encriptadas.
      </BoxPaymentMessage>
    </Container>
  );
};
export default Checkout;
