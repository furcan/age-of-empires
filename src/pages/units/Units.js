import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import {
  selectorUnits,
  fetchUnits,
  filterUnits,
} from '../../redux/actions/unitsActions';

import './Units.scss';

function costToStringData(input) {
  return (JSON.stringify((input || '')) || '')
    .replace(/{"/, '')
    .replace(/":/gmi, ': ')
    .replace(/,"/gmi, ', ')
    .replace(/}/gmi, '').trim();
}

function Units() {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectorUnits);

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
    Wood: false,
    Food: false,
    Gold: false,
  });
  // filter => costs: end

  // fetch data: begin
  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);
  // fetch data: end

  // render data: begin
  const renderUnits = () => {
    if (loading) return <p>Loading units...</p>;
    if (error) return <p>Unable to display units.</p>;
    return (
      data.length > 0 ?
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Costs</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((unit) => <tr key={unit.id}>
                <td>{unit.id}</td>
                <td>{unit.name}</td>
                <td>{unit.age}</td>
                <td>{unit.cost !== null ? costToStringData(unit.cost) : '...'}</td>
              </tr>)
            }
          </tbody>
        </table>
        :
        <p>No data</p>
    );
  };
  // render data: end

  // event handlers: begin
  const filterAgesHandler = (event) => {
    setFilterAge(event.target.name);

    var resetClasses = {
      All: false,
      Dark: false,
      Feudal: false,
      Castle: false,
      Imperial: false,
    };
    setButtonClassesAge({
      ...resetClasses,
      [event.target.name]: true,
    });
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

  return (
    <div>
      <h1>Units</h1>
      <div className="units-buttons">
        <button type="button" name="All" onClick={(event) => filterAgesHandler(event)} className={buttonClassesAge.All ? 'selected' : ''}>All</button>
        <button type="button" name="Dark" onClick={(event) => filterAgesHandler(event)} className={buttonClassesAge.Dark ? 'selected' : ''}>Dark</button>
        <button type="button" name="Feudal" onClick={(event) => filterAgesHandler(event)} className={buttonClassesAge.Feudal ? 'selected' : ''}>Feudal</button>
        <button type="button" name="Castle" onClick={(event) => filterAgesHandler(event)} className={buttonClassesAge.Castle ? 'selected' : ''}>Castle</button>
        <button type="button" name="Imperial" onClick={(event) => filterAgesHandler(event)} className={buttonClassesAge.Imperial ? 'selected' : ''}>Imperial</button>
      </div>

      <div className="units-filters">
        <div>
          <input id="Wood" name="Wood" type="checkbox" onChange={(event) => filterCostsHandler(event)} />
          <label htmlFor="Wood">Wood</label>
        </div>

        <div>
          <input id="Food" name="Food" type="checkbox" onChange={(event) => filterCostsHandler(event)} />
          <label htmlFor="Food">Food</label>
        </div>

        <div>
          <input id="Gold" name="Gold" type="checkbox" onChange={(event) => filterCostsHandler(event)} />
          <label htmlFor="Gold">Gold</label>
        </div>
      </div>

      <div className="units-results">
        {renderUnits()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.units.loading,
  error: state.units.error,
  data: state.units.data,
});

export default connect(mapStateToProps)(Units);
