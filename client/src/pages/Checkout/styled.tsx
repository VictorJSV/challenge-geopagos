import { Box, styled } from "@mui/material";

export const BoxPaymentMessage = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  margin: "24px 0",
  color: "#999999",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})) as typeof Box;
