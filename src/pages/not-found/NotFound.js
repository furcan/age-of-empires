import { withRouter } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';

import Layout from '../../components/layout/Layout';

import './NotFound.scss';

function NotFound(props) {
  const { history } = props;

  const goBackHandler = () => {
    history.goBack(-1);
  };

  return (
    <Layout>
      <div className="aoe-404">
        <div className="aoe-404-icon">
          <VscSearch />
        </div>
        <h1 className="aoe-404-title">404 - Not found</h1>
        <button type="button" className="aoe-404-button" onClick={goBackHandler}>Go Back</button>
      </div>
    </Layout>
  );
}

export default withRouter(NotFound);
