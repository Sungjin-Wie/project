import { InputAction, INPUT } from './types';

export const handleInputAction = (value: string): InputAction => ({
  type: INPUT,
  payload: value,
});
