import React from 'react';

export const PersonComponent = ({ person, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{person.first}</td>
      <td>{person.last}</td>
      <td>{person.gender}</td>
      <td>{person.dob}</td>
      <td>{person.state}</td>
    </tr>
  );
};