import * as types from '../Constants';

const initialState = {
  clientInfo: null
};

// eslint-disable-next-line default-param-last
export default function ClientDetails(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case types.CLIENT_DETAILS: {
      const clientInfo = data || null;
      return { ...state, clientInfo };
    }
    default:
      return state;
  }
}
