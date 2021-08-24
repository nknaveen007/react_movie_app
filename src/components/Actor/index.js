import React from 'react'
import {Wraper,Image} from './Actor.styles'

const Actor = ({url,name,character}) => {
    return (
        <Wraper>
            <Image src={url}/>
            <h3>{name}</h3>
            <p>{character}</p>
       </Wraper>
    )
}

export default Actor
