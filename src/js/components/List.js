import {useLocation} from 'react-router-dom'
// import './App.css';
import Card from './Card'
// import Details from './js/components/Details'
import global from '../../Global'
import { useNavigate } from "react-router-dom"
import { Grid, Checkbox } from '@mui/material'

function App({list}) {
    return (
        <Grid container>
            {list.map((insight) =>
            <Card key={insight.id} id={insight.id} insight={insight.text} aid={insight.aid}
            />
          )}
          </Grid>
    )
}

export default App