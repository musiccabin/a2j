import logo from './logo.svg';
import './App.css';
import SearchBar from './js/components/SearchBar'

// homepage showing the search bar
function App() {
  return (
    <div class='App-header'>
      <h1 style= {{margin: 5}}>Access to Justice Librarian</h1>
      <p style= {{fontSize: '.6em', margin: 5}}>Quickly capture legal insights that is right for you</p>
      <SearchBar />
      </div>
  )
}

export default App;
