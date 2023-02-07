import { React, useState } from "react";
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
// import List from "./Components/List"
import "../../App.css";
import { styled } from '@material-ui/core/styles';
import { Grid } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function App() {
  return (
    <div>
      <p style={textStyle}> About 210 insights</p>
      <Grid container>
        <Card style={{ background: 'white', width: '55vw', padding: '1.5em', margin: '1em', borderRadius: '20px', font: 'Inter' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title style={{fontWeight: 500, marginBottom: '1em'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec tortor leo. Cras elit velit, dictum vitae tristique at, aliquet non odio. Praesent at pretium eros."</Card.Title>
            <Card.Link style={{textDecoration: 'none', color: '#3986FA', border: 'none', background: 'none', fontWeight: 700, fontSize: '.8em', padding: 0}} href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3277900">
              Trapped in Marriage
              <OpenInNewIcon style={{marginLeft: '5px', fontSize: 'small'}} />
              </Card.Link>
            {/* <Button>Trapped in Marriage</Button> */}
            <Card.Text style={{margin: 0, color: '#595959', fontSize: '.8em', whiteSpace: 'pre-line' }}>
            Author 1, Author 2, Author 3 (2010)
            </Card.Text>
            <Card.Text style={{marginBottom: 0, color: '#595959', fontSize: '.8em', whiteSpace: 'pre-line' }}>
            <CircleIcon style={{paddingRight: '5px', color: '#84CC82', fontSize: 'small'}} />
            Direct quotes
            </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ background: 'white', width: '55vw', padding: '1.5em', margin: '1em', borderRadius: '20px', font: 'Inter' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title style={{fontWeight: 500, marginBottom: '1em'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec tortor leo. Cras elit velit, dictum vitae tristique at, aliquet non odio. Praesent at pretium eros."</Card.Title>
            <Card.Link style={{textDecoration: 'none', color: '#3986FA', border: 'none', background: 'none', fontWeight: 700, fontSize: '.8em', padding: 0}} href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3277900">
              Trapped in Marriage
              <OpenInNewIcon style={{marginLeft: '5px', fontSize: 'small'}} />
              </Card.Link>
            {/* <Button>Trapped in Marriage</Button> */}
            <Card.Text style={{margin: 0, color: '#595959', fontSize: '.8em', whiteSpace: 'pre-line' }}>
            Author 1, Author 2, Author 3 (2010)
            </Card.Text>
            <Card.Text style={{marginBottom: 0, color: '#595959', fontSize: '.8em', whiteSpace: 'pre-line' }}>
            <CircleIcon style={{paddingRight: '5px', color: '#84CC82', fontSize: 'small'}} />
            Direct quotes
            </Card.Text>
        </Card.Body>
        </Card>
      </Grid>
    </div>
  )
}

const textStyle = {
  margin: 0, color: '#595959', fontSize: '.8em', whiteSpace: 'pre-line' 
}

export default App;