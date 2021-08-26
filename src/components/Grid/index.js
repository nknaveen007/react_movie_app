import React from 'react'
import { Wraper, Content } from './Grid.styles';
import PropTypes from 'prop-types'

const Grid = ({heading,children,minmax}) => {
    return (
        <Wraper >
            <h1>{heading}</h1>
            <Content minmax={minmax}>
                {children}
            </Content>
        </Wraper>
    )
}

Grid.propTypes = {
    heading: PropTypes.string,
    minmax:PropTypes.string
}

export default Grid




