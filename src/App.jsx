// import { useState } from 'react'
// import { Routes, Route } from "react-router-dom"
// import Landing from "./pages/Landing"
// import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Routes>
//       <Route path="/" element={<Landing />}/>
//     </Routes>
//   )
// }

// export default App

import './App.css'
import LandingPage from './components/LandingPage'

function App() {


  return (
    <div className="App">
      <LandingPage />
    </div>
  )
}

export default App

