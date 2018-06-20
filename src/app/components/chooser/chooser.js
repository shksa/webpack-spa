import './chooser.css'
import {componentJS} from '../../lib'

const Chooser = (props) => {

  const setupChooserJS = function() {
    const chooserButtons = document.querySelectorAll('#chooser > button')
    const handleComponentSelection = (event) => {
      props.changeComponentOnDisplay(event.target.name)
    }
    chooserButtons.forEach(chooserButton => {
      chooserButton.addEventListener('click', handleComponentSelection)
    })
  }

  componentJS.save(setupChooserJS)
  
  return `
    <div id="chooser">
      Choose a component: 
      <button name="adder">adder</button>
      <button name="calculator">calculator</button>
      <button name="canvas">canvas</button>
    </div>
  `
}

export default Chooser