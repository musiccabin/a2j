import {useLocation} from 'react-router-dom'
import { React, useState, useRef } from "react";
import logo from './logo.png';
import './App.css';
import Card from './js/components/Card'
import Details from './js/components/Details'
import Slider from './js/components/Slider'
import TypeOptions from './js/components/TypeOptions'
import global from './Global'
import SearchBarSmall from './js/components/SearchBarSmall'
import { useNavigate } from "react-router-dom"
import { Grid, Checkbox, Button } from '@mui/material'
import { textTransform } from '@mui/system';

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
  // user got here by entering keywords in Search Bar
  const fromSearch = location?.state?.from === 'Search'
  // an insight Details pane on the right was just closed
  const fromDetails = location?.state?.from === 'Details'
  const [close, closeDetails] = useState(false)
  // if (fromDetails && !location.state.clicked) closeDetails(true)

  // see whether user has clicked on any insight
  const [clicked, setClick] = useState(location?.state?.clicked)
  if (fromDetails && clicked !== location?.state?.clicked) setClick(location?.state?.clicked)
  const cardClick = (e, id) => {
    e.preventDefault()
    setClick(id)
    if (fromDetails) location.state.from = ''
    closeDetails(false)
  }

  // store search or filtered results for display
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
  else results = location?.state?.filtered || location.state.list || location?.state?.results

  // select insights to display based on user-selected types
  // close insight details on the right if new type is selected
  const quotedInsights = []
  const rephrasedInsights = []
  console.log('fromDeatils', fromDetails, 'state:', location.state, results)
  results.forEach(r => {
    r.text.includes(`"`) || r.text.includes(`“`) ? quotedInsights.push(r.id) : rephrasedInsights.push(r.id)
  })
  const [ids, setIds] = useState(quotedInsights + rephrasedInsights)
  const [type, setType] = useState(ANY)
  const selectType = (newType) => {
    if (newType === DIRECTQUOTES) {
      setIds(quotedInsights)
      if (type === ANY) closeDetails(true)
      setType(newType)
    }
    if (newType === REPHRASED) {
      setIds(rephrasedInsights)
      if (type === ANY) closeDetails(true)
      setType(newType)
    }
    if (newType === ANY) {
      setIds(quotedInsights + rephrasedInsights)
      setType(newType)
    }
  }
  
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
          <h4 style={{padding: '.5em',}}>Type of insight</h4>
          <TypeOptions selectedType={type} selectType={selectType} />
          <h4>Year of publication</h4>
          <Slider list={location?.state?.list || results} results={results} min={location?.state?.min || 1950} max={location?.state?.max || 2030} clicked={clicked}/>
          <h4 style={{marginBottom: 5, marginLeft: 5}}>Tags</h4>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            {/* <Checkbox {...DIRECTQUOTES} sx={{ '&.Mui-checked': {color: global.colors.blue,},}} /> */}
            {/* <Checkbox {...REPHRASED} sx={{ '&.Mui-checked': {color: global.colors.blue,},}} /> */}
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
              typeSelected = {ids.includes(insight.id)}
              handleClick={cardClick}
            />
          )}
          </Grid>
        </div>}
        {results.find(r => r.id === clicked) && !close && <Details insight={results.find(r => r.id === clicked)} results={results} list={location.state.list} type={type} />}
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
const ANY = 'any'

export default App;
