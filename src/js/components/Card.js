import { React } from "react";
import { Card } from "react-bootstrap"
import "../../App.css";
import global from '../../Global'
import CircleIcon from '@mui/icons-material/Circle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// an individual insight on search results page
function App() {
  return (
    <div>
      <Card style={{ background: 'white', padding: '1.5em', margin: '1em', borderRadius: '20px', font: 'Inter' }}>
      <Card.Body>
          <Card.Title style={{fontWeight: 500, marginBottom: '1em'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec tortor leo. Cras elit velit, dictum vitae tristique at, aliquet non odio. Praesent at pretium eros."...</Card.Title>
          <Card.Link style={{textDecoration: 'none', color: global.blue, border: 'none', background: 'none', fontWeight: 700, fontSize: '.8em', padding: 0}} href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3277900">
            Trapped in Marriage
            <OpenInNewIcon style={{marginLeft: '5px', fontSize: 'small'}} />
            </Card.Link>
          <Card.Text style={{margin: 0, color: '#595959', fontSize: '.8em', whiteSpace: 'pre-line' }}>
          Author 1, Author 2, Author 3 (2010)
          </Card.Text>
          <Card.Text style={{marginBottom: 0, color: '#595959', fontSize: '.8em', whiteSpace: 'pre-line' }}>
          <CircleIcon style={{paddingRight: '5px', color: '#84CC82', fontSize: 'small'}} />
          Direct quotes
          </Card.Text>
      </Card.Body>
      </Card>
    </div>
  )
}

export default App;