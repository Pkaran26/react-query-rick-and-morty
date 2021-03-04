import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import './App.css'

const App = ()=>{
  const [page, setPage] = useState(1)

  const fetchCharacters = async (page = 1)=>{
    console.log(page);
    return await axios.get(`https://rickandmortyapi.com/api/character?page=${ page }`)
      .catch(err=>{ return err })
  }

  //const { isLoading, isError, data, error } = useQuery('todos', fetchCharacters)
  const { isLoading, isError, data, error } = useQuery(
    ['todos', page],
    () => fetchCharacters(page),
    { keepPreviousData : true }
  )

  return (
    <div className="App">
      <pre>
        { data && data.data? JSON.stringify(data.data.info, undefined, 2) : null }
      </pre>
      <button disabled={ data && data.data && !data.data.info.prev } onClick={ ()=>{ setPage(page=>(page - 1)) } }>prev</button>
      <span>{ page }</span>
      <button disabled={ data && data.data && !data.data.info.next } onClick={ ()=>{ setPage(page=>(page + 1)) } }>next</button>
    </div>
  )
}

export default App
