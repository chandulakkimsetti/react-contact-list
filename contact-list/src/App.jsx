// src/App.jsx
import React, { useState, useEffect } from 'react';
import { initialContacts } from './data';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import './App.css'; // We cleaned this, now we add new styles

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(initialContacts);

  // Effect to filter contacts whenever searchTerm or contacts list changes
  useEffect(() => {
    const results = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(results);
  }, [searchTerm, contacts]);

  return (
    <div className="App">
      <h1>My Contact List</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;