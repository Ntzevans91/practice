import './App.css'
import {Routes,Route} from 'react-router-dom'
import Header         from './Header.jsx'
import Footer         from './Footer.jsx'
import Greet          from './Greet'
import NavBar         from './NavBar'
import Home           from './Home'
import User           from './User'
import About          from './About'
import NotFound       from './NotFound'
import FavColor       from './FavColor.jsx'
import Counter        from './Counter'
import LightTracker   from './LightTracker'
import LightSwitch    from './LightSwitch'
import WorldClock    from './WorldClock'
import WeatherApp    from './WeatherApp'





const currentYear= new Date().getFullYear()

function App() {


  return (
    <>
      <Header title={currentYear}/>
      <Greet/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user/:id' element={<User/>}/>
        <Route path='/notFound' element={<NotFound/>}/>
        <Route path='/FavColor' element={<FavColor/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/LightTracker' element={<LightTracker/>}/>
        <Route path='/LightSwitch' element={<LightSwitch/>}/>
        <Route path='/WorldClock' element={<WorldClock/>}/>
        <Route path='/WeatherApp' element={<WeatherApp/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
