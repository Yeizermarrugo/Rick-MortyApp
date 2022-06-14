import React, { useEffect, useState } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'
const CardsCharacter = ({resident}) => {

  const [status, setStatus] = useState()

  const character = useCharacterApi(resident)

  useEffect(() => {
    if(character?.status.includes("unknown")){
      setStatus('unknown')
      }else if(character?.status.includes("Dead")){
        setStatus('dead')
      }else if(character?.status.includes("Alive")){
        setStatus('alive')
      }
  }, [character])

  return (
    <article className="character1">
         <div className="info">
          <img className="cardimg" src={character?.image}/>
          <ul>
            <li>{character?.name}</li>
            <li><span className={`${status}`}></span>{character?.status} - {character?.type}</li>
            <li className="title">origin: </li>
            <li>{character?.origin.name}</li>
            <li className="title">Episode where appears</li>
            <li>{character?.episode.length}</li>
          </ul>
         </div>
    </article>
  )
}

export default CardsCharacter