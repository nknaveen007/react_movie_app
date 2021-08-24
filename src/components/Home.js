import React,{useState,useEffect,Fragment,useRef} from 'react'
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
import {useHomeHooks} from '../Hooks/useHomeHooks'
import Grid from './Grid'
import HeroImage from './HeroImage'
import Thumb from './Thumb'
import NoImage from '../images/no_image.jpg'
import Spinner from './Spinner'
import SearchBox from './SearchBar'
import Button from './Button'
import Header from './Header'


const Home = () => {
    const { state, loader, error ,setstate,setsearchTerms,searchTerms,setloadMore} = useHomeHooks()
    const box = useRef()

   
    
    return (
        <div>
            <Header/>
            {!searchTerms && state.results[0] ? <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            /> : null}
            <SearchBox box={box} setsearchTerms={ setsearchTerms}/>
            <Grid heading={searchTerms?'Search Results':'Popular content'} minmax={'300px'}>
                {state.results.map((value, index) => {
                    
                    return (
                        <Thumb
                            key={value.id}
                            clickable
                            image={value.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${value.backdrop_path}` : NoImage}
                            movieid={value.id}
                        />
                    )
                })}
            </Grid>
            {loader && <Spinner />}
            {!loader && state.page < state.total_pages &&
                <Button text='Load More' callback={() => setloadMore(true)} />}
        </div>
        
    )
}

export default Home
