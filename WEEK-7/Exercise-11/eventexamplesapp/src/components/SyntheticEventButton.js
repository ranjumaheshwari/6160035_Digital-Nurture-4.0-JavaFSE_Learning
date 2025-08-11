import React, { Component } from 'react';

class SyntheticEventButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      eventDetails: null
    };
  }

  // Synthetic event handler "OnPress" that displays "I was clicked"
  onPress = (syntheticEvent) => {
    // Prevent default behavior (if any)
    syntheticEvent.preventDefault();
    
    // Display the message
    this.setState({
      message: 'I was clicked',
      eventDetails: {
        type: syntheticEvent.type,
        target: syntheticEvent.target.tagName,
        timeStamp: syntheticEvent.timeStamp,
        bubbles: syntheticEvent.bubbles,
        cancelable: syntheticEvent.cancelable,
        currentTarget: syntheticEvent.currentTarget.tagName,
        clientX: syntheticEvent.clientX,
        clientY: syntheticEvent.clientY
      }
    });
    
    // Clear message after 5 seconds
    setTimeout(() => {
      this.setState({ 
        message: '',
        eventDetails: null 
      });
    }, 5000);
  }

  render() {
    return (
      <div className="counter-container">
        <button 
          className="btn btn-primary" 
          onClick={this.onPress}
        >
          Click Me (Synthetic Event)
        </button>
        
        {this.state.message && (
          <div className="message">
            {this.state.message}
          </div>
        )}
        
        {this.state.eventDetails && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '5px',
            color: '#333333',
            textAlign: 'left'
          }}>
            <h4 style={{ color: '#007acc' }}>Synthetic Event Details:</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><strong>Event Type:</strong> {this.state.eventDetails.type}</li>
              <li><strong>Target Element:</strong> {this.state.eventDetails.target}</li>
              <li><strong>Current Target:</strong> {this.state.eventDetails.currentTarget}</li>
              <li><strong>Timestamp:</strong> {Math.round(this.state.eventDetails.timeStamp)}</li>
              <li><strong>Bubbles:</strong> {this.state.eventDetails.bubbles.toString()}</li>
              <li><strong>Cancelable:</strong> {this.state.eventDetails.cancelable.toString()}</li>
              <li><strong>Mouse Position:</strong> ({this.state.eventDetails.clientX}, {this.state.eventDetails.clientY})</li>
            </ul>
          </div>
        )}

        <div style={{ marginTop: '20px', color: '#333333' }}>
          <p><strong>Synthetic Event Explanation:</strong></p>
          <p>React's SyntheticEvent is a wrapper around native events that provides:</p>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>Cross-browser compatibility</li>
            <li>Consistent API across different browsers</li>
            <li>Event pooling for performance</li>
            <li>Access to native event via nativeEvent property</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SyntheticEventButton;
