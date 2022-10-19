import React from 'react';
import './App.css';
import Items from './components/Items/Items';
import TextInput from './components/TextInput/TextInput';
import { useListHook } from './hooks/useList';

function App() {

  const {list, modifyItem, addItem} = useListHook()

  return (
    <div className="App">
      <TextInput addItem={addItem} />
      <Items list={list} modifyItem={modifyItem} />
    </div>
  );
}

export default App;
