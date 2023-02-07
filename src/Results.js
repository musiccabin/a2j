import logo from './logo.svg';
import './App.css';
import Card from './js/components/Card'
import SearchBarSmall from './js/components/SearchBarSmall'
import { useNavigate } from "react-router-dom"

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
    <div style={{background: '#F0F0F0', height: '100vh'}}>
      <SearchBarSmall />
      <Card />
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

export default App;
