import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
// import List from "./Components/List"
import "../../App.css";
import { styled } from '@material-ui/core/styles';

const SearchBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '50px',
  },
}));

function App() {
  return (
    <div className="main">
      <div className="search">
            <SearchBox
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Type your question or keywords here"
            />
        <div class='search-icon-container'>
            <SearchIcon fontSize="large" style={{ color: "white", margin: '0.2em'}}/>
        </div>
      </div>
      {/* <List /> */}
    </div>
  );
}

export default App;