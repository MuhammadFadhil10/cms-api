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

export type WebPageStyles = {
  backgroundColor?: string;
};

export interface WebPage {
  name: string;
  webId: string;
  isMain: boolean;
  style?: WebPageStyles;
  queryParams?: { [key: string]: string }[];
}
