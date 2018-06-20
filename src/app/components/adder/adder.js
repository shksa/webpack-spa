import './adder.css'
import {componentJS} from '../../lib'

const Adder = () => {

  const setupAdderJS = () => {
    console.log('setupAdderJS invoked')
    const incrementButton = document.querySelector('#increment-button')
    const counter = document.querySelector('#counter')
    const handleIncrement = () => {
      counter.value = Number(counter.value) + 1
    }
    incrementButton.addEventListener('click', handleIncrement)
  }
  
  componentJS.save(setupAdderJS)

  return `
    <div id="adder">
      Type a number: <input type="number" value=0 id="counter"><br>
      <button type="button" id="increment-button">increment</button>
    </div>
  `
}

export default Adder