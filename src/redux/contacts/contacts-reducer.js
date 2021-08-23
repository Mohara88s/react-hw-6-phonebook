import actions from './/contacts-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initialItemsState =
  JSON.parse(window.localStorage.getItem('contacts')) ?? [];

const items = createReducer(initialItemsState, {
  [actions.addContact]: (state, { payload }) => {
    {
      const isAvailable = state.some(
        contactItem =>
          contactItem.name.toLowerCase() === payload.name.toLowerCase(),
      );
      if (isAvailable) {
        alert(`${payload.name} is already in contacts.`);
        return state;
      }
    }
    window.localStorage.setItem(
      'contacts',
      JSON.stringify([...state, payload]),
    );
    return [...state, payload];
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
