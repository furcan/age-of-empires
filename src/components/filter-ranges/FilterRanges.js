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
          <input type="checkbox" id="Wood" name="useWood" onChange={onChangeHandler} />
          <label htmlFor="Wood">Wood</label>
        </div>

        <div className="range-slider">
          <input type="range" id="WoodRange" min="0" max="200" step="1" value={valueWood} onChange={rangeWoodHandler} onMouseDown={() => setMouseStateWood('down')} onMouseUp={() => setMouseStateWood('up')} onTouchStart={() => setMouseStateWood('down')} onTouchEnd={() => setMouseStateWood('up')} disabled={!costs.useWood} />
          <label htmlFor="WoodRange">
            <FiInfo />
            <span>{`0 - ${valueWood}`}</span>
          </label>
        </div>
      </div>


      <div className="range-group">
        <div className="range-check">
          <input type="checkbox" id="Food" name="useFood" onChange={onChangeHandler} />
          <label htmlFor="Food">Food</label>
        </div>

        <div className="range-slider">
          <input type="range" id="FoodRange" min="0" max="200" step="1" value={valueFood} onChange={rangeFoodHandler} onMouseDown={() => setMouseStateFood('down')} onMouseUp={() => setMouseStateFood('up')} onTouchStart={() => setMouseStateWood('down')} onTouchEnd={() => setMouseStateWood('up')} disabled={!costs.useFood} />
          <label htmlFor="FoodRange">
            <FiInfo />
            <span>{`0 - ${valueFood}`}</span>
          </label>
        </div>
      </div>

      <div className="range-group">
        <div className="range-check">
          <input type="checkbox" id="Gold" name="useGold" onChange={onChangeHandler} />
          <label htmlFor="Gold">Gold</label>
        </div>

        <div className="range-slider">
          <input type="range" id="GoldRange" min="0" max="200" step="1" value={valueGold} onChange={rangeGoldHandler} onMouseDown={() => setMouseStateGold('down')} onMouseUp={() => setMouseStateGold('up')} onTouchStart={() => setMouseStateWood('down')} onTouchEnd={() => setMouseStateWood('up')} disabled={!costs.useGold} />
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
