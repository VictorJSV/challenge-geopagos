import { Box, Grid } from "@mui/material";
import { GridResume, GridTotalLabel, GridTotalPrice } from "./styled";

export const Resume = () => {
  const picesList = {
    total: 876999.98,
    items: [
      {
        name: "Salmon Salad",
        quantity: 1,
        price: 289,
      },
      {
        name: "Chicken Mex Salad",
        quantity: 100,
        price: 23759,
      },
    ],
  };

  return (
    <GridResume container spacing={0}>
      <Grid container item xs={12}>
        <GridTotalLabel item>Total</GridTotalLabel>
        <GridTotalPrice item>$ {picesList.total}</GridTotalPrice>
      </Grid>
      {picesList.items.map((item, index) => (
        <Grid container item xs={12} key={index}>
          <Grid item xs={7} sx={{ flexGrow: 1 }}>
            {item.name} <Box component="span">x {item.quantity}</Box>
          </Grid>
          <Grid item xs textAlign="right">
            $ {item.price}
          </Grid>
        </Grid>
      ))}
    </GridResume>
  );
};
