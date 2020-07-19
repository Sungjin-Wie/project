import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { BaseProps } from 'lib/types';

const useStyles = makeStyles({
  headerWrapper: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'inline-block',
    justifyContent: 'center',
    padding: '1em',
    marginBottom: '2em',
    background: '#95d0f5',
    color: '#fff',
    height: 300,
  },
  titleWrapper: {},
  headerBarWrapper: {
    width: 'auto',
  },
  headerBarButton: {
    background: 'white',
  },
});

interface TitleProps extends BaseProps {
  title: string;
}

const HeaderBar: React.FC = () => {
  const css = useStyles();
  return (
    <div className={css.headerBarWrapper}>
      <Button className={css.headerBarButton} variant="outlined" href="/#">
        Home
      </Button>
    </div>
  );
};

const Title: React.FC<TitleProps> = props => {
  const { title } = props;
  const css = useStyles();
  return (
    <header className={css.titleWrapper}>
      <h2>{title}</h2>
    </header>
  );
};

const Header: React.FC = () => {
  const css = useStyles();
  return (
    <div className={css.headerWrapper}>
      <HeaderBar />
      <Title title={'Hello World'} />
    </div>
  );
};

export default Header;
