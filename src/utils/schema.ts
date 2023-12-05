import * as yup from 'yup';
import isEmail from 'validator/lib/isEmail';

const advantageSchema = yup.object().shape({
  advantage: yup.string().required(),
});

export const schema = [
  yup.object().shape({
    phone: yup.string().default('').min(18, 'Enter phone number').required('Enter phone number'),
    email: yup
      .string()
      .default('')
      .required('Enter email')
      .email('Enter correct email')
      .test({
        name: 'is email',
        test: (value) => isEmail(value),
        message: 'Enter correct email',
      }),
  }),
  yup.object().shape({
    nickname: yup
      .string()
      .default('')
      .required('Enter your nickname')
      .max(30, '30 characters maximum')
      .matches(/^[a-zA-Zа-яА-Я0-9]+$/, 'Only letters and digits'),
    name: yup
      .string()
      .default('')
      .required('Enter your name')
      .max(50, '50 characters maximum')
      .matches(/^[a-zA-Zа-яА-Я]+$/, 'Only letters'),
    surname: yup
      .string()
      .default('')
      .required('Enter your surname')
      .max(50, '50 characters maximum')
      .matches(/^[a-zA-Zа-яА-Я]+$/, 'Only letters'),
    sex: yup.string().default('').required('Select your gender'),
  }),
  yup.object({
    advantages: yup
      .array()
      .of(advantageSchema)
      .test('emptiness', 'No empty fields allowed', (v) => !v?.some((field) => field.advantage?.length === 0))
      .min(1, 'Minimum one advantage')
      .required(),
    checkbox: yup.array(yup.number()).min(1, 'Minimum one check').required(),
    radio: yup.number().required('Choose any option'),
  }),
  yup.object({
    about: yup
      .string()
      .required('Enter about text')
      .min(1, 'Enter about text')
      .test('max symbols', '200 symbols max', (v) => v.replaceAll(' ', '').length <= 200),
  }),
];
