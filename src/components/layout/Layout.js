import { Link, withRouter } from 'react-router-dom';

import Routes from '../../routes/Routes';

import './Layout.scss';

function Layout({ children }) {
  return (
    <div className="aoa-layout">
      <div className="aoa-container">
        <header className="aoa-header">
          <div className="aoa-logo">
            <img src="/assets/images/aoa-logo.png" width="200" height="106" alt="AOA Logo" />
          </div>
          <nav className="aoa-navbar">
            <ul>
              {
                Routes.map((item, index) => {
                  return item.showInNavbar &&
                    (
                      <li key={index}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    );
                })
              }
            </ul>
          </nav>
        </header>
      </div>

      <div className="aoa-container">
        {children}
      </div>
      {
        //TODO: footer etc.
      }
    </div>
  );
}

export default withRouter(Layout);
