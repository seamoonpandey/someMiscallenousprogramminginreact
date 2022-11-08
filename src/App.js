import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function showInput() {
    alert(username);
    alert(password);
  }

  return (
    <div className="App">
      <h1>React Forms</h1>
      <form action=''>
        <input type="text" placeholder="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
        <br />
        <input type="text" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <br />
        <button onClick={showInput}>show input</button>

      </form>
    </div>
  );
}

export default App;
