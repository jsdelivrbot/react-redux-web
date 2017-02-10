import { TESTE } from '../actions';

const INITIAL_STATE = {
  redux: 'Hey redux is working',
};

const gastosApp = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TESTE:
      return state;
    default:
      return state;
  }
};

export default gastosApp;
