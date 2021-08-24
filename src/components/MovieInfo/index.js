import React from 'react'
import { IMAGE_BASE_URL,BACKDROP_SIZE } from '../../config'
import Thumb from '../Thumb'
import { Wraper, Content, Text } from './MovieInfo.styles'
import NoImage from '../../images/no_image.jpg'

const MovieInfo = ({movie}) => {
    return (
        <Wraper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb image={movie.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` : NoImage} movieid={movie.id} clickable={ false}/>
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    
                    <div className='rat-dir'>
                        <div className='rating'>
                            <h3>Rating</h3>
                            <div className='vote'>{ movie.vote_average}</div>
                        </div>
                        
                        <div className='director'>
                            <h3>Director{movie.director.length > 1 ? 's' : ''}</h3>
                            {movie.director.map((value, index) => {
                                return (
                                    <p className='dirname' key={value.id}>{value.name}</p>
                                )
                            })}
                        </div>
                    </div>
                </Text>
            </Content>
        </Wraper>
    )
}

export default MovieInfo
