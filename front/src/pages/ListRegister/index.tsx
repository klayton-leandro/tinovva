import * as React from "react";
import { UsersProps, useUsers } from "store";
import {
  Container,
  TextPresentation,
  WrapperButton,
} from "./list-register-styles";
import { Button, Input, Modal } from "components";
import { useForm } from "react-hook-form";

export function ListRegister() {
  const {
    actions,
    state: { users },
  } = useUsers();
  const [isEditUserModal, setIsEditUserModal] = React.useState(false);

  const handleTrashUser = (cpfNumber: string) => {
    actions.removeUsersInGroup(cpfNumber);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  const handleEditUser = (user: UsersProps) => {
    setIsEditUserModal(!isEditUserModal);
    setValue("name", user.name);
    setValue("email", user.email);
  };

  const submit = ({ name, email, cpf, phone }: any) => {
    actions.editUserInGroup({ name, email, cpf, phone });
    setIsEditUserModal(!isEditUserModal)
  };

  return (
    <React.Fragment>
      {users.map((user) => (
        <Container>
          <TextPresentation>{user.name}</TextPresentation>
          <TextPresentation>{user.email}</TextPresentation>
          <TextPresentation>{user.cpf}</TextPresentation>
          <TextPresentation>{user.phone}</TextPresentation>
          <WrapperButton>
            <Button
              disabled={false}
              isLoading={false}
              title="Deletar"
              onClick={() => handleTrashUser(user.cpf)}
            />

            <Button
              disabled={false}
              isLoading={false}
              title="Editar"
              onClick={() => handleEditUser(user)}
            />
          </WrapperButton>
        </Container>
      ))}
      {isEditUserModal && (
        <Modal
          isOpen={isEditUserModal}
          handleClose={() => setIsEditUserModal(!isEditUserModal)}
          title="Editar um usuario"
        >
          <form onSubmit={handleSubmit(submit)}>
            <Input
              disabled={true}
              label="Nome completo (sem abreviações)"
              placeholder="Nome completo (sem abreviações)"
              {...register("name")}
              errors={errors}
            />

            <Input
              disabled={true}
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

            <Button disabled={!isValid} title="Editar" />
          </form>
        </Modal>
      )}
    </React.Fragment>
  );
}
