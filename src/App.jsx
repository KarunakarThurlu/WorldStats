

import CountryTable from './Components/Charts/CountryTable'

import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AppHeader from './Components/AppHeader/AppHeader'
import MuiGrid from './Components/Data/MuiGrid'
function App() {

  return (
    <Router>
      <Routes>
        <Route
          path='/*'
          element={
            <>
              <AppHeader />
              <Routes>
              <Route path='/' element={<MuiGrid />} />
              <Route path='/country' element={<CountryTable />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
