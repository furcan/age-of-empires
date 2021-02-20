import MOCK_DATA from '../../mock/age-of-empires-units.json';

export const selectorUnits = (state) => state.units;

export const PROCESSING = 'PROCESSING';
export const FAILED = 'FAILED';
export const SUCCEEDED = 'SUCCEEDED';

export const processing = () => ({
  type: PROCESSING,
});

export const succeeded = (data) => ({
  type: SUCCEEDED,
  payload: data,
});

export const failed = () => ({
  type: FAILED,
});

export function fetchUnits() {
  return async (dispatch) => {
    dispatch(processing());

    try {
      // const response = await fetch('https://furcan.net/units?page=1');
      // const data = await response.json();

      const data = MOCK_DATA.units;

      dispatch(succeeded(data));
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

      console.log(age, costs);

      if (age !== 'All') {
        data = data.filter(x => x.age.toLocaleLowerCase('en') === age.toLocaleLowerCase('en'));
      }

      if (costs.Food) {
        data = data.filter(x => x.cost !== null && Object.prototype.hasOwnProperty.call(x.cost, 'Food') && x.cost.Food > 10);
      }

      if (costs.Gold) {
        data = data.filter(x => x.cost !== null && Object.prototype.hasOwnProperty.call(x.cost, 'Gold'));
      }

      if (costs.Wood) {
        data = data.filter(x => x.cost !== null && Object.prototype.hasOwnProperty.call(x.cost, 'Wood'));
      }

      console.log(data);

      dispatch(succeeded(data));
    } catch (error) {
      dispatch(failed());
    }
  };
}
