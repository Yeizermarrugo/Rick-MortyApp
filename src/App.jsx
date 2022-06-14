import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardsCharacter from './components/CardsCharacter'
import Loading from './components/Loading'
import Paginacion from './components/Paginacion'
import Search from './components/Search'
import header from './img/461.jpg'

function App() {
  const [locationSearch, setLocationSearch] = useState()
  const [location, setLocation] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorPagina] = useState(6)

  const maximo = Math.ceil(location?.residents.length / porPagina)


  useEffect(() => {
    let locationNumber
    if (locationSearch === undefined) {
      locationNumber = Math.ceil(Math.random() * 126)
    } else {
      locationNumber = locationSearch
    }
    const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        setIsLoading(false)
      })
      .catch(err => console(err))
  }, [locationSearch])

  console.log(location)

  return (
    <>
    
    <div>
      <div className="header">
      </div>
      <div className="search-container">
      {isLoading ?
          <Loading /> :
      <Search
        placeholder="Search... id"
        setLocationSearch={setLocationSearch} />
      }
        </div>

      {
        <article className='navbar'>

          <h2>{location?.name}</h2>
          <ul>
            <li><b>Type: </b>{location?.type}</li>
            <li><b>Dimension: </b>{location?.dimension}</li>
            <li><b>Population: </b>{location?.residents.length}</li>
          </ul>

        </article>
      }
      <div className="character">
        {isLoading ?
          <Loading /> :
          location?.residents.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map(resident => (
            <CardsCharacter
              resident={resident}
              key={resident}
            />
          ))}
      </div>
      <div className="container">
        <Paginacion
          pagina={pagina}
          setPagina={setPagina}
          maximo={maximo}
        />
      </div>
</div>

    </>
  )
          
}

export default App
