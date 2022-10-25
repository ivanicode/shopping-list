import './App.css';
import Items from './components/Items/Items';
import TextInput from './components/TextInput/TextInput';
import { useListHook } from './hooks/useList';

function App() {

  const {list, deleteItem, addItem} = useListHook()

  return (
    <div className="App">
      <TextInput addItem={addItem} />
      <Items list={list} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
