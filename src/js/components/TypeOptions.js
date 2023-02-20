import {useLocation} from 'react-router-dom'
import { React, useState, useRef } from "react";
import global from '../../Global'
import { useNavigate } from "react-router-dom"
import { Grid, Checkbox, Button } from '@mui/material'
import { textTransform } from '@mui/system';
import { Directions } from '@mui/icons-material';

// Type of insight selection buttons
function App({selectedType, selectType}) {
    // change button background color and determine which types are selected when clicked on the buttons (no buttons cannot be delected at the same time)
    const handleClick = (e, selection) => {
        e.preventDefault()
        if (selection === DIRECTQUOTES) {
            if (selectedType === ANY)  {
                selectedType = REPHRASED
                e.target.style.background = 'none'
            } else if (selectedType === REPHRASED) {
                selectedType = ANY
                e.target.style.background = buttonBG
            }
            selectType(selectedType)
        }
        if (selection === REPHRASED) {
            if (selectedType === ANY)  {
                selectedType = DIRECTQUOTES
                e.target.style.background = 'none'
            } else if (selectedType === DIRECTQUOTES) {
                selectedType = ANY
                e.target.style.background = buttonBG
            }
            selectType(selectedType)
        }
    }
    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {/* <Button
          variant="outlined"
          style={{margin: 5, fontSize: 'small', textTransform: 'lowercase' }}
          onClick={e => selectType(e, 'any')}
          >Any</Button> */}
        <Button
          variant="outlined"
          style={{margin: 5, fontSize: 'small', textTransform: 'lowercase', background: buttonBG}}
          onClick={e => handleClick(e, DIRECTQUOTES)}
          >{DIRECTQUOTES}</Button>
        <Button
          variant="outlined"
          style={{margin: 5, fontSize: 'small', textTransform: 'lowercase', background: buttonBG}}
          onClick={e => handleClick(e, REPHRASED)}
          >{REPHRASED}</Button>
      </div>
    )

}

const DIRECTQUOTES = 'Direct quotes'
const REPHRASED = 'Rephrased'
const ANY = 'any'
const buttonBG = '#d4e5ff'

export default App