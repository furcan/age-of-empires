import { Route, Switch, Link } from 'react-router-dom';
import NotFound from './NotFound';
import Routes from './routes/Routes';
import './App.scss';

function App() {
  return (
    <>
      <div>
        {
          Routes.map((item, index) => {
            return item.showInNavbar &&
            (
              <Link key={index} to={item.path}>
                <span>{item.name}</span>
              </Link>
            );
          })
        }
      </div>
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
