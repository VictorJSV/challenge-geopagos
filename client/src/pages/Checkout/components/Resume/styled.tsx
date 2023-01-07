import { Grid, styled } from "@mui/material";

export const GridResume = styled(Grid)(({ theme }) => ({
  border: "1px solid #D8D8D8",
  fontSize: theme.typography.body2.fontSize,
  borderRadius: "8px",
  maxWidth: "315px",
  padding: "15px 13px",
  margin: "16px auto 24px auto",
  fontWeight: theme.typography.fontWeightMedium,
})) as typeof Grid;

export const GridTotalLabel = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  fontSize: theme.typography.subtitle1.fontSize,
  color: theme.palette.secondary.main,
})) as typeof Grid;

export const GridTotalPrice = styled(Grid)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.secondary.main,
})) as typeof Grid;
