import { useEffect, useState } from 'react'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { ButtonScroll } from './components/ButtonScroll'
import { Loader } from './components/Loader'
import './styles/App.scss'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loader = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearTimeout(loader)
    }
  }, [])

  if (isLoading) {
    return <Loader />
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
