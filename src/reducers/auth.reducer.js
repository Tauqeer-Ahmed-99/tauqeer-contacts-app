import * as actionTypes from "../actionTypes";

const sessionStorageData = JSON.parse(sessionStorage.getItem("profile"));

const initialState = {
  email: sessionStorageData ? sessionStorageData.email : null,
  userName: sessionStorageData ? sessionStorageData.userName : null,
  accessToken: sessionStorageData ? sessionStorageData.accessToken : null,
  id: sessionStorageData ? sessionStorageData.id : null,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...prevState,
        email: payload.email,
        userName: payload.userName,
        accessToken: payload.accessToken,
        id: payload.id,
        loading: false,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...prevState,
        email: null,
        accessToken: null,
        userName: null,
        loading: false,
        id: null,
        error: payload,
      };

    case actionTypes.LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        userName: null,
        email: null,
        id: null,
      };

    default:
      return prevState;
  }
};
