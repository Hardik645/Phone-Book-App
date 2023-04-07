import React from 'react'
const SearchResult = ({contacts}) => {
contacts.sort((a, b) => a.name.localeCompare(b.name));
return (
    <div className='contact-container'>
    {contacts.map((item) => {
        return (
        <article className='list-item' key={item.id}>
            <p className='title'>{item.name}</p>
            <p className='sub-title'>{item.mobile}</p>
        </article>
        );
    })}
    </div>
)
}

export default SearchResult