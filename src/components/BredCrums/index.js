import React from 'react'
import { Link } from 'react-router-dom'
import {Wraper,Content} from './BredCrums.styles'


const BreadCrums = ({movieTitle}) => {
    return (
        <Wraper>
            <Content>
                <Link to='/'>
                    <span>Home</span>
                </Link>
                <span> | </span>
                <span>{movieTitle}</span>
            </Content>
        </Wraper>
    )
}

export default BreadCrums
