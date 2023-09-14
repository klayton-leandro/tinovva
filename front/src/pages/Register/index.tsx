import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, Input } from "components";
import { formValidation } from "./validations";
import { getUsers } from "services/getUsers";
import { normalizaText } from "utils/normalizeText";
import { useUsers } from "store";

export function Register(): React.ReactNode {
  const navigate = useNavigate();
  const { actions } = useUsers();
  const formOptions = { resolver: yupResolver(formValidation) };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm(formOptions);

  const { mutate, isLoading } = useMutation(getUsers, {
    onSuccess(data) {
      const values = getValues();
      actions.setUsersGroup(values, data);
      navigate("registers");
    },
  });
  async function handleRegister({
    name,
    email,
    cpf,
    phone,
  }: {
    name: string;
    email: string;
    cpf: string;
    phone: string;
  }) {
    phone = normalizaText(phone);
    cpf = normalizaText(cpf);
    mutate({
      name,
      cpf,
      phone,
      email,
    });
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(handleRegister)} style={{  marginTop: 250 }}>
        <Input
          label="Nome completo (sem abreviações)"
          placeholder="Nome completo (sem abreviações)"
          {...register("name")}
          errors={errors}
        />

        <Input
          label="E-mail"
          placeholder="E-mail"
          {...register("email")}
          errors={errors}
        />

        <Input
          label="CPF"
          placeholder="CPF"
          mask="cpf"
          {...register("cpf")}
          errors={errors}
        />

        <Input
          label="Telefone"
          placeholder="Telefone"
          mask="phone"
          {...register("phone")}
          errors={errors}
        />

        <Button disabled={!isValid} title="Cadastrar" {...{ isLoading }} />
      </form>
    </div>
  );
}
