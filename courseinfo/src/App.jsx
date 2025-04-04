const Header = ({course}) => {
  console.log(course)
  return 
      <h1>{course.name}</h1>
      
}

const Parts = ({ partName, exercises}) => {
  return (
      <p>{partName} {exercises} exercises</p>
    )

}
const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Parts key={index} partName={part.name} exercises={part.exercises} />
      ))}
      
    </div>
    )
}

const Total = ({parts}) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return ( 
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
    )

}

const App = () => {
 const course = {
  name: 'Half Stack application development',
  parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },    
 //const exercises1 = 10
  {
    name: 'Using props to pass data',
    exercises: 7
  },
 //const exercises2 = 7
  {
    name: 'State of a component',
    exercises: 14
    //const exercises3 = 14
  }
]
 }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      
    </div>
  )
}

export default App