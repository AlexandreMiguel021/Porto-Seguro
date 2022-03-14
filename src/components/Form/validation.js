import { errMsg } from '../../constants/errMsg'
import * as yup from 'yup'

export const formValidation = yup.object().shape({
  name: yup
    .string()
    .required(errMsg.name.required)
    .min(5, errMsg.name.min)
    .max(50, errMsg.name.max),
  phone: yup
    .string(errMsg.phone.number)
    .required(errMsg.phone.required)
    .min(10, errMsg.phone.min)
    .max(11, errMsg.phone.max),
  email: yup
    .string()
    .required(errMsg.email.required)
    .max(50, errMsg.email.max)
    .email(errMsg.email.validEmail),
})
