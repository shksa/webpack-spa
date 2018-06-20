// export const fetchComponentHTML = async (componentHTMLpath) => {
//   const response = await fetch(componentHTMLpath)
//   const htmlText = await response.text()
//   return htmlText
// }

export const componentJS = {
  save: function(jsSetupFunc) {
    this.savedFunctions.push(jsSetupFunc)
  },
  savedFunctions: []
}



