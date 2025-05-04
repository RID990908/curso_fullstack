const App = () => {
  const course = "Half Stack application development"

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={[parts.at(0), parts.at(1), parts.at(2)]} />
      <Total total={parts.at(0).exercises + parts.at(1).exercises + parts.at(2).exercises} />
    </div>
  )
}

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return <p>{name}: {exercises}</p>
}

const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>
}

export default App