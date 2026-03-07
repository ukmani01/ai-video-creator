import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./assets/Navbars/Navbar"
import NewChat from './assets/components/NewChat'
import History from './assets/components/History'

function App() {

  return (
    <BrowserRouter>

      <div className="flex">

        {/* Sidebar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-4 md:ml-64">

          <Routes>
            <Route path="/" element={<NewChat />} />
            <Route path="/history" element={<History />} />
          </Routes>

        </main>

      </div>

    </BrowserRouter>
  )
}

export default App