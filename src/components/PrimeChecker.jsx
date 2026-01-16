import { useState } from 'react';
import '../styles/Card.css';

export default function PrimeChecker() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  };

  const checkPrime = () => {
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

    const prime = isPrime(num);
    setResult(prime);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkPrime();
    }
  };

  return (
    <div className="card">
      <h2>✨ Prime Number Checker</h2>
      <div className="form-group">
        <label htmlFor="prime-input">Enter a Number:</label>
        <input
          id="prime-input"
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
      <button onClick={checkPrime}>Check Prime</button>
      <div className="info-text">A prime number is divisible only by 1 and itself</div>
      {error && (
        <div className="result error">
          <div className="result-title">⚠️ Error:</div>
          <div className="result-content">{error}</div>
        </div>
      )}
      {result !== null && (
        <div
          className={`result ${result ? 'success' : ''}`}
          style={!result ? { background: '#fadbd8', borderLeftColor: '#e74c3c' } : {}}
        >
          <div className={`result-title`} style={!result ? { color: '#e74c3c' } : {}}>
            {result ? '✓ Prime Number' : '✗ Not Prime'}
          </div>
          <div className="result-content">
            <strong>{number}</strong> is {result ? 'a prime number' : 'not a prime number'}
          </div>
        </div>
      )}
    </div>
  );
}
