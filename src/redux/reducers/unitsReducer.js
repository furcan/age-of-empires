import * as actions from '../actions/unitsActions';

export const initialState = {
  loading: false,
  error: false,
  data: [],
  unit: {},
};

export default function unitsReducer(state = initialState, action) {
  switch (action.type) {
  case actions.PROCESSING:
    return { ...state, loading: true };

  case actions.SUCCEEDED_UNITS:
    return { data: action.payload, loading: false, error: false };

  case actions.SUCCEEDED_UNIT:
    return { unit: action.payload, loading: false, error: false };

  case actions.FAILED:
    return { ...state, loading: false, error: true };

  default:
    return state;
  }
}
