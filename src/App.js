import React, { useState } from 'react'

const Button = ( {text, onClick} ) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Heading = ( {text} ) => <h2>{text}</h2>

const Paragraph = ( {text} ) => <p>{text}</p>

const MostPopularAnecdote = ( {text} ) => <p>{text}</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState( Array(anecdotes.length).fill(0) )

  const randomAnecdote = () => setSelected( Math.floor(Math.random()*anecdotes.length) )

  const handleVote = () => {
    const pointsCopy = [...points]
    pointsCopy[selected]++
    setPoints(pointsCopy)
  }

  return (
    <div>
      <Heading text='Anecdote of the day' />
      <Button text='Vote' onClick={handleVote} />
      <Button text='Click for a random anecdote' onClick={randomAnecdote} />
      <Paragraph text={anecdotes[selected]} />
      <Paragraph text={points[selected] + ' votes'} />
      <Heading text='Anecdote with most votes' />
      <MostPopularAnecdote text={anecdotes[points.indexOf(Math.max(...points))]} />
      <Paragraph text={Math.max(...points) + ' votes'} />
    </div>
  )
}

export default App