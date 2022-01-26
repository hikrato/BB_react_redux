import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Components/ui/Header";
// import axios from 'axios'
import CharacterGrid from './Components/Characters/CharacterGrid';
import EpisodesGrid from './Components/Episodes/EpisodesGrid';
// import Search from './Components/ui/Search';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/ui/NavBar';
import Home from './Components/ui/Home';
import Deaths from './Components/Deaths/Deaths';
import CharacterDetail from './Components/Characters/CharacterDetail';
import { Switch } from 'react-router-dom';




const App = () => {

  const [characters, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState("")



  return <div className='container'>
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Header />
      </Route>
<Switch>


      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path='/characters'>
        <CharacterGrid isLoading={isLoading} characters={characters} />
      </Route>

      <Route  exact path="/characters/:id"
        render={props=>(
          <CharacterDetail match={props.match}></CharacterDetail>
        )}
      />

      <Route path='/episodes'>
        <EpisodesGrid />
      </Route>

      <Route path='/deaths'>
        <Deaths />
      </Route>
</Switch>

    </BrowserRouter>
  </div>
}

export default App;
