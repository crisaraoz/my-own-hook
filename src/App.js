import './App.css';
import useRandomJoke from './useRandomJoke';
import { useRef, useState } from 'react';

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Cris");
  const [lastName, setLastName] = useState("Araoz");

  const joke = useRandomJoke(firstName, lastName);
  
  const generateJoke = (e) => {
      e.preventDefault(); 
      setFirstName(firstNameRef.current.value);
      setLastName(lastNameRef.current.value);
  };


  return (
    <div className="App">
      <center>
        <h1>The Joke Generator</h1>
        <h2>Put a name and last name!</h2>
      <h2>{joke} </h2>

      <form>
        <input 
          placeholder='first name'
          ref={firstNameRef}
        />
        <input 
          placeholder='last name'
          ref={lastNameRef}
        />
        <button onClick={generateJoke}>Generate Joke</button>
      </form>

      
      </center>
    </div>
  );
}

export default App;
