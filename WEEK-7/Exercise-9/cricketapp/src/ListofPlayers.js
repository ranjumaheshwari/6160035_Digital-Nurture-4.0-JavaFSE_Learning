import React from 'react';

const ListofPlayers = () => {
  // Declare an array with 11 players and store details of their names and scores using ES6
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 92 },
    { name: "KL Rahul", score: 65 },
    { name: "Shikhar Dhawan", score: 78 },
    { name: "Rishabh Pant", score: 55 },
    { name: "Hardik Pandya", score: 72 },
    { name: "Ravindra Jadeja", score: 68 },
    { name: "Bhuvneshwar Kumar", score: 45 },
    { name: "Jasprit Bumrah", score: 38 },
    { name: "Mohammed Shami", score: 42 },
    { name: "Yuzvendra Chahal", score: 35 }
  ];

  // Filter the players with scores below 70 using arrow functions of ES6
  const lowScorePlayers = players.filter(player => player.score < 70);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#2c3e50', textAlign: 'center' }}>List of Players</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#27ae60' }}>All Players:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
          {/* Using map() method of ES6 to display all players */}
          {players.map((player, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #bdc3c7', 
                padding: '10px', 
                borderRadius: '5px',
                backgroundColor: '#ecf0f1'
              }}
            >
              <strong>{player.name}</strong> - Score: {player.score}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ color: '#e74c3c' }}>Players with Scores Below 70:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
          {/* Using arrow functions to filter and display players with scores below 70 */}
          {lowScorePlayers.map((player, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #e74c3c', 
                padding: '10px', 
                borderRadius: '5px',
                backgroundColor: '#fadbd8'
              }}
            >
              <strong>{player.name}</strong> - Score: {player.score}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListofPlayers;
