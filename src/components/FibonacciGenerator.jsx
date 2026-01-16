import { useState } from 'react';
import '../styles/Card.css';

export default function FibonacciGenerator() {
  const [count, setCount] = useState('');
  const [series, setSeries] = useState(null);
  const [error, setError] = useState('');

  const generateFibonacci = () => {
    setError('');
    setSeries(null);

    const num = parseInt(count);

    if (count === '' || isNaN(num)) {
      setError('Please enter a valid number');
      return;
    }

    if (num < 0) {
      setError('Please enter a non-negative number');
      return;
    }

    if (num === 0) {
      setSeries([]);
      return;
    }

    const fib = [];
    let a = 0, b = 1;

    fib.push(a);
    if (num > 1) fib.push(b);

    for (let i = 2; i < num; i++) {
      const temp = a + b;
      fib.push(temp);
      a = b;
      b = temp;
    }

    setSeries(fib);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      generateFibonacci();
    }
  };

  return (
    <div className="card">
      <h2>📊 Fibonacci Series Generator</h2>
      <div className="form-group">
        <label htmlFor="fibonacci-input">Number of Terms:</label>
        <input
          id="fibonacci-input"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter number of terms"
          min="0"
        />
      </div>
      <button onClick={generateFibonacci}>Generate Series</button>
      <div className="info-text">Example: First 6 terms = 0, 1, 1, 2, 3, 5</div>
      {error && (
        <div className="result error">
          <div className="result-title">⚠️ Error:</div>
          <div className="result-content">{error}</div>
        </div>
      )}
      {series !== null && (
        <div className="result success">
          <div className="result-title">✓ Fibonacci Series ({series.length} terms):</div>
          {series.length > 0 ? (
            <div className="fibonacci-series">
              {series.map((num, index) => (
                <div key={index} className="fibonacci-item">
                  {num}
                </div>
              ))}
            </div>
          ) : (
            <div className="result-content">No terms to display</div>
          )}
        </div>
      )}
    </div>
  );
}
