import { Link, withRouter } from 'react-router-dom';

import Routes from '../../routes/Routes';

import './Layout.scss';

function Layout({ children }) {
  return (
    <div className="aoe-layout">
      <div className="aoe-container">
        <header className="aoe-header">
          <div className="aoe-logo">
            <img src="/assets/images/aoe-logo.png" width="200" height="106" alt="AOA Logo" />
          </div>
          <nav className="aoe-navbar">
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

      <div className="aoe-container">
        {children}
      </div>
      {
        //TODO: footer etc.
      }
    </div>
  );
}

export default withRouter(Layout);
