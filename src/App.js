import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { GlobalStyle } from './GlobalStyle';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Movie from './Screens/Movie';
import NotFound from './Screens/NotFound';

const App = ()=>  (
   <Router>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:MovieId' element={<Movie/>} />
          <Route path='/*' element={ <NotFound/>}/>
        </Routes>
      <GlobalStyle/>
   </Router>
  );


export default App;
