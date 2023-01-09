import { Box, Grid } from "@mui/material";
import { IntlNumber } from "@src/components";
import { IPricesList } from "@src/models";
import { GridResume, GridTotalLabel, GridTotalPrice } from "./styled";

interface Props {
  pricesList: IPricesList;
}

export const Resume = ({ pricesList }: Props) => {
  return (
    <GridResume container spacing={0}>
      <Grid container item xs={12}>
        <GridTotalLabel item>Total</GridTotalLabel>
        <GridTotalPrice item>
          <IntlNumber value={pricesList.total}></IntlNumber>
        </GridTotalPrice>
      </Grid>
      {pricesList.items.map((item, index) => (
        <Grid container item xs={12} key={index}>
          <Grid item xs={7} sx={{ flexGrow: 1 }}>
            {item.name} <Box component="span">x {item.quantity}</Box>
          </Grid>
          <Grid item xs textAlign="right">
            <IntlNumber value={item.price}></IntlNumber>
          </Grid>
        </Grid>
      ))}
    </GridResume>
  );
};
