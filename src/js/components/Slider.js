import { Slider } from '@mui/material'

// slider component in the filtering section on search results page
function App() {
    return (
        <Slider
        // getAriaLabel={() => 'Temperature range'}
        value={[1950, 2030]}
        min={1950}
        max={2030}
        step={10}
        marks
        // onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={0}
      />
    )
}

export default App