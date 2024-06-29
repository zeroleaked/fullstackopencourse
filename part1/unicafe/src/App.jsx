import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick} > {text} </button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;

  if (total !== 0)
    return (
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {(good-bad)/total}</p>
        <p>positive {good/total} %</p>
      </div>
    )
  else
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button  onClick={()=>setGood(good+1)} text="good"/ >
      <Button  onClick={()=>setNeutral(neutral+1)} text="neutral"/ >
      <Button  onClick={()=>setBad(bad+1)} text="bad"/ >

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App