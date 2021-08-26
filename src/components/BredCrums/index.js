import React from 'react'
import { Link } from 'react-router-dom'
import { Wraper, Content } from './BredCrums.styles'
import PropTypes from 'prop-types'


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

BreadCrums.propTypes = {
    movieTitle:PropTypes.string
}

export default BreadCrums
