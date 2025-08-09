export interface Nav {
  name: string;
  url?: string;
  onClick?: () => void;
  external?: boolean;
}
