import * as Yup from "yup";
import { regexp } from "utils";
import { forms } from "consts/errors";

export const formValidation = Yup.object().shape({
  name: Yup.string().required(forms.REQUIRED).min(3),
  email: Yup.string().required(forms.REQUIRED).email(forms.INVALID_EMAIL),
  cpf: Yup.string().required(forms.REQUIRED),
  phone: Yup.string()
    .required(forms.REQUIRED)
    .matches(regexp.phone, forms.PHONE_FORMAT),
});
