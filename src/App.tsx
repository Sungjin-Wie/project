import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from 'components';
import Index from './pages/index';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  wrapper: {
    textAlign: 'center',
    height: 'auto',
    width: '100%',
    background: '#95d0f5',

  },
  App: {
    display: 'inline-block',
    minHeight: '100vh',
    flexDirection: 'column',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    width: 1200,
    background: 'white',
  },
});

const App: React.FC = () => {
  const css = useStyles();
  return (
    <div className={css.wrapper}>
      <div className={css.App}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
