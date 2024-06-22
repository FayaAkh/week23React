import Card from '../components/Card/Card'
import './App.css'
import themeBlue from '../components/themeBlue.module.css'
import themeRed from '../components/themeRed.module.css'
import themeBlack from '../components/themeBlack.module.css'
import themeGreen from '../components/themeGreen.module.css'
import {data} from '../data'
function App() {
  const themes = [themeBlue, themeGreen, themeRed, themeBlack];


  return (
    <>
    <div className='cardBox'>
  {data.map((item, index) => (
    <Card key={index} {...item} theme={themes[index]} />
  ))}
</div>
    </>
  )
}

export default App
