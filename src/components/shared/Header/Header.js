import './Header.css'
import {domParser} from '../../../lib'

class Header {
  constructor(props) {
    this.props = props;
  }

  setupNodesAndListeners = () => {
    console.log("Header setupNodesAndListeners invoked");
    this.headerLink = this.compTree.querySelector("#headerLink");
    this.state = {
      headerLinkColor: this.headerLink.style.color,
      toggled: false
    };
    this.headerLink.onclick =  this.toggleColor;
  }

  toggleColor = () => {
    if (this.state.toggled) {
      this.headerLink.style.color = this.state.headerLinkColor;
      this.state.toggled = false;
    } else {
      this.headerLink.style.color = "red";
      this.state.toggled = true;
    }
  }

  getHtml = () => {
    return `
      <header>
        <h1>Header</h1>
        <nav>
          <a href="#" id="headerLink">linkA</a>
          <a href="#">linkB</a>
          <a href="#">linkC</a>
        </nav>
      </header>
    `;
  }

  render() {
    const compHtml = this.getHtml();
    this.compTree = domParser(compHtml);
    this.setupNodesAndListeners();
    return this.compTree;
  }
}

export default Header;
