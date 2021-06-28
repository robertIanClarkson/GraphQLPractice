import React from 'react';

export const CarComponent = ({ car, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
    </tr>
  );
};