import { Box, Grid, Radio, Theme, Typography } from "@mui/material";
import { FeeContainer } from "./styled";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { IntlNumber } from "@src/components";
import { useFeesList } from "./hooks";

interface Props {
  total: number
}

export const Fees = ({ total }: Props) => {
  const {
    setValue,
    formState: { defaultValues },
  } = useFormContext();
  const [selectedValue, setSelectedValue] = useState(defaultValues?.fees);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setSelectedValue(value);
    setValue("fees", value);
  };
  const { feesList } = useFeesList(total);

  return (
    <Box m="14px 0 41px 0">
      {feesList.map((item, index) => (
        <FeeContainer selected={selectedValue === item.months} key={index}>
          <Radio
            checked={selectedValue === item.months}
            color="primary"
            onChange={handleChange}
            value={item.months}
            name="fee"
          />
          <Grid container alignItems="center" spacing={1}>
            <Grid item sx={{ flexGrow: 1 }}>
              <Typography variant="body1">
                {item.months} cuotas de
                <Box ml={1} component="span">
                  <IntlNumber value={item.value}></IntlNumber>
                </Box>
              </Typography>
              <Typography variant="body1">CF: {item.cf}%</Typography>
            </Grid>
            <Grid
              item
              fontWeight={(theme: Theme) => theme.typography.fontWeightBold}
            >
              {(item.interest && (
                <IntlNumber value={item.interest}></IntlNumber>
              )) ||
                "Sin interés"}
            </Grid>
          </Grid>
        </FeeContainer>
      ))}
    </Box>
  );
};
