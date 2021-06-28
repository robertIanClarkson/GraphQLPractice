import React from 'react';

import { connect } from 'react-redux';

import { setCarFilter, setPersonFilter, setCars, setPersons } from '../store/actions';

import { CarComponent } from './Cars';
import { PersonComponent } from './Persons';

import shortid from 'shortid';

// App.js
export const App = (props) => {
  console.log(props)
  
  const fetchCars = (_) => {
    let query = "{ cars { make model year color }}";
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: query})
    })
    .then(r => r.json())
    .then(res => props.setCars(res.data.cars));
  }

  const fetchPersons = (_) => {
    let query = "{ persons { first last gender dob state }}";
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: query})
    })
    .then(r => r.json())
    .then(res => props.setPersons(res.data.persons));
  }
  
  return (
    <div>
      <button onClick={fetchCars}>Get Cars</button>
      <button onClick={fetchPersons}>Get Persons</button>
      <div className="row">
        <div className="col">
          <h1>Persons</h1>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {props.personsState.persons.map((person, index) => (<PersonComponent 
                                                                      key={shortid.generate()}
                                                                      person={person} 
                                                                      index={index} />))}
              </tbody>
          </table>
        </div>
        <div className="col">
          <h1>Cars</h1>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {props.carsState.cars.map((car, index) => (<CarComponent 
                                                            key={shortid.generate()} 
                                                            car={car} 
                                                            index={index} />))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// AppContainer.js
const mapStateToProps = state => ({
  carsState: state.cars,
  personsState: state.persons,
});

const mapDispatchToProps = {
  setCars,
  setPersons,
  setCarFilter,
  setPersonFilter,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
