import * as types from '../Constants';

const initialState = {
  clientNameData: [],
  projectNameData: [],
  isDataLoading: false
};

// eslint-disable-next-line default-param-last
export default function ClientDetails(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case types.IS_DATA_LOADING:
      return { ...state, isDataLoading: data };
    case types.CLIENT_NAMES:
      return { ...state, clientNameData: data };
    case types.PROJECT_NAMES:
      return { ...state, projectNameData: data };
    default:
      return state;
  }
}
