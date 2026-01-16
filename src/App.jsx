import './styles/App.css'
import FactorialCalculator from './components/FactorialCalculator'
import FibonacciGenerator from './components/FibonacciGenerator'
import PrimeChecker from './components/PrimeChecker'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>📐 Number Operations</h1>
          <p>Calculate Factorial, Generate Fibonacci Series, and Check Prime Numbers</p>
        </div>
        <div className="cards-container">
          <FactorialCalculator />
          <FibonacciGenerator />
          <PrimeChecker />
        </div>
      </div>
    </div>
  )
}

export default App
