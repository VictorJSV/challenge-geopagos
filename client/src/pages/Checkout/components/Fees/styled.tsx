import { InputLabel, styled } from "@mui/material";

interface Props {
  selected: boolean
}

export const FeeContainer = styled(InputLabel)(({ selected }: Props) => ({
  display: "flex",
  padding: "14px",
  background: selected ? "rgba(143, 45, 245, 0.07)" : "#F2F2F2",
  borderRadius: "8px",
  marginBottom: "10px",
  cursor: "pointer",
}));
