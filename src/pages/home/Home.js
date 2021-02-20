import { FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Layout from '../../components/layout/Layout';

import './Home.scss';

function Home() {
  return (
    <Layout>
      <div className="aoa-slider">
        <img className="aoa-slider-img" src="/assets/images/aoa-home-background-filtered.png" width="1240" height="698" alt="AOA Home Slider" />

        <div className="aoa-slider-box">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <Link to={`${process.env.PUBLIC_URL}/units`} className="aoa-slider-cta">
            <FiGrid />
            <span>Units</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
