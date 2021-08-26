import React,{useState,useEffect,useRef} from 'react'
import { Wraper, Content } from './SearchBar.styles'
import MovieImg from '../../images/search-icon.svg'
import PropTypes from 'prop-types'

const SearchBox = ({box,setsearchTerms}) => {
   const [state, setstate] = useState('')
   const initial = useRef(true)
    
    useEffect(() => {
        if (initial.current === true) {
            initial.current = false
            return
       }
        const time = setTimeout(() => {
            setsearchTerms(state)
        }, 500);

        return () => {
            clearTimeout(time)
          };
    }, [state,setsearchTerms])
    
    return (
        <Wraper>
            <Content>
                <img onClick={()=>box.current.focus()} src={MovieImg} alt='search-icon'/>
                <input ref={box} type="text" value={state} onChange={(event)=>setstate(event.target.value)} placeholder='Search Movie' />
            </Content>
        </Wraper>
    )
}

SearchBox.propTypes = {
    box: PropTypes.object,
    setsearchTerms:PropTypes.func
}

export default SearchBox
