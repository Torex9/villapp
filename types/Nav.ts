export interface Nav {
  name: string;
  url?: string;
  urlMatcher?: string;
  onClick?: () => void;
  children?: Array<Nav>;
  external?: boolean;
}
