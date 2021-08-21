import actionTypes from './contacts-types';
const addContact = contact => ({
  type: actionTypes.ADD,
  payload: contact,
});

const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;
