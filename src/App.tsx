import React from 'react';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import './App.css';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Edmond',
    second: 'Gakuba'
  }
  const nameList = [
    {
      first: 'Edmond',
      second: 'Gakuba'
    },
    {
      first: 'Mutesa',
      second: 'Cedrick'
    },
    {
      first: 'Bigwi',
      second: 'Valentin'
    }
  ]
  return (
    <div className="App">
      <Greet name="Edmond" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
