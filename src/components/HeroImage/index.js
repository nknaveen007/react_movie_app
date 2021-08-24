import React from 'react'
import { Wraper,Content,Text} from './HeroImage.styles'

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

export default HeroImage
