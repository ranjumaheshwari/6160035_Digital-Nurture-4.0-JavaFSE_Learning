import React from 'react';

const IndianPlayers = () => {
  // Array of players for destructuring demonstration
  const teamPlayers = [
    "Virat Kohli", "Rohit Sharma", "KL Rahul", "Shikhar Dhawan", 
    "Rishabh Pant", "Hardik Pandya", "Ravindra Jadeja", "Bhuvneshwar Kumar",
    "Jasprit Bumrah", "Mohammed Shami", "Yuzvendra Chahal"
  ];

  // Using Destructuring features of ES6 to display Odd Team Player and Even Team players
  const [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh] = teamPlayers;
  
  // Odd positioned players (1st, 3rd, 5th, 7th, 9th, 11th)
  const oddTeamPlayers = [first, third, fifth, seventh, ninth, eleventh];
  
  // Even positioned players (2nd, 4th, 6th, 8th, 10th)
  const evenTeamPlayers = [second, fourth, sixth, eighth, tenth];

  // Declare two arrays T20players and RanjiTrophy players
  const T20players = [
    "Virat Kohli", "Rohit Sharma", "KL Rahul", "Hardik Pandya", 
    "Rishabh Pant", "Ravindra Jadeja", "Bhuvneshwar Kumar"
  ];

  const RanjiTrophyPlayers = [
    "Prithvi Shaw", "Ajinkya Rahane", "Cheteshwar Pujara", "Hanuma Vihari",
    "Wriddhiman Saha", "Axar Patel", "Ishant Sharma"
  ];

  // Merge the two arrays using the Merge feature (Spread operator) of ES6
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#2c3e50', textAlign: 'center' }}>Indian Players</h2>
      
      {/* Display Odd Team Players using Destructuring */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#e67e22' }}>Odd Team Players (Using Destructuring):</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {oddTeamPlayers.map((player, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #e67e22', 
                padding: '10px', 
                borderRadius: '5px',
                backgroundColor: '#fdeaa7'
              }}
            >
              <strong>Position {(index * 2) + 1}:</strong> {player}
            </div>
          ))}
        </div>
      </div>

      {/* Display Even Team Players using Destructuring */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#9b59b6' }}>Even Team Players (Using Destructuring):</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {evenTeamPlayers.map((player, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #9b59b6', 
                padding: '10px', 
                borderRadius: '5px',
                backgroundColor: '#e8daef'
              }}
            >
              <strong>Position {(index + 1) * 2}:</strong> {player}
            </div>
          ))}
        </div>
      </div>

      {/* Display T20 Players */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#3498db' }}>T20 Players:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {T20players.map((player, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #3498db', 
                padding: '10px', 
                borderRadius: '5px',
                backgroundColor: '#d6eaf8'
              }}
            >
              {player}
            </div>
          ))}
        </div>
      </div>

      {/* Display Ranji Trophy Players */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#16a085' }}>Ranji Trophy Players:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {RanjiTrophyPlayers.map((player, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #16a085', 
                padding: '10px', 
                borderRadius: '5px',
                backgroundColor: '#d5f4e6'
              }}
            >
              {player}
            </div>
          ))}
        </div>
      </div>

      {/* Display Merged Players using Spread Operator */}
      <div>
        <h3 style={{ color: '#c0392b' }}>Merged Players (T20 + Ranji Trophy using ES6 Spread Operator):</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {mergedPlayers.map((player, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #c0392b', 
                padding: '10px', 
                borderRadius: '5px',
                backgroundColor: index < T20players.length ? '#fadbd8' : '#d5f4e6',
                fontWeight: index < T20players.length ? 'bold' : 'normal'
              }}
            >
              {player} {index < T20players.length ? '(T20)' : '(Ranji)'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndianPlayers;
