import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Header } from './components/header'
import { Card } from './components/card'
import { Pagination } from './components/pagination'
import './App.css'

const App = ()=>{
  const [page, setPage] = useState(1)

  const fetchCharacters = async (page = 1)=>{
    return await axios.get(`https://rickandmortyapi.com/api/character?page=${ page }`)
    .catch(err=>{ return err })
  }

  const { isLoading, isError, data, error } = useQuery(
    ['todos', page],
    () => fetchCharacters(page),
    { keepPreviousData : true }
  )

  return (
    <div className="App">
      <Header />
      <div className="container">
        { isLoading?
          <h1 className="text-danger">Loading...</h1>
        :null }
        { isError || error?
          <h1 className="text-danger">something went wrong</h1>
        :null }
        <div className="row">
          { data && data.data && data.data.results?
            data.data.results.map((e, i)=>(
              <Card
                key={ i }
                character={ e }
              />
            ))
          :null }
        </div>
        { data && data.data && data.data.results?
          <Pagination
            info={ data.data.info }
            pageFunc={ (i)=> setPage(i) }
            currentPage={ page }
          />
        :null }
      </div>
    </div>
  )
}

export default App
