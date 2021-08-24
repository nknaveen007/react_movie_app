import React from 'react'
import { Wraper, Content } from './Grid.styles';

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

export default Grid




