import axios from "axios";

import * as actionTypes from "../actionTypes";

export const getContactsList = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.REQUEST_CONTACTS,
    });

    const response = await axios.get(
      `https://tauqeer-contacts-default-rtdb.firebaseio.com/contacts/${id}.json`
    );

    if (!response.data) {
      dispatch({
        type: actionTypes.DIDNOT_GET_CONTACTS,
        payload: [],
      });
    }

    console.log(response);

    const keys = Object.keys(response.data);

    const data = keys.map((item) => ({
      ...response.data[item],
      id: item,
    }));

    dispatch({
      type: actionTypes.GOT_CONTACTS,
      payload: data,
    });
  } catch (error) {}
};

export const postContact = (id, values) => async (dispatch) => {
  try {
    await axios.post(
      `https://tauqeer-contacts-default-rtdb.firebaseio.com/contacts/${id}.json`,
      values
    );

    const response = await axios.get(
      `https://tauqeer-contacts-default-rtdb.firebaseio.com/contacts/${id}.json`
    );

    const keys = Object.keys(response.data);
    const data = keys.map((key) => ({ ...response.data[key], id: key }));

    dispatch({
      type: actionTypes.POST_CONTACTS,
      payload: data,
    });
  } catch (error) {}
};

export const deleteContact = (id, contactId) => async (dispatch) => {
  try {
    await axios.delete(
      `https://tauqeer-contacts-default-rtdb.firebaseio.com/contacts/${id}/${contactId}.json`
    );

    dispatch({
      type: actionTypes.DELETE_CONTACTS,
    });
  } catch (error) {}
};
