import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BaseProps } from 'lib/types';

const useStyles = makeStyles({
  wrapper: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '1em',
    marginBottom: '2em',
    background: '#95d0f5',
    color: '#fff',
    height: 300,
  },
});

interface TitleProps extends BaseProps {
  title: string;
}

const Title: React.FC<TitleProps> = props => {
  const { title } = props;
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};

const Header: React.FC = () => {
  const css = useStyles();
  return (
    <div className={css.wrapper}>
      <Title title={'Hello World'} />
    </div>
  );
};

export default Header;
