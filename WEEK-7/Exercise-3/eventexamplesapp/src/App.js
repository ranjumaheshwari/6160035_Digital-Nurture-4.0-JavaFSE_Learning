import React from 'react';
import './App.css';
import Counter from './components/Counter';
import WelcomeButton from './components/WelcomeButton';
import SyntheticEventButton from './components/SyntheticEventButton';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Event Handling Examples</h1>

        {/* Counter Component with Increment/Decrement buttons */}
        <div className="component-section">
          <h2>1. Counter with Multiple Event Handlers</h2>
          <Counter />
        </div>

        {/* Welcome Button Component */}
        <div className="component-section">
          <h2>2. Button with Function Arguments</h2>
          <WelcomeButton />
        </div>

        {/* Synthetic Event Button Component */}
        <div className="component-section">
          <h2>3. Synthetic Event Example</h2>
          <SyntheticEventButton />
        </div>

        {/* Currency Converter Component */}
        <div className="component-section">
          <h2>4. Currency Converter (INR to EUR)</h2>
          <CurrencyConverter />
        </div>
      </header>
    </div>
  );
}

export default App;
