import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <p>
        {name} {number}
      </p>
      <button
        className={styles.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId =>
    dispatch(contactsActions.deleteContact(contactId)),
});

export default connect(null, mapDispatchToProps)(Contact);
