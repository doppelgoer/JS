import { createStore, combineReducers } from 'redux';
import { mbReducer } from './reducers/mbReducer';
import { savedrouteReducer } from './reducers/savedrouteReducer';
import { dataReducer } from './reducers/dataReducer';
import { frimableTxtReducer } from './reducers/frimableTxtReducer';
//reducers 폴더에 있는 reducer 갖고와서 reducers로
export const reducers = combineReducers({
  //   count: counterReducer,
  // yearData:{}
  mbData: mbReducer,
  savedrouteData: savedrouteReducer,
  allData: dataReducer,
  frimableEmailTxt: frimableTxtReducer,
});
//스토어 만들기
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
