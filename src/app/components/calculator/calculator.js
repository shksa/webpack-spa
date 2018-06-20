import './calculator.css'
import {componentJS} from '../../lib'

const Calculator = () => {
  const setupCalculatorJS = () => {
  };
  componentJS.save(setupCalculatorJS)
  return `
    <div id="calculator">
      <div id="screen">start calculating</div>
      <div id="calculator-buttons-wrapper">
        <div class="calculator-buttons-row" id="calculator-operators-row">
          <button name="add">+</button>
          <button name="subtract">-</button>
          <button name="multiply">*</button>
          <button name="divide">/</button>
        </div>
        <div class="calculator-buttons-row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div class="calculator-buttons-row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div class="calculator-buttons-row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
      </div>
    </div>
  `
}

export default Calculator