import React from 'react';
import Person from './Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
const Cohort = ({staff}) => {
  const peoples = staff.map(teach => {
    return <Person 
      photo={teach.photo}
      name={teach.name}
      quote={teach.quote} 
      superlative={teach.superlative}
      />
  })
  return ( 
    <>
    <h2>Staff</h2>
    <section className='person'>
      {peoples}
    </section>
    </>
  )
}
export default Cohort;
