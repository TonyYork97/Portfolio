import { Home } from './pages/Home'
import { Header } from './components/Header'
import { ButtonScroll } from './components/ButtonScroll'
import './styles/App.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <ButtonScroll />

    </div>
  )
}

export default App
