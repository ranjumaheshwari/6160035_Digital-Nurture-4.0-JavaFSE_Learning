import React, { Component } from 'react';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      convertedAmount: '',
      currency: 'EUR'
    };
    
    // Exchange rate: 1 INR = 0.012 EUR (approximate)
    this.exchangeRate = 0.012;
  }

  // Handle input change for amount
  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value,
      convertedAmount: '' // Clear previous conversion
    });
  }

  // Handle currency selection change
  handleCurrencyChange = (event) => {
    this.setState({
      currency: event.target.value,
      convertedAmount: '' // Clear previous conversion
    });
  }

  // Handle form submission and currency conversion
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting traditionally
    
    const { amount, currency } = this.state;
    
    // Validate input
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert('Please enter a valid positive number for the amount.');
      return;
    }
    
    const numericAmount = parseFloat(amount);
    let converted = 0;
    
    // Convert based on selected currency
    if (currency === 'EUR') {
      // INR to EUR
      converted = numericAmount * this.exchangeRate;
    } else if (currency === 'USD') {
      // INR to USD (1 INR = 0.014 USD approximately)
      converted = numericAmount * 0.014;
    } else if (currency === 'GBP') {
      // INR to GBP (1 INR = 0.010 GBP approximately)
      converted = numericAmount * 0.010;
    }
    
    this.setState({
      convertedAmount: converted.toFixed(2)
    });
  }

  // Clear form
  handleClear = () => {
    this.setState({
      amount: '',
      convertedAmount: '',
      currency: 'EUR'
    });
  }

  render() {
    return (
      <div className="currency-converter">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Amount (INR):</label>
            <input
              type="number"
              id="amount"
              value={this.state.amount}
              onChange={this.handleAmountChange}
              placeholder="Enter amount in Indian Rupees"
              step="0.01"
              min="0"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="currency">Convert to:</label>
            <select
              id="currency"
              value={this.state.currency}
              onChange={this.handleCurrencyChange}
              style={{
                padding: '8px 12px',
                fontSize: '16px',
                border: '2px solid #007acc',
                borderRadius: '5px',
                backgroundColor: '#ffffff',
                color: '#333333',
                width: '200px'
              }}
            >
              <option value="EUR">Euro (EUR)</option>
              <option value="USD">US Dollar (USD)</option>
              <option value="GBP">British Pound (GBP)</option>
            </select>
          </div>
          
          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              Convert
            </button>
            <button type="button" className="btn btn-secondary" onClick={this.handleClear}>
              Clear
            </button>
          </div>
        </form>
        
        {this.state.convertedAmount && (
          <div className="result">
            ₹{this.state.amount} INR = {this.state.currency === 'EUR' ? '€' : this.state.currency === 'USD' ? '$' : '£'}{this.state.convertedAmount} {this.state.currency}
          </div>
        )}
        
        <div style={{ marginTop: '20px', color: '#333333' }}>
          <p><strong>Event Handling Features:</strong></p>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li><strong>handleSubmit:</strong> Handles form submission and prevents default behavior</li>
            <li><strong>handleAmountChange:</strong> Handles input field changes</li>
            <li><strong>handleCurrencyChange:</strong> Handles dropdown selection changes</li>
            <li><strong>handleClear:</strong> Handles button click to reset form</li>
          </ul>
          <p><em>Exchange rates are approximate and for demonstration purposes only.</em></p>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
