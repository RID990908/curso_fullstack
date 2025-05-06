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
      <Display text="all" counter={counter} />
      <Display text="average" counter={(good - bad) / counter} />
      <Display text="positive" counter={(good / counter) * 100 + ' %'} />
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
const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

export default App