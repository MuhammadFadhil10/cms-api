// types
export type SharedItemProperties = {
  style: { [key: string]: string };
};

// interfaces
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

export interface WebPage {
  name: string;
  webId: string;
  isMain: boolean;
  style?: { [key: string]: string };
  queryParams?: { [key: string]: string }[];
}

export interface Item {
  name: string;
  pageId: string;
  type: string;
  isLocked: boolean;
  isVisible: boolean;
  properties: SharedItemProperties & { [key: string]: string };
}
