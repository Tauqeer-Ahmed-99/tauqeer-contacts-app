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
    case actionTypes.POST_CONTACTS_SUCCESS:
      return {
        ...prevState,
        data: payload,
        loading: false,
      };

    case actionTypes.EDIT_CONTACT_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case actionTypes.EDIT_CONTACT_SUCCESS:
      return {
        ...prevState,
        loading: false,
      };
    case actionTypes.EDIT_CONTACT_FAIL:
      return {
        ...prevState,
        loading: false,
      };

    case actionTypes.DELETE_CONTACTS_SUCCESS:
      return {
        ...prevState,
        data: payload,
        loading: false,
      };

    default:
      return prevState;
  }
};
