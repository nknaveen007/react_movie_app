import { useState, useEffect, useRef } from 'react'
import Api from '../API'
import {isPreservedState} from '../helpers'

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results:0
}

export const useHomeHooks = () => {
    const [searchTerms, setsearchTerms] = useState('')
    const [state, setstate] = useState(initialState)
    const [loader, setloader] = useState(false)
    const [error, seterror] = useState(false)
    const [loadMore, setloadMore] = useState(false)
   
    

    const fetchMovies = async(page,searchTerms="") => {
        try {
            seterror(false)
            setloader(true)
            const movies = await Api.fetchMovies(searchTerms, page)
            setstate(prev => (
                {
                    ...movies,
                    results: page > 1 ? [...prev.results,...movies.results] : [...movies.results]
                }
            ))    
        } catch (error) {
            console.log(error)
            seterror(true)
        }
        setloader(false)
    }
    console.log(state)

    useEffect(() => {
        if (!searchTerms) {
            const stateResult = isPreservedState('homestate')
            if (stateResult) {
                setstate(stateResult)
                return
            }
        }
       setstate(initialState)
       fetchMovies(1, searchTerms)
    }, [searchTerms])
   
    useEffect(() => {
        if (!loadMore) return
        fetchMovies(state.page + 1, searchTerms)
        setloadMore(false) 
       
    }, [state.page, searchTerms, loadMore])
    
    useEffect(() => {
        if (!searchTerms) {
            sessionStorage.setItem('homestate',JSON.stringify(state))
        }
       
    
    }, [searchTerms,state])
    
    return {state,loader,error,setstate,setsearchTerms,searchTerms,setloadMore}
}
/*

*/
