import { FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Layout from '../../components/layout/Layout';

import './Home.scss';

function Home() {
  return (
    <Layout>
      <div className="aoe-slider">
        <img className="aoe-slider-img" src="/assets/images/aoe-home-background-filtered.png" width="1240" height="698" alt="AOA Home Slider" />

        <div className="aoe-slider-box">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <Link to={`${process.env.PUBLIC_URL}/units`} className="aoe-slider-cta">
            <FiList />
            <span>Units</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
