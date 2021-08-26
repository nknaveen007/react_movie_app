import React from 'react'
import { Wraper, Content, Text } from './HeroImage.styles'
import PropTypes from 'prop-types'

const HeroImage = ({image,title,text}) => {
    return (
        <Wraper image={image}>
            <Content >
                <Text>
                    <h1>{ title}</h1>
                    <p>{ text}</p>
                </Text>
            </Content>
       </Wraper>
    )
}

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text:PropTypes.string
}

export default HeroImage
