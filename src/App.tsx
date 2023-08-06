import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { EventDetail } from './components/EventDetails'
import { CreateEvent } from './components/CreateEvent'

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path='/event/create' element={<CreateEvent/>}/>
              <Route path='/event/:id' element={<EventDetail/>}/>
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
