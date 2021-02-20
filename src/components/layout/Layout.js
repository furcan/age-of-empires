import Header from '../header/Header';
import Footer from '../footer/Footer';

import './Layout.scss';

function Layout({ children }) {
  return (
    <div className="aoe-layout">
      <Header />

      <div className="aoe-container">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
