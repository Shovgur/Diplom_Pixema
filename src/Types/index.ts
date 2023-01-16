export type RegisterUserDataType = {
  first_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  token_name: string;
  callback?: () => void;
};

export type LoginUserDataType = {
  email: string;
  password: string;
  token_name: string;
  callback?: () => void;
};
