import { useState, useEffect } from 'react'
import API from '../API'



const useMovieHooks = (MovieId) => {
    
    const [state, setstate] = useState({})
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(false)

    useEffect(() => {
        (async (MovieId) => {
            
            try {
                const movie = await API.fetchMovie(MovieId)
                const credits = await API.fetchCredits(MovieId)
                const director = credits.crew.filter((member) => (
                    member.job==='Director'
                ))
                setstate({
                    ...movie,
                    credits: credits.cast,
                    director
                })
                setloading(false)
            } catch (error) {
               seterror(true) 
            }
        })(MovieId);
    }, [MovieId])

    return {state,loading,error}
}

export default useMovieHooks
