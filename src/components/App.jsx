import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { fetchContacts, addContact, deleteContact } from 'redux/operation';
import {
  selectFilter,
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

export const App = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        backgroundColor: 'rgb(248, 246, 247)',
        minHeight: '100vh',
        padding: '1rem',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={e => dispatch(setFilter(e.target.value))} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContactList contacts={visibleContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};
