import { useState } from 'react';
import '../styles/Card.css';

export default function FactorialCalculator() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateFactorial = () => {
    setError('');
    setResult(null);

    const num = parseInt(number);

    if (number === '' || isNaN(num)) {
      setError('Please enter a valid number');
      return;
    }

    if (num < 0) {
      setError('Please enter a number >= 0');
      return;
    }

    if (!Number.isInteger(num)) {
      setError('Please enter an integer');
      return;
    }

    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }

    setResult(factorial);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateFactorial();
    }
  };

  return (
    <div className="card">
      <h2>🔢 Factorial Calculator</h2>
      <div className="form-group">
        <label htmlFor="factorial-input">Enter a Number:</label>
        <input
          id="factorial-input"
          type="number"
          value={number}
          onChange={(e) => {
            const val = e.target.value;
            if (val === '' || parseInt(val) >= 0) {
              setNumber(val);
            }
          }}
          onKeyPress={handleKeyPress}
          placeholder="Enter a number >= 0"
          min="0"
        />
      </div>
      <button onClick={calculateFactorial}>Calculate Factorial</button>
      <div className="info-text">Example: Factorial of 5 = 5! = 5 × 4 × 3 × 2 × 1 = 120</div>
      {error && (
        <div className="result error">
          <div className="result-title">⚠️ Error:</div>
          <div className="result-content">{error}</div>
        </div>
      )}
      {result !== null && (
        <div className="result success">
          <div className="result-title">✓ Result:</div>
          <div className="result-content">
            {number}! = <strong>{result.toLocaleString()}</strong>
          </div>
        </div>
      )}
    </div>
  );
}
