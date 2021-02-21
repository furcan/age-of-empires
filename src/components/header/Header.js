import { Link } from 'react-router-dom';

import Routes from '../../routes/Routes';

import './Header.scss';

function Header() {
  return (
    <header className="aoe-header">
      <div className="aoe-container">
        <div className="aoe-header-content">
          <div className="aoe-logo">
            <img src={`${process.env.PUBLIC_URL}/assets/images/aoe-logo.png`} width="200" height="106" alt="AoE Logo" />
          </div>
          <nav className="aoe-navbar">
            <ul>
              {
                Routes.map((item, index) => item.showInNavbar &&
                  (
                    <li key={index}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ),
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
