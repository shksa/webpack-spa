import Header from '../../components/shared/Header/Header'
import Footer from '../../components/shared/Footer/Footer'
import Adder from '../../components/adder/adder'
import Calculator from '../../components/calculator/calculator'
import Chooser from '../../components/chooser/chooser'
import {replaceChild, processHtml, domParser, createHostAndAttachShadowTree, attachLightTree} from '../../lib'
import './HomePage.css'


class HomePage {
  constructor(props) {
    this.props = props
  }

  setupNodesAndListeners = () => {
    console.log('HomePage setupNodesAndListeners called')
    this.parentOfChoosedComponent = this.compTree.shadowRoot.querySelector('#chosen-component-wrapper')
  }

  changeComponentOnDisplay = (component) => {
    if(component === 'adder') {
      replaceChild(this.parentOfChoosedComponent, new Adder().render())
    } else if(component === 'calculator') {
      replaceChild(this.parentOfChoosedComponent, new Calculator().render())
    }
  }

  getHtml = () => {
    return processHtml`
      <div id="home-page">
        ${new Header()}
        <main>
          <div id="chooser-wrapper">
            ${new Chooser({changeComponentOnDisplay: this.changeComponentOnDisplay})}
          </div>
          <div id="chosen-component-wrapper">
            ${new Adder()}
          </div>
        </main>
        ${new Footer()}
      </div>
    `
  }  

  render() {
    const { ownComponentHtmlWithSlots, outerComponents } = this.getHtml();
    const ownComponentTreeWithSlots = domParser(ownComponentHtmlWithSlots);
    const hostWithShadowTree = createHostAndAttachShadowTree(ownComponentTreeWithSlots);
    const hostWithBothShadowAndLightTree = attachLightTree(hostWithShadowTree, outerComponents);
    this.compTree = hostWithBothShadowAndLightTree
    this.setupNodesAndListeners()
    return this.compTree
  }
}

export default HomePage


