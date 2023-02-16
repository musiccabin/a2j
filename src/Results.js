import logo from './logo.svg';
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
  const triggerOpenAlertState = (card) => {
    this.setState({
      ...this.state, //this is not needed
     isEmptyState: false,
     isOpenAlertState: true,
    //  card: card;
    })
  }
  return (
    <div style={{background: 'white', minHeight: '100vh'}}>
      <SearchBarSmall />
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
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
            <Checkbox {...DIRECTQUOTES} defaultChecked sx={{ '&.Mui-checked': {color: global.blue,},}} />
            <Checkbox {...REPHRASED} defaultChecked sx={{ '&.Mui-checked': {color: global.blue,},}} />
          </div>
          <h4>Year of publication</h4>
          <Slider />
          <h4 style={{marginBottom: 5, marginLeft: 5}}>Tags</h4>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Checkbox {...DIRECTQUOTES} sx={{ '&.Mui-checked': {color: global.blue,},}} />
            <Checkbox {...REPHRASED} sx={{ '&.Mui-checked': {color: global.blue,},}} />
          </div>
        </Grid>
        <div style={{padding: '10px', backgroundColor: '#f0f0f0'}}>
          <p style={{marginLeft: 25, color: '#595959', fontSize: '.8em'}}>About 210 insights</p>
          <Grid container>
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
        </div>
        {/* <Details /> */}
      </div>
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
