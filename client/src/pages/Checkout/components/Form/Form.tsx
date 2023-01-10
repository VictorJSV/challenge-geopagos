import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import * as yup from "yup";
import { forwardRef } from "react";
import { useForm, useWatch, FormProvider } from "react-hook-form";
import MaskedInput, { MaskedInputProps } from "react-text-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonGeneric } from "@src/shared/styled";
import { Validations } from "@src/shared/validations";
import { AMERICANEXPRESS, CVC, DNI, EXPIRYDATE, OTHERCARDS } from "../../const";
import { Fees } from "../Fees/Fees";
import { FormValues } from "../../interfaces";
import { useCardType } from "../../hooks";
import IcVisa from "@src/assets/ic-visa.svg";

const TextMaskCustom = forwardRef<MaskedInputProps, any>((props, ref) => (
  <MaskedInput {...props} />
));

const schema = yup.object({
  cardNumber: yup
    .string()
    .required("Campo requerido")
    .test("format", "Campo inválido", (value) => Validations.cardNumber(value)),
  cardExpiration: yup
    .string()
    .required("Campo requerido")
    .test("format", "Campo inválido", (value) =>
      Validations.cardExpiration(value)
    ),
  cvc: yup.string().required("Campo requerido").min(3, "Campo inválido"),
  cardName: yup.string().required("Campo requerido"),
  dni: yup.string().required("Campo requerido").min(6, "Campo inválido"),
  fees: yup.number(),
  email: yup.string().required("Campo requerido").email("Campo inválido"),
});

interface Props {
  onSubmit: (data: FormValues) => void;
  total: number;
}

export const Form = ({ onSubmit, total }: Props) => {
  const methods = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      fees: 1,
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = methods;
  const valueCardNumber = useWatch({ control, name: "cardNumber" });
  const cardType = useCardType(valueCardNumber);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box sx={{ margin: "0 0 38px 0" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl
                variant="standard"
                error={Boolean(errors.cardNumber)}
                fullWidth
              >
                <InputLabel htmlFor="cardNumber">Número de tarjeta</InputLabel>
                <Input
                  required
                  id="cardNumber"
                  fullWidth
                  autoComplete="cc-name"
                  {...register("cardNumber")}
                  inputComponent={TextMaskCustom}
                  inputProps={{
                    mask: ["37", "34"].includes(
                      valueCardNumber?.substring(0, 2)
                    )
                      ? AMERICANEXPRESS
                      : OTHERCARDS,
                    guide: false,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      {cardType === "VISA" && (
                        <IcVisa style={{ width: "40px" }} />
                      )}
                    </InputAdornment>
                  }
                />
                <FormHelperText>
                  {Boolean(errors.cardNumber) &&
                    (errors.cardNumber?.message as String)}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="standard"
                id="cardExpiration"
                label="MM/AA"
                fullWidth
                autoComplete="cc-exp"
                {...register("cardExpiration")}
                InputProps={{
                  inputComponent: TextMaskCustom,
                  inputProps: {
                    mask: EXPIRYDATE,
                    guide: false,
                  },
                }}
                error={Boolean(errors.cardExpiration)}
                helperText={
                  Boolean(errors.cardExpiration)
                    ? (errors.cardExpiration?.message as String)
                    : "Fecha de expiración"
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl
                variant="standard"
                error={Boolean(errors.cvc)}
                fullWidth
              >
                <InputLabel htmlFor="cvc">Cód. de seguridad</InputLabel>
                <Input
                  required
                  id="cvc"
                  autoComplete="cc-csc"
                  {...register("cvc")}
                  inputComponent={TextMaskCustom}
                  inputProps={{
                    mask: CVC,
                    guide: false,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <HelpOutlineIcon />
                    </InputAdornment>
                  }
                />
                <FormHelperText>
                  {Boolean(errors.cvc)
                    ? (errors.cvc?.message as String)
                    : "3 números al dorso de tarjeta"}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                id="cardName"
                label="Nombre de titular"
                fullWidth
                autoComplete="cc-name"
                {...register("cardName")}
                error={Boolean(errors.cardName)}
                helperText={
                  Boolean(errors.cardName)
                    ? (errors.cardName?.message as String)
                    : "Como figura en la tarjeta"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                id="dni"
                label="DNI del titular"
                fullWidth
                {...register("dni")}
                InputProps={{
                  inputComponent: TextMaskCustom,
                  inputProps: {
                    mask: DNI,
                    guide: false,
                  },
                }}
                error={Boolean(errors.dni)}
                helperText={
                  Boolean(errors.dni)
                    ? (errors.dni?.message as String)
                    : "Número de documento"
                }
              />
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h5" gutterBottom>
          Cuotas
        </Typography>
        <Fees total={total} />
        <Typography variant="h5" gutterBottom>
          Datos personales
        </Typography>
        <TextField
          variant="standard"
          required
          id="email"
          label="Email"
          fullWidth
          {...register("email")}
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email)
              ? (errors.email?.message as String)
              : "A este email te enviaremos el recibo de compra"
          }
        />
        <Box m="23px 0" textAlign="center">
          <ButtonGeneric
            type="submit"
            variant="contained"
            color="secondary"
            disableElevation
          >
            Continuar
          </ButtonGeneric>
        </Box>
      </form>
    </FormProvider>
  );
};
