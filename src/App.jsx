import { useState } from 'react'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import TheMain from './components/TheMain'

import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <TheHeader />
      <TheMain />
      <TheFooter />
    </div>
    </>
  )
}

export default App
