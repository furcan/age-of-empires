import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { selectorUnits, fetchUnit } from '../../redux/actions/unitsActions';
import { emptyData } from '../../helpers/Helpers';
import Layout from '../../components/layout/Layout';
import NotFound from '../not-found/NotFound';

import './UnitDetail.scss';

function UnitDetail(props) {

  const dispatch = useDispatch();
  const { unitDetail, loading, error } = useSelector(selectorUnits);

  const unitId = Math.round(props?.match?.params?.id || 0);

  useEffect(() => {
    dispatch(fetchUnit(unitId));
  }, [dispatch]);

  if (!loading && !error && unitDetail === undefined) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className={`unit-detail ${loading ? 'unit-loading' : ''}`}>
        <div className="unit-banner">
          <img src={`${process.env.PUBLIC_URL}/assets/images/aoe-home-background-filtered.png`} width="1240" height="698" alt={emptyData(unitDetail?.name)} />
          {loading ?
            (
              <h1 className="unit-title">
                <span>Loading...</span>
              </h1>
            )
            :
            (
              <h1 className="unit-title">
                <span>{unitDetail?.name}</span>
              </h1>
            )
          }
        </div>

        <div className="unit-specs">
          <div className="spec">
            <p className="name">ID</p>
            <p className="value">{emptyData(unitDetail?.id)}</p>
          </div>
          <div className="spec">
            <p className="name">Name</p>
            <p className="value">{emptyData(unitDetail?.name)}</p>
          </div>
          <div className="spec">
            <p className="name">Description</p>
            <p className="value">{emptyData(unitDetail?.description)}</p>
          </div>
          <div className="spec">
            <p className="name">Min. Required Age</p>
            <p className="value">{emptyData(unitDetail?.age)}</p>
          </div>
          <div className="spec">
            <p className="name">Wood Cost</p>
            <p className="value">{emptyData(unitDetail?.cost?.Wood)}</p>
          </div>
          <div className="spec">
            <p className="name">Food Cost</p>
            <p className="value">{emptyData(unitDetail?.cost?.Food)}</p>
          </div>
          <div className="spec">
            <p className="name">Gold Cost</p>
            <p className="value">{emptyData(unitDetail?.cost?.Gold)}</p>
          </div>
          <div className="spec">
            <p className="name">Build Time</p>
            <p className="value">{emptyData(unitDetail?.build_time)}</p>
          </div>
          <div className="spec">
            <p className="name">Reload Time</p>
            <p className="value">{emptyData(unitDetail?.reload_time)}</p>
          </div>
          <div className="spec">
            <p className="name">Hit Points</p>
            <p className="value">{emptyData(unitDetail?.hit_points)}</p>
          </div>
          <div className="spec">
            <p className="name">Attack</p>
            <p className="value">{emptyData(unitDetail?.attack)}</p>
          </div>
          <div className="spec">
            <p className="name">Accuracy</p>
            <p className="value">{emptyData(unitDetail?.accuracy)}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default connect()(UnitDetail);
