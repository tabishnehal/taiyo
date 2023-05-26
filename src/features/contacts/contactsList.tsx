// react
import React from 'react';

// react-redux
import { useSelector } from 'react-redux';

// react-router-dom
import { Link } from 'react-router-dom';

// app file
import { selectAllContacts } from './contactsSlice';

// contactslist component
const ContactsList = () => {

  // access redux store to get all contacts
  const contacts = useSelector(selectAllContacts);

  return (
    <div className='flex flex-col justify-center'>
      <h2 className='heading'>Contacts</h2>
      <Link className='btn btn-blue mx-auto my-1' to={`createContactForm/`}>Create Contact</Link>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {
            contacts.length ? (
              contacts.map((contact: any) => (
                <div className="contact-card text-center" key={contact.id}>
                  <p className='pb-2'>{contact.firstName}</p>
                  <p className='pb-3'>{contact.lastName}</p>
                  <Link className='btn btn-gray' to={`view/${contact.id}`}>View</Link><br></br>
                </div>
              ))
            ) : (
              <div className="card xs:col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 xl:col-span-6 2xl:col-span-7">No contact found! Please add contact from Create Contact button</div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ContactsList;