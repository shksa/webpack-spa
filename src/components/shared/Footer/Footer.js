import './Footer.css'
import {domParser} from '../../../lib'

class Footer {
  constructor(props) {
    this.props = props;
  }

  setupNodesAndListeners = () => {
    console.log('Footer setupNodesAndListeners invoked')
  }

  getHtml = () => {
    return `
      <footer>
        <h3>footer</h3>
        <nav>
          <a href="#">linkX</a>
          <a href="#">linkY</a>
          <a href="#">linkZ</a>
        </nav>
      </footer>
    `;
  }
  render() {
    const compHtml = this.getHtml();
    this.compTree = domParser(compHtml);
    this.setupNodesAndListeners();
    return this.compTree;
  }
}

export default Footer;