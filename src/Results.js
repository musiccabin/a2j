import {useLocation} from 'react-router-dom'
import { React, useState, useRef } from "react";
import logo from './logo.png';
import './App.css';
import Card from './js/components/Card'
import Details from './js/components/Details'
import List from './js/components/List'
import Slider from './js/components/Slider'
import global from './Global'
import SearchBarSmall from './js/components/SearchBarSmall'
import { useNavigate } from "react-router-dom"
import { Grid, Checkbox } from '@mui/material'

// insight search results page
function App() {
  // const triggerOpenAlertState = (card) => {
  //   this.setState({
  //     ...this.state, //this is not needed
  //    isEmptyState: false,
  //    isOpenAlertState: true,
  //   //  card: card;
  //   })
  // }
  const location = useLocation()
  const fromSearch = location?.state?.from === 'Search'
  const fromDetails = location?.state?.from === 'Details'
  const [clicked, setClick] = useState(location?.state?.clicked)
  if (fromDetails && clicked !== location?.state?.clicked) setClick(location?.state?.clicked)
  const handleClick = (e, id) => {
    e.preventDefault()
    setClick(id)
    if (fromDetails) location.state.from = ''
  }

  let results = []
  if (fromSearch) {
    global.articles.forEach(a => a.insights.forEach(i => {
      if (i.includes(location.state.phrase)) {
        const index = a.insights.indexOf(i)
        results.push({
          id: `${a.id}-${index}`,
          text: i,
          aid: a.id,
          year: parseInt(a.date.slice(-4))
        })
      }
    }))
  } else if (fromDetails) results = location.state.results
  else results = location?.state?.filtered || location.state.list
  
  return (
    <div style={{background: 'white'}}>
      <div style={{display: 'flex', flexDirection: 'row', background: global.colors.grey}}>
        <img src={logo} alt="Logo" style={{height: '7vh', margin: '1em'}} />
        <SearchBarSmall />
      </div>
      {!(results.length === 0 && fromSearch) && <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
        <Grid
          item spacing={3}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          margin={5}
          minWidth={'15vw'}
          position={'sticky'}
          top={10}
        >
          <h4 style={{margin: 5}}>Type of insight</h4>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Checkbox {...DIRECTQUOTES} defaultChecked sx={{ '&.Mui-checked': {color: global.colors.blue,},}} />
            <Checkbox {...REPHRASED} defaultChecked sx={{ '&.Mui-checked': {color: global.colors.blue,},}} />
          </div>
          <h4>Year of publication</h4>
          <Slider list={location?.state?.list || results} results={results} min={location?.state?.min || 1950} max={location?.state?.max || 2030} clicked={clicked}/>
          <h4 style={{marginBottom: 5, marginLeft: 5}}>Tags</h4>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Checkbox {...DIRECTQUOTES} sx={{ '&.Mui-checked': {color: global.colors.blue,},}} />
            <Checkbox {...REPHRASED} sx={{ '&.Mui-checked': {color: global.colors.blue,},}} />
          </div>
        </Grid>
        {results.length > 0 && <div style={{padding: '10px', backgroundColor: global.colors.grey, height: '100vh', overflow: 'scroll'}}>
          <p style={{marginLeft: 25, color: '#595959', fontSize: '.8em'}}>About {results.length} insights</p>
          <Grid container>
            {results.map((insight) =>
            <Card
              key={insight.id}
              id={insight.id}
              insight={insight.text}
              aid={insight.aid}
              clicked={clicked === insight.id}
              handleClick={handleClick}
            />
          )}
          </Grid>
        </div>}
        {results.find(r => r.id === clicked) && <Details insight={results.find(r => r.id === clicked)} results={results} list={location.state.list} />}
        {results.length === 0 && <p style={{margin: '5em'}}>No results matching your search criteria...</p>}
      </div>}
      {fromSearch && results.length === 0 && <div style={{padding: '5em', backgroundColor: global.colors.grey, height: '100vh'}}>
            <p>Sorry, no results. Please try searching with a different keyword.</p>
            </div>}
    </div>
  //   <div>
  //     <i class="star outline icon big" id="favourites"></i>
  //     <GoogleAuth />
  //     <div>
  //   {this.state.isEmptyState && <Cards openAlert={this.triggerOpenAlertState} />}

  //   <ModalExample card={this.state.card} isOpen={this.state.isOpenAlertState}/>
  // </div>
  // </div>
  )
}

const DIRECTQUOTES = 'Direct quotes'
const REPHRASED = 'Rephrased'

export default App;
