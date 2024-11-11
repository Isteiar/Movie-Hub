export interface IUser {
  _id?: string;
  username?: string;
  email: string;
  password: string;
}

export interface IUserInfo {
  id: number;
  username: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}