import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  // Flag variable to control which component to display
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <header style={{
        backgroundColor: '#2c3e50',
        padding: '20px',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1>Cricket App - ES6 Features Demo</h1>
        <div style={{ marginTop: '15px' }}>
          <button
            onClick={() => setFlag(true)}
            style={{
              backgroundColor: flag ? '#27ae60' : '#95a5a6',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              margin: '0 10px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            List of Players (Flag = true)
          </button>
          <button
            onClick={() => setFlag(false)}
            style={{
              backgroundColor: !flag ? '#27ae60' : '#95a5a6',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              margin: '0 10px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Indian Players (Flag = false)
          </button>
        </div>
        <p style={{ marginTop: '10px', fontSize: '14px' }}>
          Current Flag Value: <strong>{flag ? 'true' : 'false'}</strong>
        </p>
      </header>

      <main>
        {/* Simple if else condition using flag variable */}
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </main>

      <footer style={{
        backgroundColor: '#34495e',
        color: 'white',
        textAlign: 'center',
        padding: '15px',
        marginTop: '20px'
      }}>
        <p>ES6 Features Demonstrated: map(), filter(), arrow functions, destructuring, spread operator</p>
      </footer>
    </div>
  );
}

export default App;
