export const GENDERS = ['man', 'woman'] as const;

export interface FormMain {
  phone: string;
  email: string;
}

export interface FormCreateFirst {
  nickname: string;
  name: string;
  surname: string;
  sex: string;
}
