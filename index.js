import App from './src/App'
import {renderComponentUnder} from './src/lib'


renderComponentUnder(
  document.getElementById('root'),
  new App().render()
)