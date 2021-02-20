import { withRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';

function NotFound(props) {
  const { history } = props;

  const goBack = () => {
    if (history) {
      history.goBack(-1);
    }
  };

  return (
    <Layout>
      <h1>404 - Not found</h1>
      {history?.length &&
        <button type="button" onClick={() => goBack()}>Go Back</button>
      }
    </Layout>
  );
}

export default withRouter(NotFound);
