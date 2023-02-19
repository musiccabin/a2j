import {useLocation} from 'react-router-dom'
import logo from './logo.png';
import './App.css';
import Card from './js/components/Card'
import Details from './js/components/Details'
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
  let list = []
  const location = useLocation()
  global.articles.forEach(a => a.insights.forEach(i => {
    if (i.includes(location.state.phrase)) {
      const index = a.insights.indexOf(i)
      list.push({
        id: `${a.id}-${index}`,
        text: i,
        aid: a.id
      })
    }
  }))
  console.log ('length:', list.length)
  
  return (
    <div style={{background: 'white', minHeight: '100vh'}}>
      <div style={{display: 'flex', flexDirection: 'row', background: global.colors.grey}}>
        <img src={logo} alt="Logo" style={{height: '7vh', margin: '1em'}} />
        <SearchBarSmall />
      </div>
      {list.length > 0 && <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
        <Grid
          item spacing={3}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          margin={5}
          minWidth={'15vw'}
        >
          <h4 style={{margin: 5}}>Type of insight</h4>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Checkbox {...DIRECTQUOTES} defaultChecked sx={{ '&.Mui-checked': {color: global.colors.blue,},}} />
            <Checkbox {...REPHRASED} defaultChecked sx={{ '&.Mui-checked': {color: global.colors.blue,},}} />
          </div>
          <h4>Year of publication</h4>
          <Slider />
          <h4 style={{marginBottom: 5, marginLeft: 5}}>Tags</h4>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Checkbox {...DIRECTQUOTES} sx={{ '&.Mui-checked': {color: global.colors.blue,},}} />
            <Checkbox {...REPHRASED} sx={{ '&.Mui-checked': {color: global.colors.blue,},}} />
          </div>
        </Grid>
        <div style={{padding: '10px', backgroundColor: global.colors.grey, height: '100vh'}}>
          <p style={{marginLeft: 25, color: '#595959', fontSize: '.8em'}}>About {list.length} insights</p>
          {list.length > 0 && <Grid container>
            {list.map((insight) =>
            <Card key={insight.id} id={insight.id} insight={insight.text} aid={insight.aid}
            />
          )}
          </Grid>}
        </div>
        {/* <Details /> */}
      </div>}
      {list.length === 0 && <div style={{padding: '3em', backgroundColor: global.colors.grey, height: '100vh'}}>
            <h4>Sorry, no results. Please try searching with a different keyword.</h4>
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
