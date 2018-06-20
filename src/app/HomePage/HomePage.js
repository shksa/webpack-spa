import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer'
import Adder from '../components/adder/adder'
import Calculator from '../components/calculator/calculator'
import Chooser from '../components/chooser/chooser'
import {componentJS} from '../lib'
import './HomePage.css'


const HomePage = () => {

  const setupHomePageJS = () => {
    
  };

  const changeComponentOnDisplay = (component) => {
    const componentWrapperNode = document.querySelector('#chosen-component-wrapper')
    if(component === 'adder') {
      componentWrapperNode.innerHTML = Adder()
    } else if(component === 'calculator') {
      componentWrapperNode.innerHTML = Calculator()
    } else {
      componentWrapperNode.innerHTML = Canvas()
    }
  }

  componentJS.save(setupHomePageJS)

  return `
    ${Header()}
    <main>
      <div id="chooser-wrapper">
        ${Chooser({changeComponentOnDisplay})}
      </div>
      <div id="chosen-component-wrapper">
        ${Adder()}
      </div>
    </main>
    ${Footer()}
  `
}

export default HomePage


