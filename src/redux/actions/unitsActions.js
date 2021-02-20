import MOCK_DATA from '../../mock/age-of-empires-units.json';

export const selectorUnits = (state) => state.units;
export const selectorState = (state) => state;

export const PROCESSING = 'PROCESSING';
export const FAILED = 'FAILED';
export const SUCCEEDED_UNITS = 'SUCCEEDED_UNITS';
export const SUCCEEDED_UNIT = 'SUCCEEDED_UNIT';

export const processing = () => ({
  type: PROCESSING,
});

export const failed = () => ({
  type: FAILED,
});

export const succeededUnits = (data) => ({
  type: SUCCEEDED_UNITS,
  payload: data,
});

export const succeededUnit = (unit) => ({
  type: SUCCEEDED_UNIT,
  payload: unit,
});

export function fetchUnits() {
  return async (dispatch) => {
    dispatch(processing());

    try {
      // const response = await fetch('https://furcan.net/units?page=1');
      // const data = await response.json();

      const data = MOCK_DATA.units;

      // a dummy delay to demonstrate the loading state
      setTimeout(() => {
        dispatch(succeededUnits(data));
      }, 500);

    } catch (error) {
      dispatch(failed());
    }
  };
}

export function filterUnits(age, costs) {
  return async (dispatch) => {
    dispatch(processing());
    try {
      // const response = await fetch('https://furcan.net/units');
      // const data = await response.json();

      let data = MOCK_DATA.units;

      if (age !== 'All') {
        data = data.filter(x => x.age !== null && x.age.toLocaleLowerCase('en') === (age || '').toLocaleLowerCase('en'));
      }

      if (costs.useWood) {
        data = data.filter(x => x.cost !== null && Object.prototype.hasOwnProperty.call(x.cost, 'Wood') && x.cost.Wood <= costs.rangeWood);
      }

      if (costs.useFood) {
        data = data.filter(x => x.cost !== null && Object.prototype.hasOwnProperty.call(x.cost, 'Food') && x.cost.Food <= costs.rangeFood);
      }

      if (costs.useGold) {
        data = data.filter(x => x.cost !== null && Object.prototype.hasOwnProperty.call(x.cost, 'Gold') && x.cost.Gold <= costs.rangeGold);
      }

      // a dummy delay to demonstrate the loading state
      setTimeout(() => {
        dispatch(succeededUnits(data));
      }, 500);

    } catch (error) {
      dispatch(failed());
      console.log(error);
    }
  };
}

export function fetchUnit(id) {
  return async (dispatch) => {
    dispatch(processing());

    try {
      // const response = await fetch('https://furcan.net/units?id=1');
      // const data = await response.json();

      const data = MOCK_DATA.units;

      const unit = data.find(x => x.id === id);

      dispatch(succeededUnit(unit));
    } catch (error) {
      dispatch(failed());
    }
  };
}
