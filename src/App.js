import './styles.css'
import HomePage from './pages/HomePage/HomePage'

class App {
  render() {
    return new HomePage().render()
  }
}

export default App