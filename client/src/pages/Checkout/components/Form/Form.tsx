import { Box, Grid, TextField } from "@mui/material";

export const Form = () => {
  return (
    <Box sx={{ margin: "0 0 38px 0" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            required
            id="cardName"
            label="Número de tarjeta"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            required
            id="cardNumber"
            label="MM/AA"
            fullWidth
            helperText="Fecha de expiración"
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            required
            id="code"
            label="Cód. de seguridad"
            fullWidth
            helperText="3 números al dorso de tarjeta"
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            required
            id="cvv"
            label="Nombre de titular"
            helperText="Como figura en la tarjeta"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            required
            id="cvv"
            label="DNI del titular"
            helperText="Número de documento"
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};
