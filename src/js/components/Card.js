import { React } from "react";
import { Card } from "react-bootstrap"
import "../../App.css";
import global from '../../Global'
import CircleIcon from '@mui/icons-material/Circle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// an individual insight on search results page
function App(insight) {
  const article = global.articles.find(a => a.id === insight.aid)
  const quote = insight.insight.includes(`"`) || insight.insight.includes(`“`) ? 'Direct quotes' : 'Rephrase'
  const circleColor = quote === 'Rephrase' ? '#84CC82' : '#FFAC1C'
  return (
    <div>
      <Card style={{ background: 'white', padding: '1.5em', margin: '1em', borderRadius: '20px', font: 'Inter' }}>
      <Card.Body>
          <Card.Title style={{fontWeight: 500, marginBottom: '1em'}}>{insight.insight}</Card.Title>
          <Card.Link style={{textDecoration: 'none', color: global.colors.blue, border: 'none', background: 'none', fontWeight: 700, fontSize: '.8em', padding: 0}} href={article.url}>
            {article.title}
            <OpenInNewIcon style={{marginLeft: '5px', fontSize: 'small'}} />
            </Card.Link>
          <Card.Text style={{margin: 0, color: '#595959', fontSize: '.8em', whiteSpace: 'pre-line' }}>
          {`${article.authors} (${article.date.slice(-4)})`}
          </Card.Text>
          <Card.Text style={{marginBottom: 0, color: '#595959', fontSize: '.8em', whiteSpace: 'pre-line' }}>
          <CircleIcon style={{paddingRight: '5px', color: circleColor, fontSize: 'small'}} />
          {quote}
          </Card.Text>
      </Card.Body>
      </Card>
    </div>
  )
}

export default App;