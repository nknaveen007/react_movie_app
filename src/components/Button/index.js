import React from 'react'
import { Wraper } from './Button.styles'
import PropTypes from 'prop-types'

const Button = ({text,callback}) => {
    return (
        <Wraper type='button' onClick={callback}>{text}</Wraper>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    callback:PropTypes.func
}

export default Button
