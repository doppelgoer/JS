export const GET_MBDATA = 'all/GET_MBDATA';
export const GET_SAVEDROUTEDATA = 'all/GET_SAVEDROUTEDATA';
export const GET_DATA = 'all/GET_DATA';
export const GetData = () => ({
  type: GET_MBDATA,
  type: GET_SAVEDROUTEDATA,
  type: GET_DATA,
});
const allState = {};
export const dataReducer = function (state = allState, action) {
  if (action.type === GET_DATA) {
    return action.payload;
  }
  if (action.type === GET_MBDATA) {
    // if(allState.)
    let isGetData = false;
    for (let i = 0; i < Object.keys(state).length; i++) {
      if (Object.keys(state)[i] === 'mbData') {
        isGetData = true;
        break;
      }
    }

    if (isGetData) {
      return state;
    } else {
      return { ...state, mbData: action.payload };
    }
  } else if (action.type === GET_SAVEDROUTEDATA) {
    // if(allState.)
    let isGetData = false;
    for (let i = 0; i < Object.keys(state).length; i++) {
      if (Object.keys(state)[i] === 'savedrouteData') {
        isGetData = true;
        break;
      }
    }

    if (isGetData) {
      return state;
    } else {
      return { ...state, savedrouteData: action.payload };
    }
  } else return state;
};
