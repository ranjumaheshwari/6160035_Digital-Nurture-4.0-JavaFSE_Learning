import React, { Component } from 'react';

class WelcomeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  // Function that takes "welcome" as an argument
  sayWelcome = (greeting) => {
    this.setState({
      message: `${greeting}! Thank you for using our React application!`
    });
    
    // Clear message after 4 seconds
    setTimeout(() => {
      this.setState({ message: '' });
    }, 4000);
  }

  // Event handler that calls sayWelcome with "welcome" as argument
  handleWelcomeClick = () => {
    this.sayWelcome("Welcome");
  }

  render() {
    return (
      <div className="counter-container">
        <button 
          className="btn btn-primary" 
          onClick={this.handleWelcomeClick}
        >
          Say Welcome
        </button>
        
        {this.state.message && (
          <div className="message">
            {this.state.message}
          </div>
        )}
        
        <div style={{ marginTop: '20px', color: '#333333' }}>
          <p><strong>Event Handler Explanation:</strong></p>
          <p>This button invokes a function that takes "welcome" as an argument.</p>
          <p>The function then displays a personalized welcome message.</p>
        </div>
      </div>
    );
  }
}

export default WelcomeButton;
