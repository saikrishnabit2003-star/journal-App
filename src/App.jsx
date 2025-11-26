
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Fontpage from './components/Fontpage'
import Uploadpage from "./components/Uploadpage"
import Thirdpage from './components/Thirdpage'
import AvailableJournal from './components/AvailableJournal'
import AssociateEditor from './components/AssociateEditor'
import "./App.css"
import Logo from "../src/assets/logo.png"
function App() {
  const theme = () => {
    document.body.classList.toggle('dark-mode');
  }



  return (
    <>
    <div className='top'>
      
      <div className='container'>
        <img src={Logo} alt="Logo" />
        <h1>Journal Suggestion Application</h1>
        <button id='DarkTheme' onClick={theme}>Dark mode</button>
      </div>
    </div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Fontpage/>}/>
      <Route path='/Uploadpage' element={<Uploadpage/>}/>
      <Route path='/Thirdpage' element={<Thirdpage/>}/>
      <Route path='/AvailableJournal' element={<AvailableJournal/>}/>
      <Route path='/AssociateEditor' element={<AssociateEditor/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
