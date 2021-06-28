import React from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { setCarsFilter, setPersonsFilter, setCars, setPersons } from '../store/actions';
import { CarComponent } from './Cars';
import { PersonComponent } from './Persons';

export const App = (props) => {
  
  const fetchCars = (_) => {
    let query = "{ cars { make model year color }}";
    if (props.carsState.filter.size > 0) {
      let temp = "";
      for (const [key, value] of props.carsState.filter) {
        if (value !== "") temp = temp.concat(key,":\"",value,"\", ");
      }
      query = "{ cars(" + temp +  ") { make model year color }}";
    }
    console.log(query)
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
    if (props.personsState.filter.size > 0) {
      let temp = "";
      for (const [key, value] of props.personsState.filter) {
        if (value !== "") temp = temp.concat(key,":\"",value,"\", ");
      }
      query = "{ persons(" + temp +  ") { first last gender dob state }}";
    }
    
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
      <div className="row">
        <div className="col">
          <h1>Persons</h1>
          <button onClick={fetchPersons}>Load Persons</button>
          <div className="filter" >
            <p>first</p>
            <input type='text' onChange={(e) => props.setPersonsFilter('first', e.target.value)}/>
          </div>
          <div className="filter" >
            <p>last</p>
            <input type='text' onChange={(e) => props.setPersonsFilter('last', e.target.value)}/>
          </div>
          <div className="filter" >
            <p>gender</p>
            <input type='text' onChange={(e) => props.setPersonsFilter('gender', e.target.value)}/>
          </div>
          <div className="filter" >
            <p>dob</p>
            <input type='text' onChange={(e) => props.setPersonsFilter('dob', e.target.value)}/>
          </div>
          <div className="filter" >
            <p>state</p>
            <input type='text' onChange={(e) => props.setPersonsFilter('state', e.target.value)}/>
          </div>
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
          <button onClick={fetchCars}>Load Cars</button>
          <div className="filter">
            <p>make</p>
            <input type='text' onChange={(e) => props.setCarsFilter('make', e.target.value)}/>
          </div>
          <div className="filter" >
            <p>model</p>
            <input type='text' onChange={(e) => props.setCarsFilter('model', e.target.value)}/>
          </div>
          <div className="filter" >
            <p>year</p>
            <input type='text' onChange={(e) => props.setCarsFilter('year', e.target.value)}/>
          </div>
          <div className="filter" >
            <p>color</p>
            <input type='text' onChange={(e) => props.setCarsFilter('color', e.target.value)}/>
          </div>
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
  setCarsFilter,
  setPersonsFilter,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
