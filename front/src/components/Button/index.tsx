import { Container } from "./button-styles";
import { ButtonProps } from "./button-types";
import { LoadingProgress } from "components";
export const Button = ({ disabled, title, isLoading, ...rest }: ButtonProps) => {
  return (
    <Container {...{ disabled }} {...rest}>
      <LoadingProgress {...{ isLoading }}>{title}</LoadingProgress>
    </Container>
  );
};
