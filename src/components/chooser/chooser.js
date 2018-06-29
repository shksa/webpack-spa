import './chooser.css'
import { domParser } from "../../lib";

class Chooser {
  constructor(props) {
    this.props = props;
  }

  setupNodesAndListeners = () => {
    console.log('Chooser setupNodesAndListeners invoked')
    this.chooserButtons = this.compTree.querySelectorAll("#chooser > button");
    this.chooserButtons.forEach(chooserButton => {
      chooserButton.onclick = this.handleComponentSelection;
    });
  }

  handleComponentSelection = (event) => {
    this.props.changeComponentOnDisplay(event.target.name);
  }

  getHtml = () => {
    return `
      <div id="chooser">
        Choose a component: 
        <button name="adder">adder</button>
        <button name="calculator">calculator</button>
        <button name="canvas">canvas</button>
      </div>
    `;
  }

  render() {
    const compHtml = this.getHtml();
    this.compTree = domParser(compHtml);
    this.setupNodesAndListeners();
    return this.compTree;
  }
}

export default Chooser;
