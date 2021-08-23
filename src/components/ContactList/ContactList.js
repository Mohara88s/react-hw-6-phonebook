import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';

const ContactList = ({ contacts, filter }) => {
  return (
    <ul className={styles.ContactList}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()),
        )
        .map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

export default connect(mapStateToProps)(ContactList);
