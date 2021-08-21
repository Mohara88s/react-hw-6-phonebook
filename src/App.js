import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import 'modern-normalize/modern-normalize.css';
import styles from './App.module.css';
import { connect } from 'react-redux';
import contactsActions from './redux/contacts/contacts-actions';

function App({ items, filter, onAddContact, onDeleteContact, onChangeFilter }) {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(items));
  }, [items]);

  const contactsFiltred = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
  );
  return (
    <div className={styles.container}>
      <h2>Phonebook</h2>
      <ContactForm contacts={items} onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={contactsFiltred}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    items: state.contacts.items,
    filter: state.contacts.filter,
  };
};
const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(contactsActions.addContact(contact)),
  onDeleteContact: contactId =>
    dispatch(contactsActions.deleteContact(contactId)),
  onChangeFilter: value => dispatch(contactsActions.changeFilter(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
