import { Home } from './pages/Home'
import { Header } from './components/Header'
import { ButtonScroll } from './components/ButtonScroll'
import './styles/App.scss'
import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <><div>Loading...</div></>
  }
  return (
    <div className="App">
      <Header />
      <Home />
      <ButtonScroll />

    </div>
  )
}

export default App
