import { Button, styled } from "@mui/material";

export const ButtonGeneric = styled(Button)(({ theme }) => ({
  padding: "13px",
  maxWidth: "312px",
  width: "100%",
  borderRadius: "24px",
  fontSize: theme.typography.subtitle1.fontSize,
  textTransform: "inherit"
})) as typeof Button;
