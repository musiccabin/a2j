import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom"
// import List from "./Components/List"
import "../../App.css";
import { styled } from '@material-ui/core/styles';

const SearchBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '50px',
    height: '6vh',
    margin: 'auto'
  },
}));

function App() {
  return (
    <div className="main">
      <div className="search-small">
            <SearchBox
            // id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Type your question or keywords here"
            />
        <div class='search-small-icon-container'>
            <SearchIcon fontSize="medium" style={{ color: "white", 'margin-top': '0.5em', width: '6vw'}} />
        </div>
      </div>
      {/* <List /> */}
    </div>
  );
}

export default App;