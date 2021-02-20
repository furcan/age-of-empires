import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/not-found/NotFound';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <Switch>
        {
          Routes.map((item, index) => <Route key={index} path={item.path} component={item.component} exact={item.exact} strict={item.strict} />)
        }
        <Route path={`${process.env.PUBLIC_URL}*`} component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
