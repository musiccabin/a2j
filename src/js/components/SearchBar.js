import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
// import List from "./Components/List"
import "../../App.css";
import { styled } from '@material-ui/core/styles';

// search bar component on homepage
// const SearchBox = styled(TextField)(() => ({
//   '& fieldset': {
//     borderRadius: '50px',
//   },
// }));

function App() {
  const [phrase, setPhrase] = useState("");
  const navigate = useNavigate()

// record user input value
  const handleChange = (e) => {
    e.preventDefault();
    setPhrase(e.target.value);
  };


  return (
    <div className="main">
      <div className="search">
            <TextField
            // id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Type your question or keywords here"
            onChange={e => handleChange(e)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') navigate("/results", {state:{phrase:phrase}})
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={() => navigate("/results", {state:{phrase:phrase}})}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            />
      </div>
    </div>
  );
}

export default App;