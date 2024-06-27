export type Inputs = {
  email?: string;
  password?: string;
};

export type RestorePass = {
  email: string;
};

export type NewPass = {
  password: string;
  repeatedPassword: string;
};
