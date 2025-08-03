import React from 'react';
import './App.css';

function App() {
  // JavaScript expressions in JSX - Creating office object
  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

  return (
    <div className="App">
      {/* JSX Element - Page Heading */}
      <h1>Office Space , at Affordable Range</h1>

      {/* Image attribute demonstration */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop"
        alt="Office Space"
        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
      />

      {/* Display office object details */}
      <h3>Name: {office.name}</h3>

      {/* Inline CSS - Red color for rent below 60000 */}
      <h3 style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
        Rent: Rs. {office.rent}
      </h3>

      <h3>Address: {office.address}</h3>
    </div>
  );
}

export default App;
