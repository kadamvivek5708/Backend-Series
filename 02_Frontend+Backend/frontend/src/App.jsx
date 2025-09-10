import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJoke] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJoke(res.data)
      console.log(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <>
      <h1>Connecting Frontend and Backend</h1>
      <p>Jokes : {jokes.length}</p>
      <div>{
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.joke}</p>
          </div>

        ))
      }
      </div>
    </>
  )
}

export default App
