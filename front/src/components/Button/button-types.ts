import { ButtonHTMLAttributes } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
  title: string;
  isLoading?: boolean;
};
