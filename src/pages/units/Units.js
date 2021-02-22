import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { FiSliders, FiList } from 'react-icons/fi';

import { selectorUnits, fetchUnits, filterUnits } from '../../redux/actions/unitsActions';
import Layout from '../../components/layout/Layout';
import TableUnits from '../../components/table/TableUnits';
import TableLoading from '../../components/table/TableLoading';
import TableError from '../../components/table/TableError';
import TableNoData from '../../components/table/TableNoData';
import FilterButtons from '../../components/filter-buttons/FilterButtons';
import FilterRanges from '../../components/filter-ranges/FilterRanges';

import './Units.scss';

function Units() {

  const dispatch = useDispatch();
  const { unitList, loading, error } = useSelector(selectorUnits);

  // filter => ages: begin
  const [filterAge, setFilterAge] = useState('All');
  const [buttonClassesAge, setButtonClassesAge] = useState({
    All: true,
    Dark: false,
    Feudal: false,
    Castle: false,
    Imperial: false,
  });
  // filter => ages: end

  // filter => costs: begin
  const [filterCost, setFilterCost] = useState({
    useWood: false,
    rangeWood: 200,
    useFood: false,
    rangeFood: 200,
    useGold: false,
    rangeGold: 200,
  });
  // filter => costs: end

  // fetch data: begin
  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);
  // fetch data: end

  // render data: begin
  const renderUnits = () => {
    if (loading) return <TableLoading />;
    if (error) return <TableError />;
    return (
      unitList?.length > 0 ?
        <TableUnits data={unitList} />
        :
        <TableNoData />
    );
  };
  // render data: end

  // event handlers: begin
  const filterAgesHandler = (event) => {
    const type = event.target.name;
    const resetClasses = {
      All: false,
      Dark: false,
      Feudal: false,
      Castle: false,
      Imperial: false,
    };
    setButtonClassesAge({
      ...resetClasses,
      [type]: true,
    });

    setFilterAge(type);
  };

  const filterCostsHandler = (event) => {
    setFilterCost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };
  // event handlers: end

  // update data by state: begin
  useEffect(() => {
    dispatch(filterUnits(filterAge, filterCost));
  }, [filterAge, filterCost]);
  // update data by state: end

  // range wood: begin
  const [rangeWood, setRangeWood] = useState(200);
  const [mouseStateWood, setMouseStateWood] = useState(null);

  const rangeWoodHandler = (event) => {
    setRangeWood(Math.round(event.target.value));
  };

  useEffect(() => {
    if (mouseStateWood === 'up') {
      setFilterCost((prevState) => ({
        ...prevState,
        rangeWood: rangeWood,
      }));
    }
  }, [mouseStateWood]);
  // range wood: end

  // range food: begin
  const [rangeFood, setRangeFood] = useState(200);
  const [mouseStateFood, setMouseStateFood] = useState(null);

  const rangeFoodHandler = (event) => {
    setRangeFood(Math.round(event.target.value));
  };

  useEffect(() => {
    if (mouseStateFood === 'up') {
      setFilterCost((prevState) => ({
        ...prevState,
        rangeFood: rangeFood,
      }));
    }
  }, [mouseStateFood]);
  // range food: end

  // range gold: begin
  const [rangeGold, setRangeGold] = useState(200);
  const [mouseStateGold, setMouseStateGold] = useState(null);

  const rangeGoldHandler = (event) => {
    setRangeGold(Math.round(event.target.value));
  };

  useEffect(() => {
    if (mouseStateGold === 'up') {
      setFilterCost((prevState) => ({
        ...prevState,
        rangeGold: rangeGold,
      }));
    }
  }, [mouseStateGold]);
  // range gold: end

  return (
    <Layout>
      <div className="unit-section-wrapper">
        <div className="units-section units-section-half">
          <h2 className="section-title">
            <FiSliders />
            <span>Ages</span>
          </h2>
          <div className={`units-buttons ${loading ? 'units-loading' : ''}`}>
            <FilterButtons
              onClickHandler={filterAgesHandler}
              classListAge={buttonClassesAge}
            />
          </div>
        </div>

        <div className="units-section units-section-half">
          <h2 className="section-title">
            <FiSliders />
            <span>Costs</span>
          </h2>
          <div className={`units-filters ${loading ? 'units-loading' : ''}`}>
            <FilterRanges
              onChangeHandler={filterCostsHandler}
              costs={filterCost}
              valueWood={rangeWood}
              valueFood={rangeFood}
              valueGold={rangeGold}
              setMouseStateWood={setMouseStateWood}
              rangeWoodHandler={rangeWoodHandler}
              setMouseStateFood={setMouseStateFood}
              rangeFoodHandler={rangeFoodHandler}
              setMouseStateGold={setMouseStateGold}
              rangeGoldHandler={rangeGoldHandler}
            />
          </div>
        </div>

        <div className="units-section">
          <h2 className="section-title">
            <FiList />
            <span>Units</span>
          </h2>
          <div className="units-results">
            {renderUnits()}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default connect()(Units);
