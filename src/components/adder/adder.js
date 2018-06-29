import './adder.css'
import { domParser } from "../../lib";

class Adder {
  constructor(props) {
    this.props = props;
  }

  setupNodesAndListeners = () => {
    console.log('Adder setupNodesAndListeners invoked')
    this.incrementButton = this.compTree.querySelector("#increment-button");
    this.counter = this.compTree.querySelector("#counter");
    this.incrementButton.onclick = this.handleIncrement;
  }

  handleIncrement = () => {
    this.counter.value = Number(this.counter.value) + 1;
  }

  getHtml = () => {
    return `
      <div id="adder">
        Type a number: <input type="number" value=0 id="counter"><br>
        <button type="button" id="increment-button">increment</button>
      </div>
    `;
  }

  render(){
    const compHtml = this.getHtml();
    this.compTree = domParser(compHtml);
    this.setupNodesAndListeners();
    return this.compTree;
  }
}

export default Adder;
