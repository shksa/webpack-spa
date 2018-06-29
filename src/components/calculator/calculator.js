import './calculator.css'
import {domParser} from '../../lib'

class Calculator {
  constructor(props) {
    this.props = props
  }

  setupNodesAndListeners = () => {
    console.log('Calculator setupNodesAndListeners invoked')
  };
  
  getHtml = () => {
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

  render() {
    const compHtml = this.getHtml()
    this.compTree = domParser(compHtml)
    this.setupNodesAndListeners()
    return this.compTree
  }
}

export default Calculator