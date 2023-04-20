export type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type ISignIn = {
  email: IUser['email'];
  password: IUser['password'];
};

export type IProfile = {
  email: IUser['email'];
  firstName: IUser['firstName'];
  lastName: IUser['lastName'];
};

export type IGetUser = {
  firstName: IUser['firstName'];
  lastName: IUser['lastName'];
};
