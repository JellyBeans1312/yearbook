import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE

const Person = ({photo, name, quote, superlative}) => {
  return (
    <section className='card'>
      <img src={photo} alt={name}></img>
      <h3>{name}</h3>
      <p>{quote}</p>
      <p>{superlative}</p>
    </section>
  )
}

export default Person;
