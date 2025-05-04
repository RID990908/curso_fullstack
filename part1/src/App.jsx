const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={[course.parts.at(0), course.parts.at(1), course.parts.at(2)]} />
      <Total total={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
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