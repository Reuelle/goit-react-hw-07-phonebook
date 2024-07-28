import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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
       dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
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
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
