import { useState } from 'react'

const Statistics = (props) => {
  const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td> {value}</td>
      </tr>
    )
  }
  if (props.total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="total" value ={props.total} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive + '%'} />
      </tbody>
      </table>
    </div>
  )  
}

  

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setAverage((good + 1) / (total + 1))
    setPositive((good + 1) / (total + 1)*100)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setAverage((good) / (total + 1))
    setPositive((good) / (total + 1)*100)
  }
  const badClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage((good - 1) / (total + 1))
    setPositive((good) / (total + 1)*100)
  }
  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  )
  

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button onClick={goodClick} text="good" />
      
      <Button onClick={neutralClick} text="neutral" />
      
      <Button onClick={badClick} text="bad" />
      
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
      
    </div>
  )
}

export default App