import React from 'react'
import { Wraper } from './Button.styles'


const Button = ({text,callback}) => {
    return (
        <Wraper type='button' onClick={callback}>{text}</Wraper>
    )
}

export default Button
