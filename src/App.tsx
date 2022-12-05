import React from 'react';
import { Greet } from './components/Greet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name="Edmond" messageCount={20} />
    </div>
  );
}

export default App;
