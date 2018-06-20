import './Header.css'
import {componentJS} from '../../../lib'

const Header = () => {

  const setupHeaderJS = () => {
    console.log('setupHeaderJS invoked')

    const headerLink = document.querySelector('#headerLink')

    const state = {
      headerLinkColor: headerLink.style.color,
      toggled: false
    }

    const toggleColor = () => {
      if (state.toggled) {
        headerLink.style.color = state.headerLinkColor
        state.toggled = false
      } else {
        headerLink.style.color = 'red'
        state.toggled = true
      }
    }

    headerLink.addEventListener('click', toggleColor)
  };

  componentJS.save(setupHeaderJS)

  return `
    <header>
      <h1>Header</h1>
      <nav>
        <a href="#" id="headerLink">linkA</a>
        <a href="#">linkB</a>
        <a href="#">linkC</a>
      </nav>
    </header>
  `
}

export default Header