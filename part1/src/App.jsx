import { useState } from 'react'

const App = () => {
  const course = {
    name: 'give feedback',
    statistics: 'statistics'
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setCounter] = useState(0)
  const increaseCounter = () => setCounter(counter + 1)

  const increaseGood = () => {
    setGood(good + 1)
    increaseCounter(counter + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    increaseCounter(counter + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
    increaseCounter(counter + 1)
  }

  return (
    <div>
      <Header course={course.name} />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Header course={course.statistics} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Display = ({ text, counter }) => {
  return (
    <div>
      {text}: {counter}
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={(good - bad) / total} />
      <StatisticLine text="positive" value={(good / total) * 100 + ' %'} />
    </div>
  )
}

export default App