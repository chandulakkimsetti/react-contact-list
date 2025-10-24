import React from 'react';
import ContactCard from './ContactCard';
import './ContactList.css'; // We'll create this CSS file

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;