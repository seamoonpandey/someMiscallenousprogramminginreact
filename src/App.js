import { useState } from 'react';
import './App.css';

function App() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // function showInput() {
  //   alert(username);
  //   alert(password);
  // }

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  function printValues(event) {
    event.preventDefault()
    var user = {
      name: name,
      username: username,
      age: age,
    }
    console.log(user);
  }

  return (
    <div className="App">
      {/* <h1>React Forms</h1>
      <form action=''>
        <input type="text" placeholder="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
        <br />
        <input type="text" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <br />
        <button onClick={showInput}>show input</button>

      </form> */}

      <h1>React Forms  Submit</h1>

      <form onSubmit={printValues}>
        <input type="text" placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} />
        <br />
        <input type="text" placeholder='username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
        <br />
        <input type="text" placeholder='age' value={age} onChange={(e) => { setAge(e.target.value) }} />
        <br />
        <input type="submit" value='submit' />
      </form>

    </div>
  );
}

export default App;
