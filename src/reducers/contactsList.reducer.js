import * as actionTypes from "../actionTypes";

const initialState = {
  data: null,
  loading: false,
};

export const getContactsListReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.REQUEST_CONTACTS:
      return {
        ...prevState,
        loading: true,
      };

    case actionTypes.GOT_CONTACTS:
      return {
        ...prevState,
        data: payload,
        loading: false,
      };
    case actionTypes.DIDNOT_GET_CONTACTS:
      return {
        ...prevState,
        loading: false,
      };
    case actionTypes.POST_CONTACTS:
      return {
        ...prevState,
        data: payload,
        loading: false,
      };
    case actionTypes.DELETE_CONTACTS:
      return {
        ...prevState,
        data: payload,
        loading: false,
      };

    default:
      return prevState;
  }
};
