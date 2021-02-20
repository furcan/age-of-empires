import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { selectorUnits, fetchUnit } from '../../redux/actions/unitsActions';
import Layout from '../../components/layout/Layout';
import NotFound from '../../NotFound';

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
      <h1>Unit Detail</h1>

      <p>{unit?.name}</p>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  unit: state.units.unit,
});

export default connect(mapStateToProps)(UnitDetail);
