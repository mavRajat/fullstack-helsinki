import { useState } from 'react'



const Button = ({ task, name }) => {
  return (
    <button onClick={task}>
      {name}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])

  const nextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const vote = () => {
    console.log('working')
    const copy = points.slice()
    console.log(copy) 
    copy[selected] = copy[selected] + 1;
    console.log(copy)
    setPoints(copy)
  }

  const mostVotes = () => 
  {
    console.log('working')
    let most = 0
    let place = 0
    for (let i = 0; i < points.length; i++)
    {
      if (points[i] >= most)
      {
        most = points[i]
        place = i
      }
    }
    return (anecdotes[place])
  }


  return (
    <div>
      <h1> Anecdote of the Day</h1>
      <p>{anecdotes[selected]}, </p>
      <p> The above anecdote has been voted a total of {points[selected]} times</p>
      <Button name='Vote' task={vote} />
      <p> <Button name='Next Anecdote' task={nextAnecdote} /> </p>
      <h1> Ancedote with most votes </h1>
      <p> {mostVotes()} </p>
    </div>
  )
}

export default App