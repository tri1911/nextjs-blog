export type Fn<T extends any[], R> = (...t: T) => R;

export interface ItemData {
  id: number;
  name: string;
  email: string;
  avatar: string;
}
