import React from 'react'
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'
import RNDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={ RNDBLogo} alt='RNDBlogo'/>
                </Link>
                
                <TMDBLogoImg src={ TMDBLogo} alt='TMDBLogo'/>
            </Content>
        </Wrapper>
    )
}

export default Header
