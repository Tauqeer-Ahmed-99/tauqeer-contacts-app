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

    if (response.data) {
      const keys = Object.keys(response.data);

      const data = keys.map((item) => ({
        ...response.data[item],
        id: item,
      }));

      dispatch({
        type: actionTypes.GOT_CONTACTS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.DIDNOT_GET_CONTACTS,
      payload: error,
    });
  }
};

export const postContact = (id, values) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.POST_CONTACTS_REQUEST,
    });

    await axios.post(
      `https://tauqeer-contacts-default-rtdb.firebaseio.com/contacts/${id}.json`,
      values
    );
    dispatch({
      type: actionTypes.POST_CONTACTS_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.POST_CONTACTS_FAIL,
    });
  }
};

export const editContact =
  (userId, contactId, editedDetails) => async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.EDIT_CONTACT_REQUEST,
      });

      await axios.put(
        `https://tauqeer-contacts-default-rtdb.firebaseio.com/contacts/${userId}/${contactId}.json`,
        editedDetails
      );

      dispatch({
        type: actionTypes.EDIT_CONTACT_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: actionTypes.EDIT_CONTACT_FAIL, payload: error });
    }
  };

export const deleteContact = (id, contactId) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.DELETE_CONTACTS_REQUEST,
    });

    await axios.delete(
      `https://tauqeer-contacts-default-rtdb.firebaseio.com/contacts/${id}/${contactId}.json`
    );

    dispatch({
      type: actionTypes.DELETE_CONTACTS_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_CONTACTS_FAIL,
      payload: error,
    });
  }
};
