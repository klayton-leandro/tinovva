import { create } from "zustand";
import { produce } from "immer";

export type UsersProps = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
};

type Props = {
  state: {
    isLoading: boolean;
    users: Array<UsersProps>;
  };
  actions: {
    removeUsersInGroup: (cpfNumber: string) => void;
    setUsersGroup: (users: UsersProps, userGet: Array<UsersProps>) => void;
    editUserInGroup: (updatedUser: UsersProps) => void;
  };
};

export const useUsers = create<Props>((set) => ({
  state: {
    isLoading: true,
    users: [],
  },
  actions: {
    setUsersGroup(users, userGet) {
      set((state) => ({
        ...produce(state, (draft) => {
          const usersContent = Object.freeze([...userGet, users]);
          for (var user of usersContent) {
            draft.state?.users.push(user);
            draft.state.isLoading = false;
          }
        }),
      }));
    },
    removeUsersInGroup(cpfNumber) {
      set((state) => ({
        ...produce(state, (draft) => {
          if (draft.state.users) {
            draft.state.users = draft.state.users.filter(
              ({ cpf }) => `${cpfNumber}` !== `${cpf}`
            );
            draft.state.isLoading = false;
          }
        }),
      }));
    },
    editUserInGroup(updatedUser) {
      set((state) => ({
        ...produce(state, (draft) => {
          if (draft.state.users) {
            const index = draft.state.users.findIndex(
              ({ cpf }) => `${updatedUser.cpf}` === `${cpf}`
            );
            draft.state.users[index] = {
              ...draft.state.users[index],
              ...updatedUser
            } 
            draft.state.isLoading = false;
          }
        }),
      }));
    }
  },
}));
