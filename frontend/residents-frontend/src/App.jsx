import './App.css'
import { FooterComponent } from './components/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent'
import ListResidentComponent from './components/ListResidentComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ResidentComponent from './components/ResidentComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          {/* // http://localhost: 9991 */}
          <Route path='/' element = {<ListResidentComponent/>}> </Route>
          {/* // http://localhost: 9991/residents */}
          <Route path='/residents' element = { <ListResidentComponent /> }> </Route>

          <Route path='/add-residents' element = {<ResidentComponent/> }></Route>
        </Routes>
      <FooterComponent />
    </BrowserRouter>  
    </>
  )
}

export default App
