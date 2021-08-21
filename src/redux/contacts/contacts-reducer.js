import actionTypes from './contacts-types';
import { combineReducers } from 'redux';

const initialItemsState =
  JSON.parse(window.localStorage.getItem('contacts')) || '';
const items = (state = initialItemsState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      {
        const isAvailable = state.some(
          contactItem =>
            contactItem.name.toLowerCase() === payload.name.toLowerCase(),
        );
        if (isAvailable) {
          return alert(`${payload.name} is already in contacts.`);
        }
      }
      return [...state, payload];
    case actionTypes.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
