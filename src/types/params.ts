export interface GlobalQueryParams {
  id: string;
}

export interface WebFilterQueryParams extends GlobalQueryParams {
  userId?: string;
  sharedUserId?: string[];
}
