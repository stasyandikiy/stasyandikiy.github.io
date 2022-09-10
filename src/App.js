import logo from './logo.svg';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Cards } from './Components/Content/Cards/Cards';
import { useState } from 'react'

function App() {

  const [valueSearch, setValueSearch] = useState('');

  return (
    <div className="App">
        <Header setValueSearch={setValueSearch}/>
        <Cards valueSearch={valueSearch}/>
    </div>
  );
}

export default App;
