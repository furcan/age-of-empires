import * as actions from '../actions/unitsActions';

export const initialState = {
  loading: false,
  error: false,
  unitList: [],
  unitDetail: {},
};

export default function unitsReducer(state = initialState, action) {
  switch (action.type) {
  case actions.PROCESSING:
    return { ...state, loading: true };

  case actions.SUCCEEDED_UNITLIST:
    return { unitList: action.payload, loading: false, error: false };

  case actions.SUCCEEDED_UNITDETAIL:
    return { unitDetail: action.payload, loading: false, error: false };

  case actions.FAILED:
    return { ...state, loading: false, error: true };

  default:
    return state;
  }
}
