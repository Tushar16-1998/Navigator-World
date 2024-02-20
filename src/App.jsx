import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import GetInformation from './components/GetInformation'


function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/getinformation" element={<GetInformation />}></Route>
      </Routes>
    </main>
  )
}

export default App
