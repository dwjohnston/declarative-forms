import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Example } from './components/Example';
import { DeclarativeForm } from './components/DeclarativeForm';



const DATA1 = {
  foo: "foo",
  bar: 999,
  useFoo: true,
}


const DATA2 = {
  foo: "foo",
  bar: 999,
  useFoo: false,
}


const DATA3 = {
  foo: "foo",
  bar: 999,
  useFoo: false,
  a: () => { },
  b: {
    heloo: "worldj"
  }
}

function App() {

  const handleFormSubmit = (data: unknown) => {
    window.alert(JSON.stringify(data, null, 2));
  }

  return (
    <div className="App">
      <Example>
        <DeclarativeForm data={DATA1} onFormSubmit={handleFormSubmit} />
        <DeclarativeForm data={DATA2} onFormSubmit={handleFormSubmit} />
        <DeclarativeForm data={DATA3} onFormSubmit={handleFormSubmit} />

      </Example>
    </div>
  );
}

export default App;
