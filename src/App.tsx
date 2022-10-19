import React from 'react';
import './App.css';
import Items from './components/Items/Items';
import TextInput from './components/TextInput/TextInput';

function App() {
  return (
    <div className="App">
      <TextInput />
      <Items />
    </div>
  );
}

export default App;
