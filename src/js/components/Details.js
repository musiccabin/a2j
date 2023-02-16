import { React, useState } from "react";
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "../../App.css"
import global from '../../Global'
import { styled } from '@material-ui/core/styles';
import CircleIcon from '@mui/icons-material/Circle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// show details on the right when insight is selected
function App() {
  return (
    <div style={{background: 'white', minHeight: '100vh', minWidth: '30vw', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '1.5em'}}>
        <p style={{}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ligula diam, porta in semper id, vehicula eu ante. Integer vitae nunc iaculis nisl viverra tincidunt. Cras at venenatis neque. Etiam mattis est vitae urna pellentesque sagittis. In tincidunt ante magna, eget rutrum felis porttitor molestie. Donec semper leo nec augue luctus commodo. Proin vulputate sem ac lacinia tincidunt. Aenean lobortis nunc sed libero lobortis suscipit."</p>
    </div>
  )
}

export default App;