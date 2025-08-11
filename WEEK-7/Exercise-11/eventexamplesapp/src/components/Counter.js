import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  // Method to increment the counter
  incrementValue = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  // Method to say hello with a static message
  sayHello = () => {
    this.setState({
      message: 'Hello! Welcome to React Event Handling!'
    });
    
    // Clear message after 3 seconds
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  // Method to handle multiple actions (increment + say hello)
  handleMultipleActions = () => {
    this.incrementValue();
    this.sayHello();
  }

  // Method to decrement the counter
  decrementValue = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter-display">
          Count: {this.state.count}
        </div>
        
        {this.state.message && (
          <div className="message">
            {this.state.message}
          </div>
        )}
        
        <div className="button-group">
          <button 
            className="btn btn-primary" 
            onClick={this.handleMultipleActions}
          >
            Increment (Multiple Actions)
          </button>
          
          <button 
            className="btn btn-secondary" 
            onClick={this.decrementValue}
          >
            Decrement
          </button>
        </div>
        
        <div className="button-group">
          <button 
            className="btn btn-success" 
            onClick={this.incrementValue}
          >
            Simple Increment
          </button>
          
          <button 
            className="btn btn-warning" 
            onClick={this.sayHello}
          >
            Say Hello
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
