import './index.css'

const loadPage = async (page) => {
  const response = await fetch(page)
  const htmlText = await response.text()
  const body = document.getElementById('body')
  body.innerHTML = htmlText
}

loadPage('app/home.html')
