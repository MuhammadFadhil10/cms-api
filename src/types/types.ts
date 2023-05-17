export interface User {
  email: string;
  password: string;
  name: string;
  profilePicture?: string;
}

export interface Web {
  name: string;
  userId: string;
  sharedUserId?: string[];
}
