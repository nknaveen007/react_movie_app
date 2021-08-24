import React from 'react'
import { Wraper, Box , Content} from './MovieInfoBar'
import {calcTime,convertMoney} from '../../helpers'


const MovieInfoBar = ({movie}) => {

    const DataView = ({title,value}) => {
        return (
            <Box>
                <p>{title}: {value}</p>
            </Box>
        )
    }
    

    return (
        <Wraper>
            <Content>
              <DataView title='Running time' value={calcTime(movie.runtime)}/>
              <DataView title='Budget' value={convertMoney(movie.budget)}/>
              <DataView title='Revenue' value={convertMoney(movie.revenue)}/>
            </Content>
        </Wraper>
    )
}

export default MovieInfoBar
