import { IFee } from "../../interfaces";
import { Grid, Radio, Typography } from "@mui/material";
import { FeeContainer } from "./styled";

interface Props {
  item: IFee;
  isSelected: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Fee = ({ item, isSelected, handleChange }: Props) => {
  return (
    <FeeContainer selected={isSelected}>
      <Radio
        checked={isSelected}
        color="primary"
        onChange={handleChange}
        value={item.quantity}
        name="radio-button-demo"
        inputProps={{ "aria-label": String(item.quantity) }}
      />
      <Grid container alignItems="center" spacing={1}>
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography variant="body1">
            {item.quantity} cuotas de $ {item.value}
          </Typography>
          <Typography variant="body1">CF: {item.cf}%</Typography>
        </Grid>
        <Grid item fontWeight={(theme) => theme.typography.fontWeightBold}>{item.interest || "Sin interés"}</Grid>
      </Grid>
    </FeeContainer>
  );
};
