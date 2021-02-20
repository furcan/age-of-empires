import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
// import { FiHash } from 'react-icons/fi';

import { selectorUnits, fetchUnit } from '../../redux/actions/unitsActions';
import { emptyData } from '../../helpers/Helpers';
import Layout from '../../components/layout/Layout';
import NotFound from '../not-found/NotFound';

import './UnitDetail.scss';

function UnitDetail(props) {
  const unitId = Math.round(props?.match?.params?.id || 0);

  const dispatch = useDispatch();
  const { unit } = useSelector(selectorUnits);

  // fetch unit: begin
  useEffect(() => {
    dispatch(fetchUnit(unitId));
  }, [dispatch]);
  // fetch unit: end

  if (unit === undefined) {
    return <NotFound />;
  }

  console.log('UNIT_DETAIL: ', unit);

  return (
    <Layout>
      <div className="unit-detail">
        <div className="unit-banner">
          <img src="/assets/images/aoe-home-background-filtered.png" width="1240" height="698" alt={unit?.name} />
          <h1 className="unit-title">
            <span>{unit?.name}</span>
          </h1>
        </div>

        <div className="unit-specs">
          <div className="spec">
            <p className="name">ID</p>
            <p className="value">{emptyData(unit?.id)}</p>
          </div>
          <div className="spec">
            <p className="name">Name</p>
            <p className="value">{emptyData(unit?.name)}</p>
          </div>
          <div className="spec">
            <p className="name">Description</p>
            <p className="value">{emptyData(unit?.description)}</p>
          </div>
          <div className="spec">
            <p className="name">Min. Required Age</p>
            <p className="value">{emptyData(unit?.age)}</p>
          </div>
          <div className="spec">
            <p className="name">Wood Cost</p>
            <p className="value">{emptyData(unit?.cost?.Wood)}</p>
          </div>
          <div className="spec">
            <p className="name">Food Cost</p>
            <p className="value">{emptyData(unit?.cost?.Food)}</p>
          </div>
          <div className="spec">
            <p className="name">Gold Cost</p>
            <p className="value">{emptyData(unit?.cost?.Gold)}</p>
          </div>
          <div className="spec">
            <p className="name">Build Time</p>
            <p className="value">{emptyData(unit?.build_time)}</p>
          </div>
          <div className="spec">
            <p className="name">Reload Time</p>
            <p className="value">{emptyData(unit?.reload_time)}</p>
          </div>
          <div className="spec">
            <p className="name">Hit Points</p>
            <p className="value">{emptyData(unit?.hit_points)}</p>
          </div>
          <div className="spec">
            <p className="name">Attack</p>
            <p className="value">{emptyData(unit?.attack)}</p>
          </div>
          <div className="spec">
            <p className="name">Accuracy</p>
            <p className="value">{emptyData(unit?.accuracy)}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  unit: state.units.unit,
});

export default connect(mapStateToProps)(UnitDetail);
