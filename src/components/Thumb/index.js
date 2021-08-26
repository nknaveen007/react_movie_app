import React from 'react'
import { Image } from './Thumb.styles'
import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types'

const Thumb = ({ image, movieid, clickable  }) => {
    
    return (
        <div>
            {clickable ?
                <Link to={`/${movieid}`}>
                    <Image src={image} alt='movie-image' clickable={clickable}/>
                </Link> :
                       <Image src={image} alt='movie-image' />}
        </div>  
        
    )
}

Thumb.propTypes = {
    image: PropsTypes.string,
    movieid: PropsTypes.number,
    clickable:PropsTypes.bool   
}
export default Thumb
