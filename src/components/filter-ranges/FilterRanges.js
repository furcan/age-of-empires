import { FiInfo } from 'react-icons/fi';

import './FilterRanges.scss';

function FilterRanges(props) {
  const {
    onChangeHandler,
    costs,
    valueWood,
    valueFood,
    valueGold,
    setMouseStateWood,
    rangeWoodHandler,
    setMouseStateFood,
    rangeFoodHandler,
    setMouseStateGold,
    rangeGoldHandler,
  } = props;

  return (
    <div className="ranges-wrapper">
      <div className="range-group">
        <div className="range-check">
          <input type="checkbox" id="Wood" name="useWood" onChange={(event) => onChangeHandler(event)} />
          <label htmlFor="Wood">Wood</label>
        </div>

        <div className="range-slider">
          <input type="range" id="WoodRange" min="0" max="200" step="1" value={valueWood} onChange={(event) => rangeWoodHandler(event)} onMouseDown={() => setMouseStateWood('down')} onMouseUp={() => setMouseStateWood('up')} disabled={!costs.useWood} />
          <label htmlFor="WoodRange">
            <FiInfo />
            <span>{`0 - ${valueWood}`}</span>
          </label>
        </div>
      </div>


      <div className="range-group">
        <div className="range-check">
          <input type="checkbox" id="Food" name="useFood" onChange={(event) => onChangeHandler(event)} />
          <label htmlFor="Food">Food</label>
        </div>

        <div className="range-slider">
          <input type="range" id="FoodRange" min="0" max="200" step="1" value={valueFood} onChange={(event) => rangeFoodHandler(event)} onMouseDown={() => setMouseStateFood('down')} onMouseUp={() => setMouseStateFood('up')} disabled={!costs.useFood} />
          <label htmlFor="FoodRange">
            <FiInfo />
            <span>{`0 - ${valueFood}`}</span>
          </label>
        </div>
      </div>

      <div className="range-group">
        <div className="range-check">
          <input type="checkbox" id="Gold" name="useGold" onChange={(event) => onChangeHandler(event)} />
          <label htmlFor="Gold">Gold</label>
        </div>

        <div className="range-slider">
          <input type="range" id="GoldRange" min="0" max="200" step="1" value={valueGold} onChange={(event) => rangeGoldHandler(event)} onMouseDown={() => setMouseStateGold('down')} onMouseUp={() => setMouseStateGold('up')} disabled={!costs.useGold} />
          <label htmlFor="GoldRange">
            <FiInfo />
            <span>{`0 - ${valueGold}`}</span>
          </label>
        </div>
      </div>

    </div>
  );
}

export default FilterRanges;
