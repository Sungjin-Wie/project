import { IndexState, IndexAction, INPUT } from './types';

export const indexState: IndexState = {
  value: '',
};

export const indexReducer = (
  state = indexState,
  action: IndexAction,
): IndexState => {
  const { type, payload } = action;
  switch (type) {
    case INPUT:
      return { ...state, value: payload };
    default:
      return state;
  }
};
