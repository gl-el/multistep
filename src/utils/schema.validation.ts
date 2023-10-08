import * as yup from 'yup';
import isEmail from 'validator/lib/isEmail';

export const schema = yup.object({
  phone: yup.string().min(18, 'Enter phone number').required('Enter phone number'),
  email: yup
    .string()
    .required('Enter email')
    .email('Enter correct email')
    .test({
      name: 'is email',
      test: (value) => isEmail(value),
      message: 'Enter correct email',
    }),
});
