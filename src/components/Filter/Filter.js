import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label className={styles.Filter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={onChangeFilter}
        value={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    filter: state.contacts.filter,
  };
};
const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(contactsActions.changeFilter(event.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
