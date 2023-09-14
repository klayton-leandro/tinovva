import { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from "react";

import { RiSpamLine } from "react-icons/ri";

//@ts-ignore
import InputMask from "react-input-mask";

import { Container } from "../styles/globals";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  active?: boolean;
  mask?: "cpf" | "phone";
  isLoading?: boolean;
  errors?: string | any;
}

function BaseInput(props: Props, ref: any) {
  const { icon, label, active, mask, isLoading, errors, ...rest } = props;

  const masks = {
    cpf: "999.999.999-99",
    phone: "(99) 99999-9999",
  };

  const renderInput = useMemo(() => {
    const placeholder = () => {
      if (isLoading) return "Carregando os dados...";

      if (props.placeholder) return props.placeholder;

      return "Digitar";
    };

    if (props.mask) {
      return (
        <InputMask
          {...rest}
          disabled={isLoading ? isLoading : props.disabled}
          placeholder={placeholder()}
          ref={ref}
          mask={masks[props.mask]}
        />
      );
    }

    if (!props.mask) {
      return (
        <input
          {...rest}
          disabled={isLoading ? isLoading : props.disabled}
          placeholder={placeholder()}
          ref={ref}
        />
      );
    }
  }, [props, ref, isLoading]);

  return (
    <Container
      icon={icon}
      active={active}
      error={errors[rest.name as any] ? errors[rest.name as any]?.message : undefined}
      type={props.type}
    >
      <span>{label}</span>
      {renderInput}
      {errors && errors[rest.name as any]?.message && (
        <div className="input-error">
          <RiSpamLine /> <p>{errors[rest?.name as any]?.message}</p>
        </div>
      )}
    </Container>
  );
}

export const Input = forwardRef(BaseInput);
