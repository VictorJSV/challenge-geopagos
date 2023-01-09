import { FormattedNumberParts } from "react-intl";

interface Props {
  value: number;
}
export const IntlNumber = ({ value }: Props) => (
  <FormattedNumberParts value={value} style="currency" currency="USD">
    {(parts) => (
      <>
        {`${parts[0].value} `}
        {[...parts].splice(1).map((x) => x.value)}
      </>
    )}
  </FormattedNumberParts>
);
