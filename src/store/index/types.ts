export type IndexState = {
  value: string;
};

export const INPUT = 'index/input';

export type InputAction = {
  type: typeof INPUT;
  payload: string;
};

export type IndexAction = InputAction;
