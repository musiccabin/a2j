import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import { TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
// import List from "./Components/List"
import "../../App.css";
import { styled } from '@material-ui/core/styles';

const SearchBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '50px',
  },
}));

// search bar component on homepage
function App() {
  const navigate = useNavigate()
  return (
    <div className="main">
      <div className="search">
            <SearchBox
            // id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Type your question or keywords here"
            />
        <div class='search-icon-container'>
          <IconButton  onClick={() => navigate("/results")}>
            <SearchIcon fontSize="large" style={{ color: "white", margin: '0.2em'}} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default App;