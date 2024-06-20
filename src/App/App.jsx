import Card from '../components/Card/Card'
import './App.css'
import themeBlue from '../components/themeBlue.module.css'
import themeRed from '../components/themeRed.module.css'
import themeBlack from '../components/themeBlack.module.css'
import themeGreen from '../components/themeGreen.module.css'
import {data} from '../data'
function App() {
  //console.log(data)

  return (
    <>
    <div className='cardBox'>
    <Card {...data[0]} theme={themeBlue} />
    <Card {...data[1]} theme={themeGreen} />
    <Card {...data[2]} theme={themeRed} />
    <Card {...data[3]} theme={themeBlack} />
    </div>
    </>
  )
}

export default App
