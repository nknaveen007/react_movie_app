import PropTypes from 'prop-types'
import React from 'react'
import { Wraper, Image } from './Actor.styles'


const Actor = ({url,name,character}) => {
    return (
        <Wraper>
            <Image src={url}/>
            <h3>{name}</h3>
            <p>{character}</p>
       </Wraper>
    )
}

Actor.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string
}

export default Actor
