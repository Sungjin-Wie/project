import React from 'react';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { DefaultRootState } from 'store';
import { handleInputAction } from 'store/index/actions';

const Index: React.FC = () => {
  const index = useSelector((state: DefaultRootState) => state.index);
  const dispatch = useDispatch();
  const { value } = index;
  const handleInput = (e: string): void => {
    dispatch(handleInputAction(e));
  };
  return (
    <>
      <TextField
        size="small"
        variant="outlined"
        value={value}
        onChange={e => handleInput(e.target.value)}
      />
    </>
  );
};

export default Index;
