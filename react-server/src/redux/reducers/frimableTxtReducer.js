export const SET_EMAILTXT = 'frimable/SET_EMAILTXT';
// export const GET_EMAILTXT = 'frimable/GET_EMAILTXT';
export const GetSavedrouteData = () => ({
  type: SET_EMAILTXT,
  // type: GET_EMAILTXT,
});
const emailTxt = {};
export const frimableTxtReducer = (state = emailTxt, action) => {
  if (action.type === SET_EMAILTXT) {
    console.log(22222222222);
    console.log(666, action.payload);
    return action.payload;
  }
  // else if (action.type === GET_EMAILTXT) {
  //   return state;
  // }
  else return state;
};
