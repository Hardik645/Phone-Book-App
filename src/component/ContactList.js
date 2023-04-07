import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const ContactList = ({contacts,handleDelete,handleEdit}) => {
  contacts.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className='contact-container'>
      {contacts.map((item) => {
        return (
          <article className='list-item' key={item.id}>
            <p className='title'>{item.name}</p>
            <p className='sub-title'>{item.mobile}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={()=>{handleEdit(item)}}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={()=>{handleDelete(item.id)}}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  )
}

export default ContactList