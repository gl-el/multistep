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

export type Advantage = { advantage: string };

export interface FormCreateSecond {
  advantages: Advantage[];
}

export interface FormCreateThird {
  about: string;
}
