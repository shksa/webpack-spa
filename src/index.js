// import './index.css'
// import setupAdderJS from './app/adder/adder'
// import setupCalculatorJS from './app/calculator/calculator'
// import setupCanvasJS from './app/canvas/canvas'
// import {setupChooserJS, loadComponent} from './app/chooser/chooser'

// const allComponents = {
//   adder: {
//     htmlPath: '/app/adder/adder.html',
//     JSsetup: setupAdderJS
//   },
//   calculator: {
//     htmlPath: '/app/calculator/calculator.html',
//     JSsetup: setupCalculatorJS
//   },
//   canvas: {
//     htmlPath: '/app/canvas/canvas.html',
//     JSsetup: setupCanvasJS
//   }
// }

// loadComponent('/app/chooser/chooser.html', setupChooserJS.bind(null, allComponents))
import './index.css'
import HomePage from './app/HomePage/HomePage'
import {componentJS} from './app/lib'

const setupRenderedComponentsJS = () => {
  componentJS.savedFunctions.forEach(componentJSsetupFunction => {
    componentJSsetupFunction()
  })
}

const App = () => {
  const bodyNode = document.getElementById('body')
  bodyNode.innerHTML = HomePage()
  setupRenderedComponentsJS()
}

App()