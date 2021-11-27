import firebase from "firebase/app";

import auth from "../firebase";

import * as actionTypes from "../actionTypes";

export const login = () => async (disptach) => {
  try {
    disptach({
      type: actionTypes.LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();

    const signInResponse = await auth.signInWithPopup(provider);

    console.log(signInResponse);

    const profile = {
      email: signInResponse.additionalUserInfo.profile.email,
      userName: signInResponse.additionalUserInfo.profile.name,
      accessToken: signInResponse.credential.accessToken,
      id: signInResponse.additionalUserInfo.profile.id,
    };

    console.log(profile.id);

    sessionStorage.setItem("profile", JSON.stringify(profile));

    disptach({
      type: actionTypes.LOGIN_SUCCESS,
      payload: profile,
    });
  } catch (error) {}
};

export const logout = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({
      type: actionTypes.LOG_OUT,
    });

    sessionStorage.removeItem("profile");
  } catch (error) {}
};
